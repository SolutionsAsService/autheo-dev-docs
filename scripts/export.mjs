import fs from 'node:fs';
import path from 'node:path';
import {validateManifest,assertRegular} from './publication.mjs';
const pages=validateManifest(JSON.parse(fs.readFileSync('publication.json')));
const root='artifacts/standalone-docs';
const files=['README.md','.gitignore','package.json','package-lock.json','publication.json','provenance.json','ci/verify.yml.example','site/.vitepress/config.mjs','site/.vitepress/theme/index.mjs','site/.vitepress/theme/style.css',...pages.map(p=>'site/'+p.file),'scripts/publication.mjs','scripts/prepare.mjs','scripts/check-dist.mjs','scripts/export.mjs','scripts/build-pages.mjs','scripts/browser-qa.mjs','tests/publication.test.mjs','tests/content.test.mjs','tests/standalone.test.mjs'];
// Validate every input before replacing the generated export directory.
for(const file of files) assertRegular('.',file);
if(fs.existsSync(root)&&fs.lstatSync(root).isSymbolicLink()) throw Error('Export root cannot be a symlink');
fs.rmSync(root,{recursive:true,force:true});
for(const file of files){const dest=path.join(root,file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(file,dest);}
console.log('Exported '+files.length+' allowlisted source files and '+pages.length+' pages; no Git history, dependencies or private inputs.');
