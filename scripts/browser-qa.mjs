import fs from 'node:fs';
import {chromium} from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';
const browser=await chromium.launch({headless:true,chromiumSandbox:true,executablePath:process.env.CHROMIUM_PATH});
const origin=(process.env.QA_ORIGIN||'http://127.0.0.1:4175').replace(/\/$/,'');
const base=process.env.DOCS_BASE||'/';
const manifest=JSON.parse(fs.readFileSync('publication.json'));
const pages=manifest.groups.flatMap(g=>g.pages);const failures=[];const results=[];
fs.mkdirSync('artifacts/screenshots',{recursive:true});
try{
 for(const [device,viewport] of Object.entries({desktop:{width:1440,height:1000},mobile:{width:390,height:844}})){
  const context=await browser.newContext({viewport});const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('response',response=>{if(response.status()>=400)errors.push('HTTP '+response.status()+' '+response.url());});
  for(const entry of pages){
   const route=base+entry.file.replace(/\.md$/,'.html').replace(/index\.html$/,'');
   const response=await page.goto(origin+route,{waitUntil:'networkidle'});
   if(response.status()!==200)failures.push(device+' '+route+' HTTP '+response.status());
   await page.locator('main h1').waitFor();
   const body=await page.locator('main').innerText();
   if(body.trim().length<350)failures.push(device+' '+route+' thin/empty content');
   if(entry.file.startsWith('components/')&&!body.includes('Design / planned'))failures.push(device+' '+route+' missing design status');
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
   if(overflow)failures.push(device+' '+route+' horizontal overflow');
   const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   const violations=axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length}));
   if(violations.length)failures.push({device,route,violations});
   console.log(device+' '+route+' checked');
   results.push({device,route,status:response.status(),h1:await page.locator('main h1').innerText(),overflow,violations});
  }
  await page.goto(origin+base,{waitUntil:'networkidle'});
  await page.screenshot({path:'artifacts/screenshots/'+device+'-home.png',fullPage:true});
  if(device==='mobile'){
   await page.getByRole('button',{name:'Menu',exact:true}).click();
   await page.locator('.VPSidebar').getByRole('link',{name:'API reference',exact:true}).click();
   await page.waitForURL('**/reference/api.html');
   await page.waitForFunction(()=>!document.querySelector('.VPSidebar.open'));
   await page.locator('.VPBackdrop').waitFor({state:'hidden'});
   await page.screenshot({path:'artifacts/screenshots/mobile-api.png',fullPage:true});
  }else{
   await page.keyboard.press('Tab');
   const first=await page.evaluate(()=>document.activeElement?.textContent);
   if(!first?.includes('Skip to content'))failures.push('Keyboard skip link not first');
   await page.getByRole('button',{name:'Search',exact:false}).first().click();
   await page.locator('.VPLocalSearchBox').waitFor();
   await page.locator('.VPLocalSearchBox input').fill('network');
   await page.locator('.VPLocalSearchBox').getByRole('link').first().waitFor();
   await page.keyboard.press('Escape');
  }
  if(errors.length)failures.push({device,pageErrors:errors});
  await context.close();
 }
}finally{await browser.close();}
fs.writeFileSync('artifacts/browser-qa.json',JSON.stringify({results,failures,coverage:pages.length+' pages × 2 viewports; WCAG-tagged axe checks, navigation, local search, skip link, screenshots. Automated checks are not full WCAG certification.'},null,2));
console.log(JSON.stringify({pageViewportChecks:results.length,failures},null,2));if(failures.length)process.exitCode=1;
