import fs from 'node:fs';
import path from 'node:path';
import {pages,route,renderPage,renderBody,publicFiles} from './render.mjs';
import {assertRegular} from './publication.mjs';
// Reject symlink ancestors before writing any generated output.
for(const file of [...publicFiles,'dist/.output']){let current=path.resolve('.');for(const segment of file.split('/')){current=path.join(current,segment);if(fs.existsSync(current)&&fs.lstatSync(current).isSymbolicLink())throw Error('Refusing output symlink: '+file);}}
// Only these generated destinations are written. Public Markdown is never recursively copied.
for(const page of pages){const target=route(page.file);fs.mkdirSync(path.dirname(target),{recursive:true});if(fs.existsSync(target))assertRegular('.',target);fs.writeFileSync(target,renderPage(page));}
fs.mkdirSync('assets',{recursive:true});
const index=pages.map(p=>({title:p.title,path:route(p.file),text:renderBody(p.file).text}));
fs.writeFileSync('assets/search-index.js','window.AUTHEO_DOCS_INDEX = '+JSON.stringify(index).replace(/</g,'\\u003c')+';\n');
fs.writeFileSync('.nojekyll','');
for(const file of publicFiles)assertRegular('.',file);
if(fs.existsSync('dist')&&fs.lstatSync('dist').isSymbolicLink())throw Error('Refusing symlink dist');
fs.rmSync('dist',{recursive:true,force:true});
for(const file of publicFiles){const target=path.join('dist',file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(file,target);}
console.log('Rendered '+pages.length+' complete HTML documents in repository root; identical allowlisted static-only copy in dist/.');
