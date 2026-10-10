import fs from 'node:fs';
import path from 'node:path';
export function validateManifest(manifest) {
 if(manifest.schemaVersion!==1 || !Array.isArray(manifest.groups)) throw Error('Invalid publication manifest');
 const pages=manifest.groups.flatMap(g=>g.pages);
 const seen=new Set();
 for(const p of pages) {
  if(!p.title || !/^[a-z0-9/-]+\.md$/.test(p.file) || p.file.includes('..') || p.file.startsWith('/')) throw Error('Unsafe page path');
  if(seen.has(p.file)) throw Error('Duplicate public page'); seen.add(p.file);
 }
 if(!seen.has('index.md')) throw Error('Missing home page');
 return pages;
}
export function assertRegular(root,relative) {
 const base=path.resolve(root); const target=path.resolve(base,relative);
 if(!target.startsWith(base+path.sep)) throw Error('Path escapes root');
 let current=base;
 for(const segment of relative.split('/')) { current=path.join(current,segment); if(fs.lstatSync(current).isSymbolicLink()) throw Error('Symlink refused'); }
 if(!fs.statSync(target).isFile()) throw Error('Not a regular file');
 return target;
}
