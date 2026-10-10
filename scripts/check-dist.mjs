import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';
import {validateManifest} from './publication.mjs';
const pages=validateManifest(JSON.parse(fs.readFileSync('publication.json')));
const root=path.resolve('dist');const base=process.env.DOCS_BASE||'/';
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root);const html=files.filter(f=>f.endsWith('.html'));const failures=[];const external=new Set();let localLinks=0;
const expected=new Set(pages.map(p=>p.file.replace(/\.md$/,'.html')).concat('404.html'));
for(const p of expected)if(!fs.existsSync(path.join(root,p)))failures.push('Missing route '+p);
for(const f of html){
 const relative=path.relative(root,f);if(!expected.has(relative))failures.push('Unallowlisted HTML '+relative);
 const $=load(fs.readFileSync(f,'utf8'));
 if(!$('html').attr('lang'))failures.push('Missing lang '+relative);
 if(!$('title').text())failures.push('Missing title '+relative);
 if(!$('main,[role=main]').length)failures.push('Missing main landmark '+relative);
 if(relative!=='404.html'&&$('main h1').length!==1)failures.push('Expected one main h1 '+relative);
 for(const el of $('[href],[src]').toArray()){
  const value=$(el).attr('href')||$(el).attr('src');if(!value||/^(data:|mailto:|tel:)/.test(value))continue;
  const u=new URL(value,'https://docs.invalid'+base+relative);
  if(u.origin!=='https://docs.invalid'){external.add(u.href);continue;}
  if(!u.pathname.startsWith(base)){failures.push(relative+' outside mount: '+value);continue;}
  let dest=decodeURIComponent(u.pathname.slice(base.length));if(dest.endsWith('/')||!dest)dest+='index.html';
  if(!path.extname(dest))dest+='.html';
  const absolute=path.resolve(root,dest);
  if(!absolute.startsWith(root+path.sep)||!fs.existsSync(absolute)){failures.push(relative+' missing '+value);continue;}
  localLinks++;
  if(u.hash&&absolute.endsWith('.html')){const target=load(fs.readFileSync(absolute,'utf8'));const id=decodeURIComponent(u.hash.slice(1));if(!target('[id]').toArray().some(e=>target(e).attr('id')===id))failures.push(relative+' missing fragment '+value);}
 }
}
const denied=['FINAL DOCS/','FOOD-FOR-THE-AI-GODS/','docs/compliance/','fincen_MRA_draft','152567394+','AUTHEO-PLANNING'];
for(const f of files.filter(f=>/\.(html|js|json|txt|css)$/.test(f))){const s=fs.readFileSync(f,'utf8');for(const term of denied)if(s.includes(term))failures.push('Private-source marker '+term+' in '+path.relative(root,f));}
fs.mkdirSync('artifacts',{recursive:true});fs.writeFileSync('artifacts/route-check.json',JSON.stringify({base,pages:pages.length,html:html.length,localLinks,externalUrls:[...external].sort(),externalUrlsTested:false,failures},null,2));
console.log(JSON.stringify({pages:pages.length,html:html.length,localLinks,externalUrls:external.size,failures},null,2));
if(failures.length)process.exitCode=1;
