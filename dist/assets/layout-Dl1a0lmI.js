(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();function w(){const r=window.location.pathname,t=r.indexOf("/pages/");if(t!==-1)return r.slice(0,t+1);const s=r.lastIndexOf("/");return s>=0?r.slice(0,s+1):"/"}const p=[{key:"quickstart",label:"Get Started",href:"./quickstart.html"},{key:"datasets",label:"Datasets",href:"./datasets.html"},{key:"updates",label:"Updates",href:"./updates.html"},{key:"team",label:"Team",href:"./team.html"},{label:"Paper",href:"https://arxiv.org/abs/2512.04475",external:!0},{label:"GitHub",href:"https://github.com/graphbench/package",external:!0}];function y(r,t,s){const i=p.map(e=>e.external?e.label==="GitHub"?`<a href="${e.href}" target="_blank" rel="noopener noreferrer"><img src="./github.svg" class="icon" alt="" aria-hidden="true"/> <span>${e.label}</span></a>`:`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.label}</a>`:`<a href="${e.href}" ${e.key===r?'aria-current="page"':""}>${e.label}</a>`).join(""),a=p.map(e=>e.external?`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.label}</a>`:`<a href="${e.href}" ${e.key===r?'aria-current="page"':""}>${e.label}</a>`).join(""),n=r!=="home"?`
  <footer class="site-footer">
    <div class="container footer-content">
      <a href="./" class="footer-brand" aria-label="GraphBench home">
        <img src="./GraphBench_logo_icon.png" alt="" aria-hidden="true" />
        <span>GraphBench</span>
      </a>
      <div class="footer-links">
        <a href="https://arxiv.org/abs/2512.04475" target="_blank" rel="noopener noreferrer" aria-label="Paper" class="footer-link">
          <img src="./paper.svg" alt="" aria-hidden="true" />
        </a>
        <a href="https://github.com/graphbench/package" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="footer-link">
          <img src="./github.svg" alt="" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
  `:"";return`
  <header id="site-header" class="${r!=="home"?"header-elevated":"header-on-hero"}">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="./" class="brand" aria-label="GraphBench home">
        <img src="./GraphBench_logo_text_black.svg" alt="GraphBench" />
      </a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="nav-drawer" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <nav class="nav-links" aria-label="Sections">
        ${i}
      </nav>
    </div>
  </header>
  <div class="nav-drawer" id="nav-drawer" data-nav-drawer hidden>
    <div class="nav-drawer-backdrop" data-nav-close></div>
    <div class="nav-drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div class="nav-drawer-header">
        <a href="./" class="brand nav-drawer-brand" aria-label="GraphBench home">
          <img src="./GraphBench_logo_text_black.svg" alt="GraphBench" />
        </a>
        <button type="button" class="nav-drawer-close" data-nav-close aria-label="Close navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav class="nav-drawer-links" aria-label="Mobile site sections">
        ${a}
      </nav>
    </div>
  </div>
  <main id="main" ${s?`class="${s}"`:""}>${t}</main>
  ${n}
  `}function k(){document.querySelectorAll("button[data-copy]").forEach(t=>{t.addEventListener("click",async()=>{const s=t.getAttribute("data-copy")||"";try{if(await navigator.clipboard.writeText(s),t.classList.contains("copy-btn")){const i=t.innerHTML,a='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';t.innerHTML=a,setTimeout(()=>{t.innerHTML=i},1e3)}else{const i=t.textContent;t.textContent="Copied",setTimeout(()=>{i&&(t.textContent=i)},1e3)}}catch{}})});const r=document.querySelector("[data-nav-drawer]");if(r){const t=r.querySelector(".nav-drawer-panel"),s=Array.from(document.querySelectorAll("[data-nav-toggle]")),i='a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';let a=null,n=null;const e=()=>!r.hasAttribute("hidden"),d=o=>{s.forEach(l=>l.setAttribute("aria-expanded",o.toString()))},g=()=>{if(!t)return;const o=t.querySelector(i);o&&o.focus()},v=()=>{!t||e()||(n!==null&&(window.clearTimeout(n),n=null),a=document.activeElement instanceof HTMLElement?document.activeElement:null,r.removeAttribute("hidden"),requestAnimationFrame(()=>{r.classList.add("is-open")}),document.body.classList.add("nav-drawer-open"),d(!0),g())},m=()=>{a&&typeof a.focus=="function"&&a.focus(),a=null},c=()=>{!t||!e()||(r.classList.remove("is-open"),document.body.classList.remove("nav-drawer-open"),d(!1),n=window.setTimeout(()=>{r.setAttribute("hidden",""),m(),n=null},250))};s.forEach(o=>{o.addEventListener("click",()=>{e()?c():v()})}),r.addEventListener("click",o=>{o.target.closest("[data-nav-close]")&&c()}),r.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>{c()})});const b=o=>{if(!(!e()||!t)){if(o.key==="Escape"){o.preventDefault(),c();return}if(o.key==="Tab"){const l=Array.from(t.querySelectorAll(i)).filter(h=>!h.hasAttribute("disabled")&&!h.disabled);if(l.length===0)return;const u=l[0],f=l[l.length-1];o.shiftKey&&document.activeElement===u?(o.preventDefault(),f.focus()):!o.shiftKey&&document.activeElement===f&&(o.preventDefault(),u.focus())}}};document.addEventListener("keydown",b),window.addEventListener("resize",()=>{window.innerWidth>650&&e()&&c()})}}export{k as e,w as g,y as r};
