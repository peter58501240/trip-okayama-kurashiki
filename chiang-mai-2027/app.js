(function chiangMaiApp(){
"use strict";
const mapUrl=(q)=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const L={
hotel:"https://www.porthapaegate.com/",
dress:"https://loveseason-studio.com/",
baan:"https://www.baan-landai.com/en/old-town/reservation/",
kalm:"https://www.kalmvillage.com/sunset-yoga",
santi:"https://www.gowabi.com/en/provider/santi-massage-sleep-salon-chiang-mai",
jj:"https://www.jingjaicentralchiangmai.com/market",
artisan:"https://www.facebook.com/Baankangwat",
khao:"https://guide.michelin.com/tw/zh_TW/chiang-mai-region/chiang-mai/restaurant/khao-soi-mae-sai",
tdac:"https://tdac.immigration.go.th/"
};
const days=[
{date:"02/02",weekday:"二",day:"DAY 01",title:"飛向蘭納古城",summary:"漫長的轉機日，入境後只吃晚餐、好好睡一覺。",hint:"所有航班時間以機票和航空公司最新通知為準。",items:[
{t:"11:25–13:10",name:"高雄 → 香港｜CX431",desc:"高雄出發，香港轉機；轉機與行李安排以航空公司通知為準。",icon:"✈",tag:"航班",type:"info"},
{t:"16:45–18:50",name:"香港 → 清邁｜CX5744",desc:"依提供機票安排。清邁比台灣慢一小時。",icon:"✈",tag:"航班",type:"info"},
{t:"18:50–20:30",name:"入境、領行李與前往飯店",desc:"預估通關與車程，依當天實際情況調整。",map:"Chiang Mai International Airport",icon:"➜",tag:"交通"},
{t:"20:30後",name:"POR Thapae Gate 入住、晚餐休息",desc:"建議入住古城的 POR Thapae Gate，附近找當天確定營業的餐廳即可；首晚不排夜市。",map:"POR Thapae Gate Chiang Mai",official:L.hotel,icon:"⌂",tag:"飯店待訂",type:"warn",highlight:true}
]},
{date:"02/03",weekday:"三",day:"DAY 02",title:"泰服寫真・金色午後",summary:"睡飽再出發，下午在古城留下最美的泰服紀念照。",hint:"拍攝時段需攝影店確認；泰服最晚應在店家 19:00 關門前歸還。",items:[
{t:"09:00–12:00",name:"飯店早餐、古城咖啡散步",desc:"輕鬆逛街，隨喜好選咖啡館；不排早起趕寺廟。",icon:"☕",tag:"自由"},
{t:"12:00–13:00",name:"簡單午餐",desc:"為下午妝髮與拍攝留體力，當日選順路且確實營業的小店。",icon:"♨",tag:"自由"},
{t:"13:30–15:00",name:"Love Season Studio｜泰服妝髮",desc:"完整寫真方案包含服裝、配飾、妝髮及約2小時攝影；目前官網單人方案 ฿2,900，依最新報價為準。",map:"Love Season Studio 127/6 Ratchapakhinai Chiang Mai",official:L.dress,icon:"❀",tag:"必須預約",type:"warn",highlight:true},
{t:"15:00–17:00",name:"蘭納泰服專業外拍",desc:"與攝影師確認拍攝寺廟、入場費、照片交件與修圖範圍；下午光線較柔和。",icon:"◉",tag:"重點體驗",highlight:true},
{t:"17:00–18:30",name:"還衣服、回飯店整理",desc:"留足交通、換裝及休息時間，不直衝晚餐。",icon:"⌂",tag:"休息"},
{t:"19:00–20:30",name:"Baan Landai｜特色泰式晚餐",desc:"米其林指南入選的正式餐廳，非星級套餐。預留提前6–8週詢問訂位，只有收到店家回覆才算訂好。",map:"Baan Landai Fine Thai Cuisine Old Town Chiang Mai",official:L.baan,icon:"♨",tag:"必須預約",type:"warn",highlight:true}
]},
{date:"02/04",weekday:"四",day:"DAY 03",title:"午後手作・藝術村",summary:"陶藝、咖啡與當地手作；不追求逛遍全部店家。",hint:"如果 Grab 當日顯示單程超過 30 分鐘，就直接改逛古城市區文創店。",items:[
{t:"09:00–10:00",name:"早餐、慢慢準備",desc:"不必特意早起。",icon:"☀",tag:"放鬆"},
{t:"10:00–10:30",name:"搭車前往 Baan Kang Wat",desc:"古城到藝術村常見估算約20–30分鐘，但當天仍需看即時路況。",map:"Baan Kang Wat Chiang Mai",icon:"➜",tag:"交通"},
{t:"10:30–13:30",name:"Baan Kang Wat｜文創藝術村",desc:"通常週二至週日10:00–18:00；個別店家可能更晚開。安排工作室、飾品、陶藝、咖啡及午餐。",map:"Baan Kang Wat Chiang Mai",official:L.artisan,icon:"✿",tag:"營業待複核",type:"warn",highlight:true},
{t:"13:30–17:30",name:"回古城，按摩或飯店休息",desc:"不用硬排新景點，給自己一段留白。",icon:"♧",tag:"自由"},
{t:"18:00",name:"Cooking Love 3｜平價泰式料理",desc:"不是米其林餐廳；為避免舊店或分店搞混，出發前再用店名及地址核對營業狀態。",map:"Cooking Love 3 18 Moon Muang Rd Soi 6 Chiang Mai",icon:"♨",tag:"到訪前確認",type:"warn"}
]},
{date:"02/05",weekday:"五",day:"DAY 04",title:"尼曼慢逛・日落瑜珈",summary:"這一天是咖哩麵、設計商圈與療癒時光。",hint:"星期五晚高峰可能塞車：15:15–15:30 就結束購物叫車，別拖到16:00以後。",items:[
{t:"10:30–11:15",name:"Khao Soi Mae Sai｜泰北咖哩麵",desc:"米其林指南收錄的平價麵店，非高級餐廳。米其林目前標示週日休息、只收現金；尖峰可能排隊。",map:"Khao Soi Mae Sai 29/1 Ratchaphruek Road Chiang Mai",official:L.khao,icon:"♨",tag:"平價小吃",highlight:true},
{t:"11:30–15:15",name:"One Nimman｜咖啡與選物購物",desc:"自由逛手作選物與周邊街區，午餐可以隨意吃輕食。",map:"One Nimman Chiang Mai",icon:"✿",tag:"購物",highlight:true},
{t:"15:15–16:15",name:"提前叫 Grab 返回古城",desc:"為塞車、報到與安靜準備留出緩衝；實際車程不能保證。",map:"Kalm Village Chiang Mai",icon:"➜",tag:"交通重點",type:"warn"},
{t:"17:00–18:30",name:"Kalm Village｜Sunset Yoga & Meditation",desc:"目前官網公布週五17:00–18:30場次；2027年2/5是否照常開班與名額仍需店家確認。",map:"Kalm Village 14 Soi 4 Phrapokklao Chiang Mai",official:L.kalm,icon:"☼",tag:"必須預約",type:"warn",highlight:true},
{t:"19:00後",name:"古城自由晚餐",desc:"瑜珈後不強迫再吃正式餐廳，視心情找附近有開的料理。",icon:"♨",tag:"自由"}
]},
{date:"02/06",weekday:"六",day:"DAY 05",title:"週末市集・漂浮療癒",summary:"把最喜歡的週末文創市場留在早晨，下午好好放鬆。",hint:"這天是農曆大年初一，市場攤販、活動課程及餐廳可能調整，須接近出發日再確認。",items:[
{t:"08:30–11:30",name:"Jing Jai Market｜週末文創市場",desc:"官方常態時段週六、日 06:30–15:00；逛手作、服飾、咖啡與農夫攤位。春節是否完整營業尚未確認。",map:"Jing Jai Market Chiang Mai",official:L.jj,icon:"✿",tag:"週末限定",type:"warn",highlight:true},
{t:"11:30–12:30",name:"輕食、休息與移動",desc:"市場已經有很多吃的，不一定再安排正式午餐。",icon:"☕",tag:"自由"},
{t:"13:00–14:00",name:"Santi｜Float in Sound 漂浮頌缽",desc:"此為希望預約的時段，並非已證實有班。GoWabi現行方案60分鐘、至少2人；購票前確認當日場次及退款規則。",map:"Santi Massage and Sleep Salon Chiang Mai",official:L.santi,icon:"◌",tag:"課程待確認",type:"warn",highlight:true},
{t:"14:30–18:00",name:"回飯店休息",desc:"放鬆體驗結束後不安排另一個必去景點。",icon:"⌂",tag:"休息"},
{t:"18:00以後",name:"自由晚餐／Wua Lai 週六夜市",desc:"夜市只列備案：如想休息，就在飯店附近吃。週末人潮可能非常多。",map:"Wua Lai Saturday Walking Street Chiang Mai",icon:"✧",tag:"可選",type:"optional"}
]},
{date:"02/07",weekday:"日",day:"DAY 06",title:"把清邁帶回家",summary:"提早退房前往機場，香港轉機回高雄。",hint:"2/6先問櫃檯能否提供外帶早餐盒；飯店未承諾供應前，不要預設一定有。",items:[
{t:"06:30–07:00",name:"整理行李與退房",desc:"早餐盒是否提供，請在前一天取得飯店回覆；沒有就前晚買好麵包。",icon:"⌂",tag:"提醒"},
{t:"約07:15",name:"出發前往清邁國際機場",desc:"預留國際線報到及交通緩衝，以航空公司規定為準。",map:"Chiang Mai International Airport",icon:"➜",tag:"交通重點"},
{t:"10:35–14:20",name:"清邁 → 香港｜CX5757",desc:"依提供機票行程；起降時間分別為當地時間。",icon:"✈",tag:"航班"},
{t:"16:45–18:15",name:"香港 → 高雄｜CX458",desc:"回到高雄。",icon:"✈",tag:"航班"}
]}
];
const foods=[
{icon:"♨",type:"一頓正式特色晚餐",name:"Baan Landai（古城）",desc:"米其林指南入選的精緻泰式料理，安排2/3（三）19:00。官網週一休，晚餐17:00–22:00、最後點餐20:30。",note:"要提早訂位，不等於已訂到",map:"Baan Landai Fine Thai Cuisine Old Town Chiang Mai",official:L.baan},
{icon:"🍜",type:"在地平價麵店",name:"Khao Soi Mae Sai",desc:"泰北咖哩麵，安排2/5（五）10:30。米其林指南標示週一至六08:00–16:00、週日休息，僅收現金。",note:"可排隊、勿當成高級餐廳",map:"Khao Soi Mae Sai Chiang Mai",official:L.khao},
{icon:"🥘",type:"日常平價料理",name:"Cooking Love 3",desc:"安排2/4（四）18:00；泰式家常菜。需再確認 Google 地圖的正確店址、近期評論與當晚是否營業。",note:"同名店家要核對分店",map:"Cooking Love 3 18 Moon Muang Rd Soi 6 Chiang Mai"},
{icon:"☕",type:"市集小吃 × 手作咖啡",name:"Jing Jai Market",desc:"安排2/6（六）早上吃喝逛市集。官方常態時間06:30–15:00，實際攤商春節安排須再確認。",note:"不用特別再排一頓大餐",map:"Jing Jai Market Chiang Mai",official:L.jj},
{icon:"❀",type:"最珍貴的旅行彈性",name:"飯店附近與順路小店",desc:"2/2晚、2/3中午、2/5晚、2/6晚不強塞米其林；用當天體力與營業狀況挑喜歡的店。",note:"現場確認再前往",map:"Tha Phae Gate Chiang Mai"}
];
const bookingGroups=[
{title:"優先預約",items:[
{id:"hotel",name:"POR Thapae Gate・2/2入住～2/7退房",desc:"確認房型、五晚、取消條件；目前只是推薦住宿。",link:L.hotel},
{id:"baan",name:"Baan Landai・2/3（三）19:00",desc:"建議提前6–8週詢問；以餐廳正式確認訊息為準。",link:L.baan},
{id:"dress",name:"Love Season Studio・2/3（三）妝髮與攝影",desc:"13:30妝髮、15:00拍攝為希望時段；確認攝影地點、修圖和交件。",link:L.dress},
{id:"kalm",name:"Kalm Village・2/5（五）17:00",desc:"目前官網列週五場，必須確認2027日期、項目、名額。",link:L.kalm},
{id:"santi",name:"Santi Float in Sound・2/6（六）",desc:"13:00只是規劃目標，確認當天有班及至少2人條件。",link:L.santi}
]},
{title:"出發前核對",items:[
{id:"flight",name:"航班、香港轉機與行李直掛",desc:"核對航空公司最新航班、航廈、轉機與托運資訊。"},
{id:"festival",name:"2/6春節營業：JJ Market與所有餐廳",desc:"出發前7天、前1天各確認一次，必要時聯絡店家。",link:L.jj},
{id:"maps",name:"所有餐廳與景點的 Google 地圖分店",desc:"檢查「營業中」、近期評論、特殊營業時間，別只看舊攻略。"},
{id:"breakfast",name:"2/7清晨飯店外帶早餐或自備早餐",desc:"2/6向櫃檯確認，不保證有提供 Breakfast Box。",link:L.hotel},
{id:"tdac",name:"泰國 TDAC 數位入境卡",desc:"依現行規則入境前3天內（含抵達日）免費填寫，出發前再核對。",link:L.tdac},
{id:"passport",name:"護照、免簽及旅遊保險",desc:"依出發時的官方規定核對，不以過時攻略為準。"}
]}];
const guides=[
{icon:"✈",title:"航班與時差",text:"高雄11:25→香港13:10、香港16:45→清邁18:50；回程清邁10:35→香港14:20、香港16:45→高雄18:15。清邁比台灣慢1小時。資料依提供的機票；啟程前再核對。"},
{icon:"⌂",title:"推薦住宿：POR Thapae Gate",text:"古城塔佩門附近，五晚同一間。推薦不等於已訂房；請核對房型、噪音、早餐與取消規定。",link:L.hotel},
{icon:"◷",title:"交通不超過30分鐘",text:"Eillen不喜歡花太久搭車。所有跨區移動以當天 Grab 預估車程為準；若藝術村車程超過30分鐘，就換古城文創小店。星期五15:15離開尼曼區。"},
{icon:"❀",title:"米其林不等於高級大餐",text:"Baan Landai 是正式特色餐廳；Khao Soi Mae Sai 是平價在地咖哩麵，其餘餐次保留彈性，餐餐追米其林不是本次目標。",link:L.khao},
{icon:"☼",title:"瑜珈課不等於已開班",text:"Kalm Friday sunset yoga 是目前常態課表；Santi 漂浮頌缽是水上音療，不是傳統水中瑜珈。請店家確認 2027 年指定日期、時段、價格及成團人數。",link:L.kalm},
{icon:"✓",title:"防撲空三次查核",text:"訂位時確認日期及店址；出發前7天查官方與 Google 地圖特殊時間；前一天再看更新，若有疑慮直接訊息詢問。網站不會即時監看營業狀態。"},
{icon:"⛩",title:"2027/2/6 農曆大年初一",text:"即使不是所有泰國店家都休假，也不能預設市場、個別攤販和攝影店都會照常營業。JJ Market 週末常態06:30–15:00，春節仍要複核。",link:L.jj},
{icon:"◌",title:"Babel.CNX 空中瑜珈（彈性備案）",text:"Eillen 原先也對 Babel.CNX 空中瑜珈有興趣。暫不塞進固定行程；如果 Santi 或 Kalm 沒有合適課程，再依 Babel 官方最新課表與實際上課地點調整。",link:"https://linktr.ee/babel.cnx"},
{icon:"☁",title:"2月空氣品質與氣溫",text:"清邁可能出現空污或煙霾；若當日空氣品質差，減少長時間戶外活動。泰服外拍補水、補妝並避開正午曝曬。"},
{icon:"☷",title:"TDAC 官方數位入境卡",text:"官方網站免費填寫；目前規定入境前3天內提交。勿在不明代辦網站付費。簽證與護照政策以2027出發時官方公告為準。",link:L.tdac},
{icon:"♧",title:"早餐、現金與網路",text:"最後一天提前離開，先問飯店可否提供早餐盒。平價小店與市集備一些泰銖現金；手機可使用當地網路或漫遊方便叫 Grab。"}
];
const qs=(s)=>document.querySelector(s);
const esc=(s)=>String(s).replace(/[&<>"']/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nav=(q)=>'<a class="mini-link" href="'+esc(mapUrl(q))+'" target="_blank" rel="noopener noreferrer">↗ Google 地圖</a>';
const official=(url)=>'<a class="mini-link official" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">↗ 官方／預約</a>';
qs("#quickBar").innerHTML='<div class="quick-box"><div class="quick-label">🏡 推薦住宿</div><strong>POR Thapae Gate</strong><small>古城・5晚不換飯店</small></div><div class="quick-box"><div class="quick-label">✈ 航班起迄</div><strong>高雄 ⇄ 清邁</strong><small>香港轉機・2/2至2/7</small></div>';
const tabs=qs("#dateTabs");
tabs.innerHTML=days.map((d,i)=>'<button class="date-tab'+(i===0?' active':'')+'" type="button" data-day="'+i+'"><span>FEB</span><strong>'+d.date.slice(3)+'</strong><small>週'+d.weekday+'</small></button>').join("");
function renderDay(i){
const d=days[i];
qs("#dayPanel").innerHTML='<div class="day-heading"><div class="day-sub">'+d.day+' · FEB '+d.date.slice(3)+' · 星期'+d.weekday+'</div><h3>'+esc(d.title)+'</h3><p>'+esc(d.summary)+'</p><div class="tip-line">✧ '+esc(d.hint)+'</div></div><div class="timeline">'+d.items.map(e=>'<div class="event'+(e.highlight?' highlight':'')+'"><span class="event-dot">'+esc(e.icon||"✦")+'</span><div class="event-card"><div class="event-top"><span class="event-time">'+esc(e.t)+'</span><span class="event-tag '+(e.type||'')+'">'+esc(e.tag)+'</span></div><h4>'+esc(e.name)+'</h4><p>'+esc(e.desc)+'</p>'+((e.map||e.official)?'<div class="event-links">'+(e.map?nav(e.map):'')+(e.official?official(e.official):'')+'</div>':'')+'</div></div>').join("")+'</div><div class="day-end">❀ 旅途裡的留白，也是一種風景 ❀</div>';
tabs.querySelectorAll("button").forEach(b=>{b.classList.toggle("active",Number(b.dataset.day)===i);b.setAttribute("aria-selected",Number(b.dataset.day)===i?"true":"false")});
}
tabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b){renderDay(Number(b.dataset.day));}});
renderDay(0);
qs("#foodCards").innerHTML=foods.map(f=>'<article class="place-card"><div class="place-top"><div class="place-icon">'+esc(f.icon)+'</div><div><span class="place-type">'+esc(f.type)+'</span><h3>'+esc(f.name)+'</h3><p>'+esc(f.desc)+'</p></div></div><div class="place-footer"><span class="place-note">'+esc(f.note)+'</span><div class="place-actions">'+nav(f.map)+(f.official?official(f.official):'')+'</div></div></article>').join("");
const storeKey="lan­na-chiangmai-2027-checks-v1";
let checks={};
try{checks=JSON.parse(localStorage.getItem(storeKey)||"{}")||{}}catch(err){checks={}}
function persist(){try{localStorage.setItem(storeKey,JSON.stringify(checks));}catch(err){}}
const all=bookingGroups.flatMap(g=>g.items);
const progress=()=>{const n=all.filter(x=>checks[x.id]).length;qs("#progressText").textContent=n+" / "+all.length+" 項已確認";qs("#progressFill").style.width=(n/all.length*100)+"%"};
const bookingHTML=()=>{qs("#bookingList").innerHTML=bookingGroups.map(g=>'<div class="booking-group"><h3>'+esc(g.title)+'</h3>'+g.items.map(b=>'<label class="booking-item"><input type="checkbox" data-check="'+esc(b.id)+'" '+(checks[b.id]?'checked':'')+'><span class="booking-body"><strong>'+esc(b.name)+'</strong><small>'+esc(b.desc)+'</small>'+(b.link?'<small><a href="'+esc(b.link)+'" target="_blank" rel="noopener noreferrer" style="color:#8b6944" onclick="event.stopPropagation()">↗ 查看官方網站</a></small>':'')+'</span></label>').join("")+'</div>').join("");progress()};
bookingHTML();
qs("#bookingList").addEventListener("change",e=>{if(e.target.matches("input[data-check]")){checks[e.target.dataset.check]=e.target.checked;persist();progress()}});
let toastT;
function toast(message){const t=qs("#toast");t.textContent=message;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2200)}
qs("#resetChecks").addEventListener("click",()=>{if(!window.confirm("要清除本裝置的預約勾選紀錄嗎？"))return;checks={};persist();bookingHTML();toast("勾選紀錄已清除")});
qs("#guideCards").innerHTML=guides.map(g=>'<article class="guide-card"><div class="guide-icon">'+esc(g.icon)+'</div><div><h3>'+esc(g.title)+'</h3><p>'+esc(g.text)+'</p>'+(g.link?'<div class="event-links">'+official(g.link)+'</div>':'')+'</div></article>').join("");
const navButtons=Array.from(document.querySelectorAll(".nav-button"));
function changeView(name){
document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+name));
navButtons.forEach(b=>{const on=b.dataset.view===name;b.classList.toggle("active",on);b.setAttribute("aria-current",on?"page":"false")});
window.scrollTo({top:0,behavior:"smooth"});
}
navButtons.forEach(b=>b.addEventListener("click",()=>changeView(b.dataset.view)));
if(window.location.hash==="#food"||window.location.hash==="#booking"||window.location.hash==="#guide"){changeView(window.location.hash.slice(1));}
})();