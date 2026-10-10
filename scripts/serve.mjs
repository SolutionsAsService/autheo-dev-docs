import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {pathToFileURL} from 'node:url';
import {publicFiles} from './static-files.mjs';
import {assertRegular} from './publication.mjs';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
// Deliberately no SPA fallback or clean-URL rewriting. Both mounts serve identical bytes.
export function startServer({port=0,root=path.resolve('.')}={}){
 const allowed=new Set(publicFiles);const server=http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
  let file;try{file=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end();}
  if(file.startsWith('/autheo-dev-docs/'))file=file.slice('/autheo-dev-docs'.length);
  if(file.endsWith('/'))file+='index.html';file=file.slice(1);
  if(!allowed.has(file)||file==='.nojekyll'){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});return res.end('Not found');}
  try{const source=assertRegular(root,file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});if(req.method==='HEAD')return res.end();fs.createReadStream(source).pipe(res);}catch{res.writeHead(404);res.end('Not found');}
 });
 return new Promise(resolve=>server.listen(port,'127.0.0.1',()=>resolve(server)));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){const arg=process.argv.indexOf('--port');const port=Number(arg>=0?process.argv[arg+1]:(process.env.PORT||4175));const server=await startServer({port});console.log('Static docs: http://127.0.0.1:'+server.address().port+'/ (also /autheo-dev-docs/)');for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));}
