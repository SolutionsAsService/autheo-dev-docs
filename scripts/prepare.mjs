import fs from 'node:fs';
import path from 'node:path';
import {validateManifest,assertRegular} from './publication.mjs';
const manifest=JSON.parse(fs.readFileSync('publication.json','utf8'));
const pages=validateManifest(manifest);
const base=process.env.DOCS_BASE||'/';
if(!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) throw Error('DOCS_BASE must be a slash-delimited URL path');
fs.rmSync('.build/site',{recursive:true,force:true});
fs.rmSync('dist',{recursive:true,force:true});
for(const file of [...pages.map(p=>p.file),'.vitepress/config.mjs','.vitepress/theme/index.mjs','.vitepress/theme/style.css']) {
 const source=assertRegular('site',file);
 const dest=path.join('.build/site',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(source,dest);
}
fs.copyFileSync('publication.json','.build/publication.json');
console.log('Staged '+pages.length+' explicitly allowlisted pages; legacy sources excluded.');
