const T={en:{tag:'KNOWLEDGE, ANYWHERE',headline:"Curiosity shouldn't need data.",subtitle:'FreeNet SG — the start of data-free information. Explore concise explanations and keep your favourites close, even offline.',placeholder:'Search a topic, person, place or idea…',search:'Explore',bookmarks:'Your bookmarks',viewall:'View all →',discover:'Explore a topic',back:'← Back to home',articlelabel:'QUICK EXPLAINER',share:'Share',saved:'Saved knowledge',empty:'No bookmarks yet. Save a topic to see it here.',offline:'Offline library result · available without internet',online:'Online summary · save it for offline access',missing:'This topic is not in the offline starter library. Connect to the internet to look it up, then save it for later.',save:'☆ Save bookmark',remove:'★ Bookmarked',matthew:'How would Matthew explain this?',normal:'Show standard explanation',filter:'Filter bookmarks…'},zh:{tag:'知识随行',headline:'好奇心，不该受流量限制。',subtitle:'FreeNet SG — 无流量知识的起点。阅读简明解释，离线重温收藏。',placeholder:'搜索主题、人物、地点或概念…',search:'探索',bookmarks:'我的书签',viewall:'查看全部 →',discover:'探索主题',back:'← 返回首页',articlelabel:'简明解说',share:'分享',saved:'已收藏的知识',empty:'暂无书签。收藏主题后会显示在这里。',offline:'离线资料库 · 无需网络',online:'在线摘要 · 收藏后可离线阅读',missing:'离线资料库暂无此主题。请联网搜索并收藏，以便以后离线阅读。',save:'☆ 收藏',remove:'★ 已收藏',matthew:'Matthew 会怎么解释？',normal:'显示标准解释',filter:'筛选书签…'},ms:{tag:'ILMU DI MANA-MANA',headline:'Rasa ingin tahu tanpa data.',subtitle:'FreeNet SG — permulaan maklumat tanpa data. Baca ringkasan dan simpan untuk akses luar talian.',placeholder:'Cari topik, orang, tempat atau idea…',search:'Teroka',bookmarks:'Penanda buku anda',viewall:'Lihat semua →',discover:'Teroka topik',back:'← Kembali ke utama',articlelabel:'PENERANGAN RINGKAS',share:'Kongsi',saved:'Ilmu tersimpan',empty:'Belum ada penanda buku. Simpan topik dahulu.',offline:'Perpustakaan luar talian · tanpa internet',online:'Ringkasan dalam talian · simpan untuk akses luar talian',missing:'Topik ini tiada dalam perpustakaan luar talian. Sambung internet, cari dan simpan untuk kemudian.',save:'☆ Simpan',remove:'★ Disimpan',matthew:'Bagaimana Matthew terangkan?',normal:'Penerangan biasa',filter:'Tapis penanda buku…'}};
const DATA=[
['Singapore','Singapore is a sovereign island city-state in Southeast Asia. It became independent in 1965 and is known for its multicultural society, major port, public transport network and role as a global financial centre.','新加坡是东南亚的岛国城市国家，1965年独立，以多元文化、国际港口、公共交通和金融中心地位闻名。','Singapura ialah negara kota pulau di Asia Tenggara yang merdeka pada 1965, terkenal dengan masyarakat berbilang budaya, pelabuhan dan pusat kewangan.','Singapore, tiny island but power lah. No natural resources, still managed to become global business hub. MRT, hawker food, and humidity all included.'],
['Artificial intelligence','Artificial intelligence (AI) refers to computer systems that perform tasks associated with human intelligence, such as understanding language, recognizing patterns and generating content. AI can be useful but may make mistakes and requires human oversight.','人工智能（AI）是能够执行语言理解、模式识别和内容生成等任务的计算机系统。它很有用，但也可能出错，需要人类监督。','Kecerdasan buatan (AI) ialah sistem komputer yang boleh memahami bahasa, mengenal corak dan menjana kandungan. AI berguna tetapi boleh tersilap.','AI is like having one super hardworking assistant who never asks for kopi break — but sometimes confidently anyhow whack. Always double-check, can?'],
['Climate change','Climate change is the long-term alteration of Earth’s climate. Today, the main driver of global warming is human greenhouse gas emissions, particularly from burning fossil fuels. Impacts include rising temperatures, sea levels and changes in extreme weather risks.','气候变化指地球气候的长期改变。如今全球变暖主要由人类排放温室气体引起，尤其是燃烧化石燃料。影响包括升温、海平面上升和极端天气风险变化。','Perubahan iklim ialah perubahan jangka panjang iklim Bumi. Pemanasan kini terutamanya disebabkan pelepasan gas rumah hijau oleh manusia, dengan kesan pada suhu, paras laut dan cuaca ekstrem.','Weather getting hotter until even aircon also stressed lah. Burning fossil fuels traps more heat, then sea level and extreme weather also become problem.'],
['Black holes','A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from within its event horizon. Black holes can form when massive stars collapse and can also exist at the centres of galaxies.','黑洞是引力极强的时空区域，连光也无法从其事件视界内逃脱。它们可由大质量恒星坍缩形成，也存在于星系中心。','Lubang hitam ialah kawasan ruang-masa dengan graviti begitu kuat sehingga cahaya pun tidak dapat keluar dari ufuk peristiwanya.','Black hole is the universe’s ultimate no-exit carpark. Once you cross the event horizon, even light cannot U-turn. Siao powerful.'],
['Photosynthesis','Photosynthesis is the process by which plants, algae and some bacteria use light energy to make sugars from carbon dioxide and water. Oxygen is released in oxygen-producing photosynthesis.','光合作用是植物、藻类和部分细菌利用光能，把二氧化碳和水转化为糖的过程，并通常释放氧气。','Fotosintesis ialah proses tumbuhan, alga dan sesetengah bakteria menggunakan cahaya untuk menghasilkan gula daripada karbon dioksida dan air.','Plants basically got solar-powered kitchen lah. Sunlight in, sugar out, and oxygen as bonus. Better than meal prep.'],
['Great Wall of China','The Great Wall of China is a network of defensive walls and fortifications built and rebuilt across many centuries. The best-known surviving sections largely date from the Ming dynasty. It is not one continuous wall and is not generally visible from the Moon with the naked eye.','中国长城是跨越多个世纪修筑和重建的防御城墙与工事网络。现存著名段落主要建于明朝，并非完全连续，也不能用肉眼从月球清楚看到。','Tembok Besar China ialah rangkaian kubu dan tembok pertahanan yang dibina selama berabad-abad. Bahagian terkenal kebanyakannya dari zaman Ming.','Ancient China built one massive defence project, not just one straight wall okay. Also that “can see from the Moon” story? Cannot lah.'],
['Quantum computing','Quantum computing uses quantum-mechanical properties, such as superposition and entanglement, to process information with quantum bits, or qubits. It may offer advantages for certain problems, but practical systems face significant engineering and error-correction challenges.','量子计算利用叠加态和纠缠等量子力学特性，通过量子比特处理信息。它可能在特定问题上有优势，但仍面临工程和纠错挑战。','Pengkomputeran kuantum menggunakan sifat mekanik kuantum seperti superposisi dan keterikatan untuk memproses maklumat dengan qubit.','Normal computer uses bits. Quantum computer uses qubits with weird physics tricks. Sounds like magic, but engineering headache also damn big.'],
['Solar system','The Solar System consists of the Sun and the objects gravitationally bound to it, including eight planets, dwarf planets, moons, asteroids and comets. Earth is the third planet from the Sun.','太阳系由太阳及受其引力束缚的天体组成，包括八大行星、矮行星、卫星、小行星和彗星。地球是距离太阳第三近的行星。','Sistem Suria terdiri daripada Matahari dan objek yang mengorbitnya, termasuk lapan planet, planet kerdil, bulan, asteroid dan komet.','Sun is the boss, eight planets orbit around. Earth third in queue, and Pluto got downgraded to dwarf planet. Poor thing sia.'],
['Internet','The internet is a global network of interconnected computer networks that exchange data using standardized protocols. The World Wide Web is one service that runs on the internet; email and messaging are others.','互联网是使用标准协议交换数据的全球互联计算机网络。万维网只是其服务之一，电子邮件和即时通信也是。','Internet ialah rangkaian global komputer yang bertukar data melalui protokol piawai. Web hanyalah salah satu perkhidmatannya.','Internet is the whole road network; websites are just some of the destinations. Don’t mix up internet and web lah.'],
['Singapore history','Modern Singapore became a British trading post in 1819, experienced Japanese occupation during World War II, gained self-government in 1959, joined Malaysia in 1963 and became independent on 9 August 1965.','新加坡于1819年成为英国贸易站，二战期间遭日本占领，1959年取得自治，1963年加入马来西亚，并于1965年8月9日独立。','Singapura menjadi pusat perdagangan British pada 1819, diduduki Jepun semasa Perang Dunia Kedua, berkerajaan sendiri pada 1959 dan merdeka pada 9 Ogos 1965.','From trading port to independent country in 1965, Singapore history got more plot twists than drama series lah.']];
const $=id=>document.getElementById(id);let offlinePack={};let onlineSuggestions=[];let suggestTimer;let lang=localStorage.fn_lang||'en',mode=localStorage.fn_theme||'auto',current=null,cheeky=false,cache=JSON.parse(localStorage.fn_cache||'{}'),bookmarks=JSON.parse(localStorage.fn_bookmarks||'[]');const norm=s=>s.toLowerCase().trim();const tr=k=>T[lang][k];function builtin(q){return DATA.find(d=>norm(d[0])===norm(q))||DATA.find(d=>norm(d[0]).includes(norm(q))&&q.length>3)}function allTopics(){return [...new Set([...DATA.map(d=>d[0]),...Object.values(cache).map(x=>x.title),...Object.values(offlinePack).map(x=>x.title)])]}function translate(){document.documentElement.lang=lang;document.querySelectorAll('[data-i]').forEach(e=>e.textContent=tr(e.dataset.i));document.querySelectorAll('[data-placeholder]').forEach(e=>e.placeholder=tr(e.dataset.placeholder));$('filter').placeholder=tr('filter');$('lang').value=lang;renderHome();if(current)renderArticle()}function solar(){const now=new Date(),h=now.getHours()+now.getMinutes()/60;let rise=7,set=19;try{const tz=Intl.DateTimeFormat().resolvedOptions().timeZone;if(tz!=='Asia/Singapore'){rise=6.5;set=18.5}}catch{}return h<rise||h>=set}function theme(){const dark=mode==='dark'||(mode==='auto'&&solar());document.body.classList.toggle('dark',dark);$('theme').textContent=dark?'🌙':'☀️';$('theme').title=`Theme: ${mode} (tap to change)`}function go(page){['home','results','library'].forEach(x=>$(x).classList.toggle('hidden',x!==page));history.pushState({page},'',page==='home'?'./':`#${page}`);window.scrollTo(0,0);if(page==='library')renderLibrary()}function suggestionButtons(container,topics){container.innerHTML='';topics.forEach(t=>{let b=document.createElement('button');b.className='pill';b.textContent=t;b.onclick=()=>openTopic(t);container.append(b)})}function renderHome(){const recent=bookmarks.slice(0,5);$('recent').innerHTML='';if(!recent.length)$('recent').textContent=tr('empty');recent.forEach(b=>addItem($('recent'),b));suggestionButtons($('featured'),DATA.slice(0,8).map(x=>x[0]));updateSuggestions()}function addItem(parent,b){const div=document.createElement('div');div.className='item';const link=document.createElement('button');link.className='link';link.textContent=b.title;link.onclick=()=>openTopic(b.title);const del=document.createElement('button');del.className='pill';del.textContent='×';del.setAttribute('aria-label','Remove bookmark');del.onclick=()=>{bookmarks=bookmarks.filter(x=>norm(x.title)!==norm(b.title));persist();renderHome();renderLibrary()};div.append(link,del);parent.append(div)}function updateSuggestions(){const q=norm($('query').value);suggestionButtons($('suggestions'),q?[...new Set([...allTopics().filter(t=>norm(t).includes(q)),...onlineSuggestions])].slice(0,8):['Singapore','Artificial intelligence','Climate change']);clearTimeout(suggestTimer);if(q.length>=2&&navigator.onLine){suggestTimer=setTimeout(async()=>{try{const r=await fetch(`https://${lang}.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(q)}&limit=8&namespace=0&format=json&origin=*`,{signal:AbortSignal.timeout(5000)});const j=await r.json();if(norm($('query').value)===q){onlineSuggestions=j[1]||[];suggestionButtons($('suggestions'),[...new Set([...allTopics().filter(t=>norm(t).includes(q)),...onlineSuggestions])].slice(0,8))}}catch{}},300)}}function persist(){try{localStorage.fn_cache=JSON.stringify(cache)}catch{const keys=Object.keys(cache);for(const k of keys.slice(0,Math.ceil(keys.length/2)))delete cache[k];try{localStorage.fn_cache=JSON.stringify(cache)}catch{}}try{localStorage.fn_bookmarks=JSON.stringify(bookmarks)}catch{alert('Device storage is full. Export your bookmarks or free up space.')}}function savedData(title){if(cache[norm(title)]?.source==='online')return cache[norm(title)];if(offlinePack[norm(title)])return {...offlinePack[norm(title)],source:'offline'};const b=builtin(title);if(b)return{title:b[0],en:b[1],zh:b[2],ms:b[3],fun:b[4],source:'offline'};return cache[norm(title)]||bookmarks.find(x=>norm(x.title)===norm(title))||null}function normalizedTitle(t){return String(t||'').normalize('NFKC').toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[^\p{L}\p{N}]+/gu,' ').trim()}
function acceptableWikiTitle(query,title){
 const q=normalizedTitle(query),t=normalizedTitle(title);
 if(!q||!t)return false;
 // Do not equate a financial coupon note with the coupon collector's problem.
 if(q===t)return true;
 const aliases={'ww2':['world war ii','second world war'],'wwii':['world war ii','second world war'],'fcn':['fixed coupon note'],'mbs':['mortgage backed security'],'abs':['asset backed security']};
 return (aliases[q]||[]).includes(t);
}
function cleanWikiText(value){
 return String(value||'').replace(/<[^>]+>/g,' ').replace(/\\(?:displaystyle|textstyle|left|right|bigl|bigr)\b/g,'').replace(/\\(?:frac|sqrt|sum|log|Theta|mathbb|mathrm|operatorname)\b/g,' ').replace(/\$\$[\s\S]*?\$\$/g,' [mathematical expression] ').replace(/\\\([\s\S]*?\\\)/g,' [mathematical expression] ').replace(/\\\[[\s\S]*?\\\]/g,' [mathematical expression] ').replace(/[ \t]{2,}/g,' ').replace(/\n{3,}/g,'\n\n').trim();
}
async function fetchWiki(q,requestedLang=lang){
 if(!navigator.onLine)return null;
 const language=['en','zh','ms'].includes(requestedLang)?requestedLang:'en';
 const api=`https://${language}.wikipedia.org/w/api.php`;
 // Exact-title lookups only. Search ranking is NOT reliable for specialized terms.
 const url=`${api}?action=query&prop=extracts&explaintext=1&exsectionformat=plain&exchars=3600&redirects=1&format=json&origin=*&titles=${encodeURIComponent(q)}`;
 try{
  const r=await fetch(url,{signal:AbortSignal.timeout(10000),cache:'no-store'});
  if(!r.ok)return null;
  const data=await r.json();
  const page=Object.values(data.query?.pages||{}).find(p=>!p.missing&&p.extract?.trim());
  if(!page||!acceptableWikiTitle(q,page.title))return null;
  const cleaned=cleanWikiText(page.extract);
  if(cleaned.length<90)return null;
  return {title:q,[requestedLang]:cleaned,source:'online',wikiLang:requestedLang,verifiedWikiTitle:page.title};
 }catch(e){console.warn('Wikipedia exact-title lookup unavailable',e);return null}
}

function formatFun(text,article){
 const title=article?.title||'this topic';
 const cat=typeof inferCategory==='function'?inferCategory(article||{}):'Other';
 const bespoke={
 'Lee Kuan Yew':`Wah, Lee Kuan Yew ah. This one cannot just say “Singapore's first PM” and call it a day lah. The man practically helped write Singapore's modern origin story.

START FROM THE BEGINNING
Born in 1923, studied law at Cambridge, then came back and helped start the PAP in 1954. By 1959, he was prime minister. Not bad for someone who was still in his thirties, hor?

THE INDEPENDENCE PLOT TWIST
Initially, he believed Singapore's future was with Malaysia. So Singapore joined in 1963. But politics, economic disagreements and racial tensions made the marriage very rocky. In 1965, Singapore separated. Suddenly, tiny island, no natural resources, and got to survive on its own. Stressful or not?

SO WHAT DID HE ACTUALLY DO?
His government pushed hard on jobs, foreign investment, public housing, schools, defence and clean administration. Those policies helped transform Singapore into a prosperous international hub. Not some overnight miracle lah — decades of work, trade-offs and other people contributing too.

BUT GOT CONTROVERSY OR NOT?
Of course got. His tough approach also meant serious restrictions on political opponents, the press and civil liberties. Some admire his effectiveness; others argue Singapore paid a democratic price. Both parts belong in the story.

MATTHEW'S TAKE
Big impact, big personality, big debates. If you want to understand modern Singapore, you really cannot skip Lee Kuan Yew. But don't just worship or condemn — understand what he built, how he did it, and the costs involved. Steady?`,
 'Leverage':`Aiyoh, leverage. Finance people make it sound very atas, but it's basically using borrowed money to make your investment bigger.

SIMPLE EXAMPLE
You got $20,000, borrow another $80,000, and buy $100,000 worth of assets. Market goes up 10%? Your investment becomes $110,000. After paying back the loan principal, your equity is $30,000 — a 50% gain before costs. Shiok, right?

BUT HOR, REVERSE ALSO WORKS
Market drops 10%? Your equity becomes $10,000. Half your own money gone. And you still owe interest! If your collateral drops too far, lender can ask you to top up or sell your position.

MATTHEW'S TAKE
Leverage is like putting a turbocharger on your portfolio. Faster when things go well, but the crash can be much uglier. Don't anyhow whack lah.`,
 'Coq au vin':`Wah, coq au vin. Sounds like some super atas French restaurant dish, but actually it's classic countryside comfort food lah.

WHAT IS IT?
Literally means “rooster in wine.” These days people usually use chicken, slowly braised in red wine with mushrooms, onions, bacon or lardons, and herbs. Imagine a rich, savoury chicken stew with deep wine flavour.

WHERE DID IT COME FROM?
It's associated with French country cooking, especially Burgundy, where wine is a big deal. Different French regions have their own versions.

HOW DO YOU EAT IT?
In French homes and bistros, often with mashed potatoes, bread or noodles to mop up the sauce. Waste the gravy for what, right?

MATTHEW'S TAKE
Don't let the French name scare you. It's basically chicken cooked low and slow until the sauce becomes ridiculously flavourful. Quite shiok actually.`
 };
 const bespokeKey=Object.keys(bespoke).find(k=>k.toLowerCase()===title.trim().toLowerCase());if(lang==='en'&&bespokeKey)return bespoke[bespokeKey];

 const presets={
 Finance:{start:[`Wah, ${title}. Sounds like some atas finance term, but let's see what's actually going on.`,`Okay, ${title} — don't let the banker vocabulary bluff you lah.`],labels:['What is the actual deal?','Where the money comes in','The catch you should know','Why anyone cares'],end:'Matthew’s take: in finance, understand how it works AND what can go wrong. Higher return without risk? Don’t anyhow believe, hor.'},
 History:{start:[`Eh, ${title} got a proper backstory. Not just dates to memorise, okay?`,`Wah, ${title}. History got more plot twists than a TV drama sometimes.`],labels:['First, set the scene','Then what happened?','Here’s the turning point','Why it still matters'],end:'Matthew’s take: context is everything lah. Who did what, why, and what happened afterwards — that’s the real lesson.'},
 Science:{start:[`Okay, ${title} sounds chim. But we can understand it without a PhD, can?`,`Science time! ${title} sounds complicated, but don’t panic lah.`],labels:['The basic idea','How does this work?','The interesting part','What to remember'],end:'Matthew’s take: once you understand the mechanism, suddenly not so mysterious anymore. Quite power, right?'},
 Geography:{start:[`Come, virtual holiday time. Today we explore ${title}, no passport needed.`,`Eh, ${title}. Let’s see where this fits on the world map.`],labels:['First, the basics','What makes it notable','A bit more context','The bigger picture'],end:'Matthew’s take: the world is huge lah. One more place for your mental map.'},
 People:{start:[`Wah, ${title}. This person got a story to tell, not just a Wikipedia birthday.`,`Eh, ${title} — quite an influential figure. But why, exactly?`],labels:['Who are we talking about?','What did they actually do?','The impact','The legacy'],end:'Matthew’s take: don’t blindly worship or condemn anyone lah. Understand their achievements, their flaws, and the context.'},
 Food:{start:[`Wah, ${title}! Sounds like something worth trying. But what exactly are we eating?`,`Food time! ${title} — let’s see what’s behind the name before you order.`],labels:['So what’s on the plate?','Where did it come from?','How do people eat it?','Why it’s interesting'],end:'Matthew’s take: next time you see it on the menu, at least you know what you’re ordering. Shiok!'},
 Other:{start:[`Aiyoh, ${title}? Good question. Come, I explain in normal human language.`,`Okay lah, today’s topic is ${title}. Let’s get to the point.`],labels:['The main idea','Here’s the context','Something worth knowing','The takeaway'],end:'Matthew’s take: one more thing learned today. Not bad, lah!'}
 };
 const p=presets[cat]||presets.Other;
 const hash=[...title].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),0);
 const source=text.replace(/\r/g,'').trim();
 if(!source)return `Aiyoh, ${title} got no information saved yet. Need to load the article first, lah.`;
 let parts=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
 if(parts.length<2){
   const sentences=source.match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g)||[source];
   parts=[];
   for(let i=0;i<sentences.length;i+=2)parts.push(sentences.slice(i,i+2).join(' ').trim());
 }
 const interjections=['Now this part quite important, hor.','Here’s the thing lah.','Interesting, right?','Don’t overlook this bit.','Okay, this one you should remember.','See how it connects?'];
 const content=parts.map((part,i)=>`${p.labels[i%p.labels.length]}\n${i===0?'':interjections[(hash+i*7)%interjections.length]+' '}${part}`);
 const languageNote=lang==='en'?'':'\n\n(Note: The source article is shown in its available language; the Singlish commentary is in English.)';
 return `${p.start[hash%p.start.length]}\n\n${content.join('\n\n')}\n\n${p.end}${languageNote}`;
}function renderArticle(){if(!current)return;const d=current;const base=d[lang]||d.en||d.zh||d.ms||tr('missing');const txt=base+(lang==='en'&&d.detail_en?'\n\n'+d.detail_en:'');$('articleTitle').textContent=d.title;$('articleStatus').textContent=(d.source==='online'?tr('online'):d.source==='missing'?tr('missing'):tr('offline'))+((lang!=='en'&&!d[lang]&&d.en)?' · English article (translation unavailable)':'');$('articleText').textContent=cheeky?formatFun(txt,d):txt;$('matthew').textContent=cheeky?tr('normal'):tr('matthew');$('save').textContent=bookmarks.some(x=>norm(x.title)===norm(d.title))?tr('remove'):tr('save');suggestionButtons($('related'),allTopics().filter(t=>norm(t)!==norm(d.title)&&inferCategory({title:t,category:offlinePack[norm(t)]?.category})===inferCategory(d)).slice(0,4))}let topicRequestId=0;
async function openTopic(q){
 q=q.trim();if(!q)return;
 const requestId=++topicRequestId,requestedLang=lang;
 cheeky=false;
 const local=savedData(q);
 const previousOnline=cache[norm(q)];
 // Show the best locally available version immediately while trying the network.
 const bestLocal=previousOnline?.source==='online' && (previousOnline[requestedLang]||previousOnline.en||'').length>(local?.[requestedLang]||local?.en||'').length?previousOnline:local||previousOnline;
 current=bestLocal||{title:q,source:'missing'};
 go('results');renderArticle();
 if(!navigator.onLine)return;
 const prior=current[requestedLang]||current.en||'';
 $('articleStatus').textContent='Checking for a verified, relevant Wikipedia article…';
 const res=await fetchWiki(q,requestedLang);
 if(requestId!==topicRequestId||lang!==requestedLang)return;
 if(!res){
  $('articleStatus').textContent=(current.source==='missing'?'No article available':'Offline/cached article · No verified matching Wikipedia article found');
  return;
 }
 const newer=res[requestedLang]||'';
 // Do not discard an existing longer cached explanation for a shorter remote extract.
 if(newer.length<=prior.length && current.source==='online'){
  $('articleStatus').textContent='Saved detailed article · Wikipedia checked';return;
 }
 if(newer.length<=prior.length && current.source!=='missing'){
  $('articleStatus').textContent='Offline article · Wikipedia returned a shorter summary';return;
 }
 const updated={...res,source:'online'};
 cache[norm(q)]=updated;cache[norm(res.title)]=updated;
 bookmarks=bookmarks.map(b=>norm(b.title)===norm(q)||norm(b.title)===norm(res.title)?{...b,...updated}:b);
 current=updated;persist();renderArticle();
}

function renderLibrary(){const q=norm($('filter').value);$('savedList').innerHTML='';const list=bookmarks.filter(x=>norm(x.title).includes(q));if(!list.length)$('savedList').textContent=tr('empty');list.forEach(b=>addItem($('savedList'),b))}async function loadOfflinePack(){try{const db=await new Promise((resolve,reject)=>{const req=indexedDB.open('freenet-packs',1);req.onupgradeneeded=()=>req.result.createObjectStore('articles');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});window.packDB=db;await new Promise(resolve=>{const tx=db.transaction('articles');const req=tx.objectStore('articles').getAll();req.onsuccess=()=>{for(const a of req.result||[])offlinePack[norm(a.title)]=a;resolve()};req.onerror=resolve});renderHome()}catch(e){console.warn('Offline pack unavailable',e)}}
$('packImport').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{const parsed=JSON.parse(await file.text());const articles=Array.isArray(parsed)?parsed:parsed.articles;if(!Array.isArray(articles)||articles.length>100000||articles.some(a=>typeof a.title!=='string'||!(a.en||a.zh||a.ms)))throw Error('Expected an array of articles with title and en, zh or ms text. Maximum 100,000 per pack.');if(!window.packDB)throw Error('IndexedDB unavailable');const tx=window.packDB.transaction('articles','readwrite');for(const a of articles){tx.objectStore('articles').put({title:a.title.slice(0,300),en:String(a.en||''),zh:String(a.zh||''),ms:String(a.ms||'')},norm(a.title));offlinePack[norm(a.title)]={...a,source:'offline'}}await new Promise((resolve,reject)=>{tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});$('packStatus').textContent=`${Object.keys(offlinePack).length.toLocaleString()} offline articles installed`;renderHome()}catch(err){alert('Could not import pack: '+err.message)}e.target.value=''};
$('searchForm').onsubmit=e=>{e.preventDefault();openTopic($('query').value)};$('query').oninput=updateSuggestions;$('lang').onchange=e=>{lang=e.target.value;localStorage.fn_lang=lang;translate()};$('theme').onclick=()=>{mode=mode==='auto'?'light':mode==='light'?'dark':'auto';localStorage.fn_theme=mode;theme()};$('back1').onclick=$('back2').onclick=()=>go('home');$('all').onclick=()=>go('library');$('filter').oninput=renderLibrary;$('matthew').onclick=()=>{cheeky=!cheeky;renderArticle()};$('save').onclick=()=>{if(!current||current.source==='missing')return;const has=bookmarks.some(x=>norm(x.title)===norm(current.title));bookmarks=has?bookmarks.filter(x=>norm(x.title)!==norm(current.title)):[{...current},...bookmarks];persist();renderArticle();renderHome()};$('share').onclick=async()=>{const text=`${current.title}\n\n${$('articleText').textContent}\n\nFreeNet SG`;try{if(navigator.share)await navigator.share({title:current.title,text});else await navigator.clipboard.writeText(text)}catch{}};window.onpopstate=e=>{const page=e.state?.page||'home';['home','results','library'].forEach(x=>$(x).classList.toggle('hidden',x!==page))};// V5 category explorer: all results are from the bundled offline library.
const CATEGORY_NAMES={en:{All:'All topics',Finance:'Finance',History:'History',Science:'Science',Geography:'Geography',People:'Influential people',Food:'Food',Other:'Other'},zh:{All:'全部主题',Finance:'金融',History:'历史',Science:'科学',Geography:'地理',People:'重要人物',Food:'美食',Other:'其他'},ms:{All:'Semua topik',Finance:'Kewangan',History:'Sejarah',Science:'Sains',Geography:'Geografi',People:'Tokoh berpengaruh',Food:'Makanan',Other:'Lain-lain'}};
const FOOD_TITLES=new Set((window.FOOD_TITLES||[]));
const FINANCE_RE=/bond|yield|credit|debt|loan|mortgage|security|securit|tranche|derivative|swap|option|futures|stock|equity|investment|inflation|bank|finance|capital|leverage|currency|asset|dividend|fund|treasury|cpf|monetary|risk|interest|reits?|sgs|spread|duration|convexity|default|liquidity|coupon|forex|fixed deposit/i;
const HISTORY_RE=/war|battle|occupation|independen|revolution|holocaust|cold war|crisis|attack|riot|fall of|colonial|history|merger|pandemic|great depression|tiananmen|sook ching|national service/i;
const PEOPLE=new Set('Lee Kuan Yew,Goh Keng Swee,S. Rajaratnam,David Marshall,Lim Yew Hock,Yusof Ishak,Lee Hsien Loong,Lawrence Wong,Mahatma Gandhi,Winston Churchill,Franklin D. Roosevelt,Adolf Hitler,Joseph Stalin,Mao Zedong,Deng Xiaoping,Sun Yat-sen,Chiang Kai-shek,Ho Chi Minh,Vo Nguyen Giap,Kim Il Sung,Syngman Rhee,Park Chung-hee,Nelson Mandela,Martin Luther King Jr.,Malcolm X,John F. Kennedy,Richard Nixon,Ronald Reagan,Mikhail Gorbachev,Margaret Thatcher,Queen Elizabeth II,Barack Obama,Angela Merkel,Xi Jinping,Vladimir Putin,Donald Trump,Joe Biden,Albert Einstein,Marie Curie,Alan Turing,Steve Jobs,Bill Gates,Tim Berners-Lee,Malala Yousafzai,Greta Thunberg'.split(','));
let selectedCategory='All',categoryPage=0;
function inferCategory(a){
 if(a.category)return a.category;
 if(PEOPLE.has(a.title))return 'People';
 if(FINANCE_RE.test(a.title))return 'Finance';
 if(HISTORY_RE.test(a.title))return 'History';
 if(/Singapore|Vietnam|Korea|China|Malaysia|world war/i.test(a.title))return 'History';
 return 'Other';
}
function renderCategories(){
 const entries=Object.values(offlinePack);
 const categories=['All','Finance','History','Science','Geography','People','Food','Other'];
 const c=$('categories'), list=$('categoryResults'), pager=$('categoryPager');
 if(!c||!list||!pager)return;
 $('categoryHeading').textContent={en:'Browse offline categories',zh:'浏览离线分类',ms:'Teroka kategori luar talian'}[lang];
 c.innerHTML='';categories.forEach(cat=>{let n=entries.filter(a=>cat==='All'||inferCategory(a)===cat).length;if(!n)return;const b=document.createElement('button');b.className='pill';b.textContent=`${CATEGORY_NAMES[lang][cat]} · ${n}`;b.setAttribute('aria-pressed',String(selectedCategory===cat));if(selectedCategory===cat)b.style.borderColor='var(--accent,#4d79f6)';b.onclick=()=>{selectedCategory=cat;categoryPage=0;renderCategories()};c.append(b)});
 const matching=entries.filter(a=>selectedCategory==='All'||inferCategory(a)===selectedCategory).sort((a,b)=>a.title.localeCompare(b.title));
 $('categoryCount').textContent=matching.length+' offline';
 list.innerHTML='';const per=16;matching.slice(categoryPage*per,(categoryPage+1)*per).forEach(a=>{const b=document.createElement('button');b.className='link';b.style.cssText='display:block;text-align:left;padding:10px 2px;width:100%;border-bottom:1px solid rgba(120,120,120,.16)';b.textContent=a.title;b.onclick=()=>openTopic(a.title);list.append(b)});
 pager.innerHTML='';if(categoryPage>0){const b=document.createElement('button');b.className='pill';b.textContent='← Previous';b.onclick=()=>{categoryPage--;renderCategories()};pager.append(b)}
 if((categoryPage+1)*per<matching.length){const b=document.createElement('button');b.className='pill';b.textContent='Next →';b.onclick=()=>{categoryPage++;renderCategories()};pager.append(b)}
}
const originalRenderHome=renderHome;
renderHome=function(){originalRenderHome();renderCategories()};

translate();theme();setInterval(()=>{if(mode==='auto')theme()},60000);if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});

async function loadEssentials(){try{const response=await fetch('./essential-knowledge.json');if(!response.ok)throw Error('Unavailable');const data=await response.json();for(const a of data.articles||[])offlinePack[norm(a.title)]={...a,source:'offline'};renderHome();$('packStatus').textContent=`${Object.keys(offlinePack).length.toLocaleString()} essential offline articles included · import more packs below.`}catch(e){console.warn('Essentials could not load',e)}}
loadEssentials().then(loadOfflinePack);

