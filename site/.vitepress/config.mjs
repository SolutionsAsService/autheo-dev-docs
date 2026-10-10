import { defineConfig } from 'vitepress';
import manifest from '../../publication.json' with { type: 'json' };
export default defineConfig({
 title: 'AUTHEO Docs', description: 'Evidence-led guides to AUTHEO Chain and the wider ecosystem.',
 transformHtml: (code, id) => id.endsWith('404.html') ? code.replace('<div id="app"></div>', '<main><h1>Page not found</h1><p>This page is not part of the published documentation.</p><a href="' + (process.env.DOCS_BASE || '/') + '">Return to AUTHEO docs</a></main>') : code,
 lang: 'en-US', base: process.env.DOCS_BASE || '/', outDir: '../../dist',
 cleanUrls: false, ignoreDeadLinks: false,
 head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
 themeConfig: {
  search: { provider: 'local' }, outline: [2, 3],
  nav: [{text:'Start here',link:'/getting-started/'},{text:'Reference',link:'/reference/status'},{text:'Contribute',link:'/contributing/'}],
  sidebar: manifest.groups.map(group=>({text:group.title,items:group.pages.map(p=>({text:p.title,link:'/'+p.file.replace(/\.md$/,'').replace(/index$/,'')}))})),
  footer: { message: 'Documentation · reviewed 9 October 2026 · verify release and network before use.' }
 }
});
