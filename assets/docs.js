(() => {
 'use strict';
 const script=document.currentScript;
 const root=new URL('../',script.src);
 const entries=window.AUTHEO_DOCS_INDEX;
 if(!Array.isArray(entries))return;
 const panel=document.querySelector('.search');const input=document.querySelector('#docs-search');const results=document.querySelector('#search-results');const status=document.querySelector('#search-status');
 panel.hidden=false;
 const searchable=entries.map(entry=>({...entry,normalized:(entry.title+' '+entry.text).toLocaleLowerCase()}));
 input.addEventListener('input',()=>{
  results.replaceChildren();const query=input.value.trim().toLocaleLowerCase().slice(0,200);if(!query){status.textContent='';return;}
  const words=query.split(/\s+/);const matches=searchable.filter(e=>words.every(w=>e.normalized.includes(w))).sort((a,b)=>Number(b.title.toLocaleLowerCase().includes(query))-Number(a.title.toLocaleLowerCase().includes(query)));
  status.textContent=matches.length+' document'+(matches.length===1?'':'s')+' found';
  for(const entry of matches){const li=document.createElement('li');const a=document.createElement('a');a.href=new URL(entry.path,root).href;a.textContent=entry.title;const snippet=document.createElement('p');const start=Math.max(0,entry.text.toLocaleLowerCase().indexOf(words[0])-45);snippet.textContent=(start?'…':'')+entry.text.slice(start,start+170)+'…';li.append(a,snippet);results.append(li);}
 });
 input.addEventListener('keydown',event=>{if(event.key==='Escape'){input.value='';input.dispatchEvent(new Event('input'));}if(event.key==='ArrowDown'){const first=results.querySelector('a');if(first){event.preventDefault();first.focus();}}});
 const navigation=document.querySelector('.navigation');
 if(matchMedia('(max-width: 760px)').matches)navigation.open=false;
})();
