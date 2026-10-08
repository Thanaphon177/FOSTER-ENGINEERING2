const CL={"dole": "images/photo-08.png", "jbe": "images/photo-09.png", "myanmar": "images/photo-10.png", "ramachem": "images/photo-11.png", "yummix": "images/photo-12.png", "pttep": "images/photo-13.png", "tcg": "images/photo-14.png", "mycom": "images/photo-15.png", "ktis": "images/photo-16.png", "unilever": "images/photo-17.png", "cadbury": "images/photo-18.png", "rojana": "images/photo-19.png", "posco": "images/photo-20.png", "apf": "images/photo-21.png", "crest1": "images/photo-22.png", "hales": "images/photo-23.png", "walls": "images/photo-24.png", "crest2": "images/photo-25.png", "lion": "images/photo-26.png", "cityfood": "images/photo-27.png", "delta": "images/photo-28.png", "bgrimm": "images/photo-29.png", "tipco": "images/photo-30.png", "gas": "images/photo-31.png", "akzo": "images/photo-32.png", "scgp": "images/photo-33.png", "rb": "images/photo-34.png", "sanmiguel": "images/photo-35.png", "scg": "images/photo-36.png", "slurry": "images/photo-37.png", "nestle": "images/photo-38.png", "ravotek": "images/photo-39.png"};const LOGOS=k=>CL[k];
const W='Wonderware Intouch',AB='Allen-Bradley Control Logix PLCs',S3='Siemens S7-300 PLCs',S4='Siemens S7-400 PLCs';
const R=[
['dole','Dole',['Automatic Pasteurizer Systems|Siemens PLCs & Siemens HMI']],
['nestle','Nestlé',['Energy Consumption Monitoring|Alstom Power Analyzer (K-Bus and Courier Protocol)|Siemens Power Meter, Janitza Power Meter (MODBUS)','Conveyor|AB Compact Logix PLC|Panel View Plus 700']],
['cadbury','Cadbury Adams',['Automatic Mixing and CIP Skid|Omron PLCs|Omron HMI']],
['unilever','Unilever',[
'Liquid Plant Mixing Process|'+W+' SCADA, Inbatch Recipe Control|Allen Bradley Control Logix PLCs',
'Regular Power Plant (NSD)|'+W+' SCADA|Allen Bradley Control Logix PLCs',
'Sulphonation Chemical Plant|'+W+' SCADA|Siemens S7-400 PLCs',
'Refrigeration Plant Compressor Control|'+W+' SCADA, Siemens TP170|'+S3,
'MX 401 PHE Liquid Plant|'+AB+'|'+W+', Wonderware Inbatch',
'Dressing Batch Control|'+W+' SCADA, Proface Touch Screen|'+S3,
'Sauce Process Control|'+W+' SCADA, Proface Touch Screen|'+S3,
'Post Dosing NSD|'+W+' SCADA|'+AB,
'Pneumatic Transport|'+AB+'|'+W,
'Aurus Projects|'+AB+'|'+W,
'PTR Phase 3|'+AB+'|Panel View 1000',
'NSD Modification|'+AB+'|'+W,
'New Home Care Plant|Wonderware Inbatch|Siemens PLCs',
'Mixer Line 6, Unilever Thai Holding Ltd. (with GEA)|'+W+', Wonderware Inbatch|'+AB,
'SCADA Migration (NTR Plant)|'+W+', Archestra IDE',
'Redundancy Database Server|SQL 2014',
'Case Packer Machine|Omron PLCs|Proface HMI']],
['crest1','',['Water Treatment and Supply|RSView32 SCADA|Allen Bradley SLC500 PLCs']],
['walls',"Wall's / Unilever",['Mix Plant 3|'+W+'|'+S4,'Upgrade Refrigeration System|'+W+'|'+S3]],
['gas','',['Gas Booster Control Migration|FTView SCADA|Allen Bradley SLC 500 PLCs']],
['myanmar','Myanmar Brewery',['Fermenting Cellar Expansion|Allen-Bradley PLC5|iFix SCADA']],
['mycom','MYCOM',['Refrigeration Systems Sea Wealth Food|Mitsubishi PLCs']],
['bgrimm','B.Grimm',['Power Plant Amata B.Grimm|Panel and Instruments Installation']],
['rb','Reckitt Benckiser',['Hand Sanitary Product|Siemens HMI|Siemens PLCs']],
['ravotek','Ravotek',['Boiler Energy Saving|Mitsubishi HMI|Mitsubishi PLCs']],
['crest2','',['Cooling Tower Control Migration|Allen-Bradley PLCs']],
['tipco','Tipco Asphalt',['PLCs & SCADA Migration (Raycol Rayong)|'+W+'|'+S3,'PLCs & SCADA Migration (Korat Plant)|'+W+'|'+S3,'PLCs & SCADA Migration (Pisanulok Plant)|'+W+'|'+S3]],
['slurry','Thai Slurry Seal',['PLCs & SCADA Migration|'+W+'|'+S3]],
['posco','POSCO Thainox',['PLCs & Drive Migration|Telemecanique|GE Drive']],
['sanmiguel','San Miguel',['PLCs Migration|Siemens S5 to Siemens S7']],
['akzo','AkzoNobel / Dulux',['Automatic Pigging Systems (Akzo Nobel Thailand Plant)|Omron PLCs CJ2M|Omron HMI','Automatic Pigging Systems (Akzo Nobel Malaysia Plant)|Omron PLCs CJ2M|Omron HMI','PLC & Servo Migration|Siemens S7-300, S7-1200 PLCs|Siemens HMI|Yaskawa Servo']],
['scg','SCG',['Automatic Sampling Systems (Thungsong Plant)|'+W+'|'+S3,'Automatic Sampling Systems (Thaluang Plant)|'+W+'|'+S3]],
['scgp','SCG Packaging',['Air and Water|Siemens S7-300, S7-1200 PLCs|Migration from GE90-30']],
['hales','Hale\u2019s Blue Boy',['Automatic Mixer and Pasteurizer|'+W+'|'+S4]],
['pttep','PTTEP',['Refrigeration|Siemens Wincc Flexible|'+S4]],
['cityfood','City Food',['Automatic Pasteurizer Systems|Proface HMI|'+S3]],
['apf','APF',['Automatic Pasteurizer Systems|Siemens HMI|Siemens S7-1200 PLCs']],
['tcg','TCG',['Ultra Filtration Systems|Siemens HMI|Siemens S7-400 PLCs Redundancy']],
['jbe','JBE',['HVAC|AB Compact Logix PLC']],
['ktis','KTIS',['Automatic Vacuum Pan|Wago PLC|Indusoft Web Studio']],
['ramachem','Rama Chem',['Filling Machine|Delta PLCs HMI|Schneider Servo|Baykon Weight Indicator','HMI Migration|Wonderware Intouch Scada F Touch Screen to Notebook']],
['delta','Delta',['Cooling System for Database Rooms|Delta PLCs']],
['rojana','Rojana Industrial Park',['Water Treatment|Siemens S7-300, S7-1200 PLCs|iFIX Scada']],
['lion','Lion',['Pigging|Siemens S7-1200 PLCs|Proface Touch Screen']],
['yummix','Yummix',['Electrical Installation']]];
const e=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
document.getElementById('refs').innerHTML=R.map(([k,n,ps])=>`<article class="client"><div class="logo"><img src="${LOGOS(k)}" alt="${e(n||'Client logo')}"></div><div><h3>${e(n)}</h3><div class="projs">${ps.map(p=>{const[t,...x]=p.split('|');return`<div class="proj"><b>${e(t)}</b>${x.map(i=>`<span>${e(i)}</span>`).join('')}</div>`}).join('')}</div></div></article>`).join('');

(()=>{const box=document.getElementById('refs'),cl=[...box.querySelectorAll('.client')],norm=s=>s.toLowerCase().replace(/[-\u2013]/g,' ').replace(/\s+/g,' ').trim(),tx=cl.map(c=>norm(c.textContent));
const tags=['Siemens','Allen-Bradley','Omron','Mitsubishi','Wonderware','Delta','Yaskawa'];let chip='',q='';
const bar=document.createElement('div');bar.className='rf';
bar.innerHTML='<input type="search" id="rq" placeholder="Search clients, equipment or systems (e.g. Siemens, pasteurizer)" aria-label="Search references"><button type="button" class="chip" aria-pressed="true" data-t="">All</button>'+tags.map(t=>`<button type="button" class="chip" aria-pressed="false" data-t="${t}">${t}</button>`).join('')+'<p class="rc" id="rc" aria-live="polite"></p>';
box.before(bar);
const lgs=R.map(([k,n])=>`<span class="lg"><img src="${LOGOS(k)}" alt="${e(n||'Client')}"></span>`).join('');
const cm=document.createElement('div');cm.className='marq cm';cm.setAttribute('aria-hidden','true');cm.innerHTML=`<div class="mt rev">${lgs}${lgs}</div>`;bar.before(cm);
function f(){const a=norm(q),b=norm(chip);let k=0;cl.forEach((c,i)=>{const ok=tx[i].includes(a)&&tx[i].includes(b);c.hidden=!ok;if(ok)k++});document.getElementById('rc').textContent=k?`Showing ${k} of ${cl.length} clients`:'No match. Try another keyword.'}
bar.querySelector('#rq').oninput=e=>{q=e.target.value;f()};
bar.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;chip=b.dataset.t;bar.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));f()});f()})();

// Add a photo: put the file in assets/photos/ and add a line here: [file, title, caption, category]
const PHOTOS=[
['images/photo-01.jpg','Hino Robot','Production line','Robot'],
['images/photo-02.jpg','Pacific Robot','Robot cell','Robot'],
['images/photo-03.jpg','Robot control','Control panel, Mitsubishi PLC','Panel & PLC'],
['images/photo-04.jpg','Pacific Robot','Robot cell','Robot'],
['images/photo-05.jpg','Robot control','Control cabinet, Mitsubishi PLC','Panel & PLC'],
['images/photo-06.jpg','Robot control','Operator panel','Panel & PLC'],
['images/photo-07.jpg','Hino Robot','Operation panel with HMI','Panel & PLC'],
['images/photo-40.jpg','Hino Robot','Control cabinet, Mitsubishi PLC','Panel & PLC'],
['images/photo-41.jpg','Pacific Robot','Mitsubishi PLC','Panel & PLC']];
(()=>{const g=document.getElementById('gal'),f=document.getElementById('gf');if(!g)return;
const cats=['All',...new Set(PHOTOS.map(p=>p[3]))],esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
f.innerHTML=cats.map((c,i)=>`<button type="button" class="chip" aria-pressed="${i==0}" data-c="${i?c:''}">${esc(c)}</button>`).join('');
g.innerHTML=PHOTOS.map((p,i)=>`<figure class="ph" tabindex="0" role="button" data-i="${i}" data-c="${esc(p[3])}" aria-label="Open photo: ${esc(p[1])}"><img src="${p[0]}" alt="${esc(p[1]+' - '+p[2])}" loading="lazy"><figcaption><b>${esc(p[1])}</b><span>${esc(p[2])}</span></figcaption></figure>`).join('');
const items=[...g.children];
f.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;[...f.children].forEach(x=>x.setAttribute('aria-pressed',x===b));items.forEach(el=>el.hidden=!!b.dataset.c&&el.dataset.c!==b.dataset.c)};
const lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
lb.innerHTML='<button class="lbx" aria-label="Close">&times;</button><button class="lbn lbp" aria-label="Previous">&#8249;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lbn lbq" aria-label="Next">&#8250;</button>';
document.body.append(lb);let cur=0,last=null;
const vis=()=>items.filter(x=>!x.hidden).map(x=>+x.dataset.i);
function show(i){cur=i;const p=PHOTOS[i];lb.querySelector('img').src=p[0];lb.querySelector('img').alt=p[1];lb.querySelector('figcaption').innerHTML=`<b>${esc(p[1])}</b> ${esc(p[2])}`}
function open(i){last=document.activeElement;show(i);lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.lbx').focus()}
function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
function step(d){const v=vis(),k=v.indexOf(cur);show(v[(k+d+v.length)%v.length])}
g.onclick=e=>{const el=e.target.closest('.ph');if(el)open(+el.dataset.i)};
g.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('ph')){e.preventDefault();open(+e.target.dataset.i)}};
lb.onclick=e=>{if(e.target===lb||e.target.closest('.lbx'))close();else if(e.target.closest('.lbp'))step(-1);else if(e.target.closest('.lbq'))step(1)};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
})();

const pgs=[...document.querySelectorAll('.pg')],links=[...document.querySelectorAll('nav a')],grp={plc:'home',hmi:'home',servo:'home',inverter:'home'};
function route(x){let id=(typeof x==='string'?x:(location.hash||'#home').slice(1));if(!document.getElementById('pg-'+id))id='home';pgs.forEach(p=>p.classList.toggle('act',p.id==='pg-'+id));const n=grp[id]||id;links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+n));document.title=id.charAt(0).toUpperCase()+id.slice(1)+' | Foster Engineering';scrollTo(0,0)}
addEventListener('hashchange',()=>route());
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const h=a.getAttribute('href');if(h.length<2)return;e.preventDefault();try{history.replaceState(null,'',h)}catch(_){}route(h.slice(1))});
route();
