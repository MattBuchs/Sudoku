(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const L=r=>{const e=[];for(let s=1;s<=9;s++)r.includes(s)||e.push(s);if(e.length===0)return null;const n=Math.floor(Math.random()*e.length);return e[n]},x=(r,e,n)=>{const s=document.querySelectorAll(`.row-${r}`),o=document.querySelectorAll(`.col-${e}`),t=document.querySelectorAll(`.box-${n}`),c=[];s.forEach(a=>{a.textContent!==""&&c.push(Number(a.textContent))}),o.forEach(a=>{a.textContent!==""&&c.push(Number(a.textContent))}),t.forEach(a=>{a.textContent!==""&&c.push(Number(a.textContent))});const l=[...new Set(c)];return L(l)},h=r=>{if(r>81)throw new Error("Count exceeds the number of unique values available.");const e=Array.from({length:81},(n,s)=>s);for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e.slice(0,r)},g=()=>{document.querySelectorAll("#sudoku div").forEach(e=>{e.remove()})},y=(r,e)=>{r.forEach(t=>{t.classList.contains("box-selected")&&t.classList.remove("box-selected"),t.classList.contains("color-extend")&&t.classList.remove("color-extend"),t.classList.contains("background-red2")&&t.classList.remove("background-red2"),t.classList.contains("background-blue")&&t.classList.remove("background-blue"),t.textContent===e.textContent&&t!==e&&e.textContent!==""&&(t.classList.contains("text-red")?t.classList.add("background-red2"):t.classList.add("background-blue"))}),e.classList.add("box-selected");const n=document.querySelectorAll(`.row-${e.className[4]}`),s=document.querySelectorAll(`.col-${e.className[10]}`),o=document.querySelectorAll(`.box-${e.className[16]}`);n.forEach(t=>{t.classList.contains("box-selected")||t.classList.add("color-extend")}),s.forEach(t=>{t.classList.contains("box-selected")||t.classList.add("color-extend")}),o.forEach(t=>{t.classList.contains("box-selected")||t.classList.add("color-extend")})},v=(r,e,n)=>{const s=document.querySelector(".box-selected");if(s.classList.contains("color-black"))return;const o=document.querySelectorAll(".color-extend");let t;s&&(s.textContent=r.textContent),e.forEach((c,l)=>{c.classList.contains("box-selected")&&(t=n[l]),c.classList.contains("background-red")&&c.classList.remove("background-red")}),s.textContent!==t?(s.classList.add("background-red"),s.classList.add("text-red"),o.forEach(c=>{c.textContent===s.textContent&&c.classList.add("background-red")})):(s.classList.contains("background-red")||s.classList.contains("text-red"))&&(s.classList.remove("background-red"),s.classList.remove("text-red")),e.forEach(c=>{c.classList.contains("background-red2")&&c.classList.remove("background-red2"),c.classList.contains("background-blue")&&c.classList.remove("background-blue"),c.textContent===s.textContent&&c!==s&&s.textContent!==""&&(c.classList.contains("text-red")?c.classList.add("background-red2"):c.classList.add("background-blue"))})},k=r=>{const e=document.querySelectorAll("#sudoku div"),n=document.querySelectorAll("#number div");e.forEach(s=>{s.addEventListener("click",()=>y(e,s))}),n.forEach(s=>{s.addEventListener("click",()=>v(s,e,r))})},p=()=>{const r=document.querySelector("#difficulty-select");g(),b(r.value)},b=r=>{const s=document.querySelector("#sudoku");let o=0;for(;o<9;){let l=!0;for(let d=0;d<9;d++){const a=document.createElement("div");a.classList.add(`row-${o}`),a.classList.add(`col-${d}`);const u=Math.floor(o/3),i=Math.floor(d/3),f=u*3+i;a.classList.add(`box-${f}`);const m=x(o,d,f);if(m===null){l=!1;break}a.textContent=m,a.classList.add("color-black"),(o===2||o===5)&&(a.style.borderBottom="1px solid #000"),(d===2||d===5)&&(a.style.borderRight="1px solid #000"),s.appendChild(a)}if(!l){const d=document.querySelectorAll(`.row-${o}`),a=document.querySelectorAll(`.row-${o-1}`);[...d,...a].forEach(i=>{i.remove()}),o-=2}o++}const t=[];document.querySelectorAll("#sudoku div").forEach(l=>{t.push(l.textContent)}),C(r),k(t)},C=r=>{let e;switch(r){case"easy":e=46;break;case"medium":e=52;break;case"hard":e=58;break;case"extreme":e=65;break;default:e=45}const n=document.querySelectorAll("#sudoku div");h(e).forEach(o=>{n[o].textContent="",n[o].classList.add("text-blue"),n[o].classList.remove("color-black")})};document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#difficulty-select");r.value="easy",b("easy")});window.changeDifficulty=p;
