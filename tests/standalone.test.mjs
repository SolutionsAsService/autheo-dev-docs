import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const read=file=>fs.readFileSync(file);
const hash=buffer=>crypto.createHash('sha256').update(buffer).digest('hex');
const provenance=JSON.parse(read('provenance.json'));
const manifest=JSON.parse(read('publication.json'));
const pages=manifest.groups.flatMap(g=>g.pages);
test('all 23 final pages are hash-bound with explicit destination adaptations',()=>{
 assert.equal(pages.length,23);assert.deepEqual(provenance.pages.map(p=>p.file).sort(),pages.map(p=>p.file).sort());
 for(const page of provenance.pages){assert.equal(hash(read('site/'+page.file)),page.publishedSha256,page.file);if(page.adaptation===null)assert.equal(page.sourceSha256,page.publishedSha256);else assert.equal(page.file,'deployment/index.md');}
 assert.equal(provenance.pages.filter(p=>p.adaptation===null).length,22);
});
test('standalone package requires no source checkout or private scripts',()=>{
 const pkg=JSON.parse(read('package.json'));assert.equal(pkg.scripts.audit,undefined);assert.equal(pkg.scripts.check,'npm test && npm run docs:build');
 assert.equal(manifest.visibility,'public');assert.equal(manifest.releaseApproved,true);
 const lock=JSON.parse(read('package-lock.json'));assert.equal(lock.name,pkg.name);assert.equal(lock.packages[''].name,pkg.name);
 assert.match(read('scripts/build-pages.mjs').toString(),/autheo-dev-docs/);
});
test('portable source files contain no credential or private-location patterns',()=>{
 const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(dir+'/'+e.name):[dir+'/'+e.name]);
 const files=['README.md','publication.json','provenance.json','package.json','package-lock.json',...walk('site')];
 const denied=[/gh[pousr]_[A-Za-z0-9]{20,}/,/github_pat_[A-Za-z0-9_]{20,}/,/AKIA[A-Z0-9]{16}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/\/home\/[^\s]+/,/https?:\/\/[^/\s]+:[^/\s]+@/,/AUTHEO-PLANNING|FINAL DOCS|FOOD-FOR-THE-AI-GODS|fincen_MRA_draft/];
 for(const file of files)for(const pattern of denied)assert.doesNotMatch(read(file).toString(),pattern,file);
});
test('invalid mount paths fail closed before preparing content',()=>{
 const result=spawnSync(process.execPath,['scripts/prepare.mjs'],{env:{...process.env,DOCS_BASE:'../escape'}});assert.notEqual(result.status,0);assert.match(result.stderr.toString(),/DOCS_BASE/);
});
