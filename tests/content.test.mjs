import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=p=>fs.readFileSync(p,'utf8');
test('component explanations cover responsibilities and failure boundaries',()=>{
 const checks={mesh:['lifecycle','admission','stateful','warm'],connectivity:['authorization','relay','discovery','underlay'],devhub:['OpenEdge','Build','rollback','Marketplace'],marketplace:['acceptance','dispute','asset location','reservation'],freddie:['revocation','spending','delegat','retry']};
 for(const [name,terms] of Object.entries(checks)) {const s=read('site/components/'+name+'.md');assert.ok(s.includes('Design / planned'));assert.ok(s.split(/\s+/).length>300,name+' must be a substantive explanation');for(const t of terms)assert.ok(s.toLowerCase().includes(t.toLowerCase()),name+': '+t);}
});
test('source-backed API and network references retain pinned evidence',()=>{
 assert.match(read('site/reference/api.md'),/976ec4328d342a07e6ef7eb9ecaec222c55f29e1/);
 assert.ok(read('site/reference/api.md').includes('GET /autheo/v1/params'));
 assert.match(read('site/reference/networks.md'),/a02ac6576dd3b687effc0d741a71a88b094aba21/);
 assert.match(read('site/reference/networks.md'),/autheo_2127-1/);
});
test('design pages contain no invented executable deployment command',()=>{
 for(const f of ['mesh','connectivity','devhub','marketplace','freddie'])assert.doesNotMatch(read('site/components/'+f+'.md'),/autheo deploy|npm install.*autheo|curl .*\|.*sh/);
});
