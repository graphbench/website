import{r as W,e as D}from"./layout-Dl1a0lmI.js";const P=document.querySelector("#app");P.innerHTML=W("home",`
  <!-- Hero -->
  <section class="hero hero-primary home-hero">
    <div class="container hero-grid">
      <div class="hero-left">
        <h1 class="hero-title"><span class="hero-brand">GraphBench:</span> Next-generation graph learning benchmarking</h1>
        <p class="hero-abstract">We present Graphbench, a comprehensive graph learning benchmark across <span class="hero-highlight">domains</span> and prediction <span class="hero-highlight">regimes</span>. GraphBench standardizes <span class="hero-highlight">evaluation</span> with consistent <span class="hero-highlight">splits</span>, <span class="hero-highlight">metrics</span>, and <span class="hero-highlight">out-of-distribution</span> checks, and includes a unified <span class="hero-highlight">hyperparameter tuning</span> framework. We also provide strong <span class="hero-highlight">baselines</span> with state-of-the-art message-passing and graph transformer models and easy <span class="hero-highlight">plug-and-play code</span> to get you started.</p>
        <p class="hero-subtext">Scroll down to learn more, explore our datasets or jump right in!</p>
        <div class="cta">
          <a href="./quickstart.html" class="btn btn-primary">Get Started</a>
          <a href="./datasets.html" class="btn btn-outline">Explore Datasets</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Explore datasets (interactive flow figure) -->
  <section class="section-white flow-slide home-offset" style="background:#fff;">
    <div class="container">

      <div class="flow-figure-shell">
        <div id="flow-figure" class="flow-wrap">
          <svg id="flow-svg" class="flow-svg" aria-hidden="true"></svg>
          <div class="flow-col flow-left">
            <div class="flow-item accent-g1"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-social" class="flow-node" data-id="social" data-group="1"><span class="icon" aria-hidden="true"></span><span class="label">Social Networks</span></a>
            </div>
            <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-chip" class="flow-node" data-id="chip" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Chip Design</span></a>
            </div>
            <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-circuits" class="flow-node" data-id="circuits" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Electronic Circuits</span></a>
            </div>
            <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-sat" class="flow-node" data-id="sat" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">SAT Solving</span></a>
            </div>
            <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-co" class="flow-node" data-id="co" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Combinatorial Optimization</span></a>
            </div>
            <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-ar" class="flow-node" data-id="ar" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Algorithmic Reasoning</span></a>
            </div>
            <div class="flow-item accent-g4"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="./datasets.html#ds-weather" class="flow-node" data-id="weather" data-group="4"><span class="icon" aria-hidden="true"></span><span class="label">Weather Forecasting</span></a>
            </div>
          </div>

          <a id="flow-model" class="flow-model" href="./quickstart.html" aria-label="Your model">
            <span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <div class="model-inner">
              <span class="icon" aria-hidden="true"><img src="./puzzle.svg" alt="" width="18" height="18"/></span>
              <span class="t">Your Model</span>
            </div>
          </a>

          <div class="flow-col flow-right">
            <div class="flow-item ev1" style="--accent:#4F064F"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev1" data-ev="splits"><span class="label">Evaluation Splits</span></a>
            </div>
            <div class="flow-item ev2" style="--accent:#821846"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev2" data-ev="metrics"><span class="label">Evaluation Metrics</span></a>
            </div>
            <div class="flow-item ev3" style="--accent:#9E2235"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev3" data-ev="tuning"><span class="label">Hyperparameter Tuning</span></a>
            </div>
            <div class="flow-item ev4" style="--accent:#AF3323"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev4" data-ev="ood"><span class="label">OOD Generalization</span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="flow-copy grid">
        <div class="col-4">
          <h3>Datasets</h3>
          <p>GraphBench offers 7 curated datasets from 4 domains, all accessible through a unified loader. Explore our catalog to learn more.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="./datasets.html">Browse datasets</a></div>
        </div>
        <div class="col-4">
          <h3>Your model</h3>
          <p>Just drop in your model and go, with our simple plug-and-play pipeline.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="./quickstart.html">Get started</a></div>
        </div>
        <div class="col-4">
          <h3>Evaluation</h3>
          <p>GraphBench provides extensive evaluation of your model, covering splits, metrics, hyperparameter tuning, and OOD generalization.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="https://arxiv.org/abs/2512.04475" target="_blank" rel="noopener noreferrer">Learn more</a></div>
        </div>
      </div>

    </div>
  </section>

  <!-- GUI + Generated code -->
  <section id="builder" class="section-white builder-section home-offset" style="background:#fff;">
    <div class="container">
      <p class="builder-intro">Configure on the left. Code updates live on the right.</p>
      <div class="builder-grid">
        <aside class="builder-sidebar" aria-label="Configuration">
          <div class="side">
            <div class="side-head"><h3>Set up your custom GraphBench code.</h3></div>
            <div class="side-body" id="config-panel"></div>
          </div>
        </aside>

        <aside class="builder-right">
          <div class="builder-canvas code-card">
            <div class="code-wrap builder-code">
              <button class="copy-btn builder-copy-btn" data-copy="" aria-label="Copy generated code" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <pre><code id="gen-code" class="code-manual"></code></pre>
            </div>
            <div class="builder-help">Copy and paste the code and you're ready to go.</div>
          </div>
        </aside>
      </div>
    </div>
    </div>
  </section>
  
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
`,"home-main");document.body.classList.remove("no-body-scroll");document.documentElement.classList.remove("no-root-scroll");const R=()=>{const p=window.innerWidth||document.documentElement.clientWidth,w=window.innerHeight||document.documentElement.clientHeight,k=p>=1e3&&w<=850;document.body.classList.toggle("home-hero-lock",k);const v=p>=1e3&&w>850;document.body.classList.toggle("home-hero-tall",v)};R();window.addEventListener("resize",R,{passive:!0});(function(){const p=document.getElementById("flow-svg"),w=document.getElementById("flow-figure");if(!p||!w)return;const k=w.parentElement;if(!k)return;let v=null,b=null;const H=1200,f=()=>{const c=document.createElement("div");c.style.position="absolute",c.style.left="-99999px",c.style.top="-99999px",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center";const u=w.cloneNode(!0);u.removeAttribute("id"),u.querySelectorAll("[id]").forEach(h=>h.removeAttribute("id")),u.style.width="auto",u.style.height="auto",u.style.transform="none",u.style.transformOrigin="top center",u.style.setProperty("--flow-vw",`${H/100}px`),c.appendChild(u),document.body.appendChild(c);const S=u.getBoundingClientRect();return document.body.removeChild(c),!S.width||!S.height?null:S},A=()=>{if(v!==null&&b!==null)return;const c=f();c&&(v=c.width,b=c.height,w.style.width=`${v}px`,w.style.height=`${b}px`,k.style.display="flex",k.style.alignItems="center",k.style.justifyContent="center",k.style.marginInline="auto",k.style.maxWidth=`${v}px`)},x=()=>{if(A(),v===null||b===null)return;const c=window.innerWidth||document.documentElement.clientWidth||v;let u=66;c<=1e3&&(u=76),c<=650&&(u=80),c<=400&&(u=90),k.style.width=`${u}vw`;const E=(k.getBoundingClientRect().width||v)/v,j=b*E;k.style.height=`${j}px`,w.style.transformOrigin="top center",w.style.transform=`scale(${E})`},$=c=>{switch(c){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(c=>{const u=c.getAttribute("data-id")||"",S=c.querySelector(".icon");S&&(S.innerHTML=$(u))});const m=(c,u,S=2)=>{const h=document.createElementNS("http://www.w3.org/2000/svg","path");return h.setAttribute("d",c),h.setAttribute("fill","none"),h.setAttribute("stroke",u),h.setAttribute("stroke-width",String(S)),h.setAttribute("stroke-linecap","round"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("shape-rendering","geometricPrecision"),h},_=c=>getComputedStyle(document.documentElement).getPropertyValue(c===1?"--ds-g1":c===2?"--ds-g2":c===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",G=["#4F064F","#821846","#9E2235","#AF3323"],L=()=>{for(x();p.firstChild;)p.removeChild(p.firstChild);const c=Array.from(document.querySelectorAll(".flow-left .flow-node")),u=document.getElementById("flow-model"),S=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!u)return;const h=w.getBoundingClientRect();p.setAttribute("viewBox",`0 0 ${h.width} ${h.height}`);const E=u.getBoundingClientRect(),j=E.left-h.left,C=E.right-h.left,y=E.top-h.top+E.height/2,a=(r,o,e,s)=>{const l=Math.max(32,Math.min(120,Math.abs(e-r)*.35)),d=r+l,i=o,g=e-l;return`M ${r} ${o} C ${d} ${i}, ${g} ${s}, ${e} ${s}`},t=window.innerWidth||document.documentElement.clientWidth||h.width;let n=2;t<=1e3&&(n=1.7),t<=720&&(n=1.4),t<=520&&(n=1.1),c.forEach(r=>{const o=Number(r.getAttribute("data-group")||"1"),e=r.getBoundingClientRect(),s=e.right-h.left,l=e.top-h.top+e.height/2,g=a(s,l,j,y);p.appendChild(m(g,_(o),n))}),S.forEach((r,o)=>{const e=r.getBoundingClientRect(),s=C,l=y,d=e.left-h.left,i=e.top-h.top+e.height/2,g=a(s,l,d,i);p.appendChild(m(g,G[o]||G[0],n))})};new ResizeObserver(()=>L()).observe(w),window.addEventListener("resize",L,{passive:!0}),setTimeout(L,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const p=document.getElementById("config-panel"),w=document.getElementById("gen-code");if(!p||!w)return;const k=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],v={social:["bluesky_quotes","bluesky_replies","bluesky_retweets"],chip:[],circuits:["electronic_circuits_5_eff","electronic_circuits_5_vout","electronic_circuits_7_eff","electronic_circuits_7_vout","electronic_circuits_10_eff","electronic_circuits_10_vout"],sat:["sat_lcg_as","sat_lcg_epm","sat_vcg_as","sat_vcg_epm","sat_vg_as","sat_vg_epm"],co:["co_ba_large","co_ba_small","co_er_large","co_er_small","co_rb_large","co_rb_small"],weather:[]},b={algorithmic_reasoning_easy:["bipartitematching_easy","bridges_easy","mst_easy","steinertree_easy","maxclique_easy","flow_easy","topologicalorder_easy"],algorithmic_reasoning_medium:["bipartitematching_medium","bridges_medium","mst_medium","steinertree_medium","maxclique_medium","flow_medium","topologicalorder_medium"],algorithmic_reasoning_hard:["bipartitematching_hard","bridges_hard","mst_hard","steinertree_hard","maxclique_hard","flow_hard","topologicalorder_hard"]},H={social:["socialnetwork"],chip:["chipdesign"],circuits:["electronic_circuits"],sat:["sat"],co:["co"],weather:["weather"]},f=new Set,A=Object.fromEntries(Object.keys(v).map(a=>[a,new Set])),x=new Set,$=Object.fromEntries(Object.keys(b).map(a=>[a,new Set])),m=new Set,_=new Set,G=a=>{switch(a){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},L=a=>{switch(a){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},O=a=>{const t=f.has(a),n=v[a]||[],r=A[a]||new Set;return`<div class="side-sub">${n.map(e=>{const s=t&&r.has(e)?"checked":"",l=`sub_${a}_${e}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row">
          <input id="${l}" type="checkbox" data-sub-ds="${a}" data-sub="${e}" ${s}/>
          <label class="sub-name" for="${l}">
            <span class="sub-text">${e}</span>
          </label>
        </div>`}).join("")}</div>`},c=()=>{const a=f.has("ar"),t='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>';return`<div class="side-sub ar-groups">${Object.keys(b).map(o=>{const e=a&&x.has(o),s=_.has(o),l=b[o]||[],d=$[o]||new Set,i=l.map(g=>{const M=e&&d.has(g)?"checked":"",B=`ar_sub_${o}_${g}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row sub-row-nested">
            <input id="${B}" type="checkbox" data-ar-group="${o}" data-ar-sub="${g}" ${M}/>
            <label class="sub-name" for="${B}">
              <span class="sub-text">${g}</span>
            </label>
          </div>`}).join("");return`
          <div class="ar-group-item" data-ar-group="${o}">
            <div class="side-row ds-main ar-group-row" data-ar-group-row>
              <label class="side-check"><input type="checkbox" data-ar-group-select="${o}" ${e?"checked":""}/></label>
              <span class="ds-name">${o}</span>
              <button class="ds-disclose" data-ar-group-toggle="${o}" aria-expanded="${s}" aria-label="Toggle ${o} options">${t}</button>
            </div>
            <div class="ds-subwrap" data-open="${s}">
              <div class="ds-sub">
                <div class="side-sub">${i}</div>
              </div>
            </div>
          </div>`}).join("")}</div>`},u=()=>{const a='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',t=k.map(e=>{const s=f.has(e.id),l=m.has(e.id),d=e.id==="ar",i=d||(v[e.id]||[]).length>0,g=d?c():i?O(e.id):"";return`
          <div class="ds-item" data-ds="${e.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${e.id}" ${s?"checked":""}/></label>
              <span class="ds-icon" style="color:${L(e.id)}">${G(e.id)}</span>
              <span class="ds-name">${e.name}</span>
              ${i?`<button class="ds-disclose" data-ds-toggle="${e.id}" aria-expanded="${l}" aria-label="Toggle options">${a}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${i?`<div class="ds-subwrap" data-open="${l}"><div class="ds-sub">${g}</div></div>`:""}
          </div>`}).join(""),n=document.getElementById("opt-pre-filter"),r=document.getElementById("opt-pre-transform"),o=document.getElementById("opt-transform");p.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${a}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${n&&n.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${r&&r.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${o&&o.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${t}</div>
        </div>`},S=()=>{const a=[];return Array.from(f.values()).forEach(n=>{if(n==="ar"){Object.keys(b).forEach(d=>{if(!x.has(d))return;const i=b[d]||[],g=$[d]||new Set;i.every(B=>g.has(B))?a.push(d):a.push(...i.filter(B=>g.has(B)))});return}const r=v[n]||[],o=A[n]||new Set,e=H[n]||[];if(r.length===0){e.length?a.push(...e):a.push(n);return}r.every(l=>o.has(l))?e.length?a.push(...e):a.push(...r):a.push(...r.filter(l=>o.has(l)))}),a},h=()=>{const a=S(),t=a.length>0,n=a.length>1,r=!!document.getElementById("opt-pre-filter")?.checked,o=!!document.getElementById("opt-pre-transform")?.checked,e=!!document.getElementById("opt-transform")?.checked,s=[];s.push("import graphbench"),s.push(""),s.push("model = ...  # your torch model"),t?n?(s.push("dataset_name = ["),a.forEach((i,g)=>{const M=g===a.length-1?"":",";s.push(`  '${i}'${M}`)}),s.push("]  # name of the task or list of tasks")):s.push(`dataset_name = '${a[0]}'  # name of the task or list of tasks`):s.push("dataset_name = ...  # name of the task or list of tasks"),r&&s.push("pre_filter = ...  # optional: PyTorch Geometric filter matrix"),o&&s.push("pre_transform = ...  # optional: PyG-like transform during loading"),e&&s.push("transform = ...  # optional: PyG-like transform at computation time"),s.push(""),s.push("# Setting up the components of GraphBench"),s.push("Evaluator = graphbench.Evaluator(dataset_name)"),s.push("Optimizer = graphbench.Optimizer(optimization_args, training_method)");const l=[];r&&l.push("pre_filter=pre_filter"),o&&l.push("pre_transform=pre_transform"),e&&l.push("transform=transform");const d=l.length?", "+l.join(", "):"";return s.push(`Loader = graphbench.Loader(dataset_name${d})`),s.push(""),s.push("# Load a GraphBench dataset and get splits"),s.push("dataset = Loader.load()"),s.push(""),s.push("# Optimize your model"),s.push("opt_model = Optimizer.optimize()"),s.push(""),s.push("# Use GraphBench evaluator with targets y_true and predictions y_pred"),s.push("results = Evaluator.evaluate(y_true, y_pred)"),s.join(`
`)},E=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),j=a=>{let t=E(a);return t=t.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),t=t.replace(/\b(graphbench-lib|graphbench)\b/g,'<span class="ns">$1</span>'),t=t.replace(/\b(load|optimize|evaluate)\b/g,'<span class="fn">$1</span>'),t=t.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name|Loader|Optimizer|Evaluator|pre_filter|pre_transform|transform|optimization_args|training_method|y_true|y_pred)\b/g,'<span class="var">$1</span>'),t=t.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),t=t.replace(/#([^\n]*)/g,(n,r)=>'<span class="com">#'+String(r).replace(/<[^>]+>/g,"")+"</span>"),t=t.replace(/<span class=\"com\">#([^<]*)\b(graphbench-lib|graphbench)\b([^<]*)<\/span>/g,'<span class="com">#$1</span><span class="ns">$2</span><span class="com">$3</span>'),t},C=()=>{const a=h(),t=j(a);w.innerHTML=t;const n=document.querySelector(".builder-copy-btn");n&&n.setAttribute("data-copy",a)},y=()=>{p.querySelectorAll(".ds-item").forEach(t=>{const n=t.getAttribute("data-ds")||"",r=t.querySelector(".ds-subwrap"),o=t.querySelector("[data-ds-toggle]"),e=m.has(n);if(r&&r.setAttribute("data-open",e?"true":"false"),o&&o.setAttribute("aria-expanded",e.toString()),n==="ar")t.querySelectorAll(".ar-group-item").forEach(d=>{const i=d.getAttribute("data-ar-group")||"",g=d.querySelector(".ds-subwrap"),M=d.querySelector("[data-ar-group-toggle]"),B=_.has(i);g&&g.setAttribute("data-open",B?"true":"false"),M&&M.setAttribute("aria-expanded",B.toString());const z=f.has("ar")&&x.has(i),q=d.querySelector(`input[data-ar-group-select="${i}"]`);q&&(q.checked=z);const T=$[i]||new Set;d.querySelectorAll("input[data-ar-sub]").forEach(I=>{const F=I.getAttribute("data-ar-sub")||"";I.checked=z&&T.has(F)})});else{const l=t.querySelectorAll("input[data-sub]"),d=f.has(n),i=A[n]||new Set;l.forEach(g=>{const M=g.getAttribute("data-sub")||"";g.checked=d&&i.has(M)})}const s=t.querySelector("input[data-select]");s&&s.getAttribute("data-select")===n&&(s.checked=f.has(n))})};p.addEventListener("change",a=>{const t=a.target;if(!t)return;const n=t.getAttribute("data-select"),r=t.getAttribute("data-sub-ds"),o=t.getAttribute("data-sub"),e=t.getAttribute("data-ar-group-select"),s=t.getAttribute("data-ar-group"),l=t.getAttribute("data-ar-sub"),d=t.getAttribute("id");if(n==="ar"){t.checked?(f.add("ar"),Object.keys(b).forEach(i=>{x.add(i),$[i]=new Set(b[i]||[])}),m.clear(),m.add("ar")):(f.delete("ar"),x.clear(),Object.keys(b).forEach(i=>{$[i].clear()}),m.delete("ar")),y(),C();return}if(n){t.checked?(f.add(n),A[n]=new Set(v[n]||[]),m.clear(),m.add(n)):(f.delete(n),A[n].clear(),m.delete(n)),y(),C();return}if(e){t.checked?(x.add(e),f.add("ar"),$[e]=new Set(b[e]||[]),_.add(e)):(x.delete(e),$[e].clear(),x.size===0&&f.delete("ar"),_.delete(e)),y(),C();return}if(s&&l){const i=$[s]||new Set;t.checked?(i.add(l),x.add(s),f.add("ar")):(i.delete(l),i.size===0&&(x.delete(s),x.size===0&&f.delete("ar"))),$[s]=i,_.add(s),y(),C();return}if(r&&o){const i=A[r]||new Set;t.checked?(i.add(o),f.add(r)):(i.delete(o),i.size===0&&f.delete(r)),A[r]=i,m.add(r),y(),C();return}if(d==="opt-pre-filter"||d==="opt-pre-transform"||d==="opt-transform"){C();return}}),p.addEventListener("click",a=>{const t=a.target.closest("button");if(!t||t.getAttribute("data-mode"))return;const r=a.target.closest("[data-coll-toggle]");if(r){const s=r.getAttribute("data-coll-toggle")||"",l=document.getElementById(s);if(l){const d=l.getAttribute("data-open")==="true";l.setAttribute("data-open",d?"false":"true");const i=l.querySelector(".head [data-coll-toggle]");i&&i.setAttribute("aria-expanded",(!d).toString())}return}const o=t.getAttribute("data-ar-group-toggle");if(o){!_.has(o)?_.add(o):_.delete(o),y();return}const e=t.getAttribute("data-ds-toggle");if(e){!m.has(e)?(m.clear(),m.add(e)):m.delete(e),y();return}}),p.addEventListener("click",a=>{const t=a.target.closest(".side-row[data-ar-group-row]");if(t){const d=a.target.closest('input[type="checkbox"]'),i=a.target.closest("[data-ar-group-toggle]");if(d||i)return;const M=t.closest(".ar-group-item")?.getAttribute("data-ar-group")||"";if(!M)return;!_.has(M)?_.add(M):_.delete(M),y();return}const n=a.target.closest(".side-row[data-dsrow]");if(!n)return;const r=a.target.closest('input[type="checkbox"]'),o=a.target.closest("[data-ds-toggle]");if(r||o)return;const s=n.closest(".ds-item")?.getAttribute("data-ds")||"";if(!s)return;!m.has(s)?(m.clear(),m.add(s)):m.delete(s),y()}),p.addEventListener("click",a=>{const t=a.target.closest("#model-coll");if(!t)return;const n=a.target.closest("#model-coll .head"),r=a.target.closest("#model-coll [data-coll-toggle]"),o=a.target.closest("#model-coll .body input, #model-coll .body button, #model-coll .body label");if(n||!o&&!r&&a.target.closest("#model-coll")){const e=t.getAttribute("data-open")==="true";t.setAttribute("data-open",e?"false":"true");const s=t.querySelector(".head [data-coll-toggle]");s&&s.setAttribute("aria-expanded",(!e).toString())}}),u(),C()})();(()=>{const p=document.querySelector(".hero.hero-primary"),w=p?.querySelector(".hero-left");if(!p||!w)return;const k=p.querySelector(".arrow-btn.arrow-down"),v=document.getElementById("site-header"),b=window.matchMedia("(prefers-reduced-motion: reduce)"),H=window.matchMedia("(max-width: 980px)"),f=window.matchMedia("(max-width: 1000px)"),A=p.querySelector(".hero-right"),x=.65,$=1,m=1.15,_=.86;let G=(()=>{const r=Number.parseFloat(getComputedStyle(w).getPropertyValue("--hero-text-scale"));return Number.isFinite(r)&&r>0?r:1})(),L=null,O=!1,c=!1;const u=r=>{const e=(A?getComputedStyle(A).display!=="none"&&!f.matches:!f.matches)?$:m;return r?e:Math.min(1,e)},S=(r,o)=>{const e=u(o),s=Math.min(x,e);return Math.max(s,Math.min(e,r))},h=()=>{if(v)return v.offsetHeight;const r=getComputedStyle(document.documentElement).getPropertyValue("--header-h"),o=Number.parseFloat(r);return Number.isFinite(o)?o:64},E=()=>window.visualViewport?window.visualViewport.height:typeof window.innerHeight=="number"?window.innerHeight:document.documentElement.clientHeight,j=()=>{const r=k?.offsetHeight??0,o=r?r+56:96;return Math.max(0,E()-h()-o)},C=()=>{const r=j();if(!r)return;const o=w.scrollHeight;if(!o)return;const e=o/(G||1);if(!e)return;const s=!H.matches,l=S(r/e*_,s);Math.abs(l-G)<.02||(G=l,O=!0,w.style.setProperty("--hero-text-scale",l.toFixed(3)),requestAnimationFrame(()=>{O=!1,c&&(c=!1,y())}))},y=()=>{if(!b.matches){if(O){c=!0;return}L===null&&(L=requestAnimationFrame(()=>{L=null,C()}))}};y();const a=()=>y();window.addEventListener("resize",a);const t=r=>{r&&(typeof r.addEventListener=="function"?r.addEventListener("change",a):typeof r.addListener=="function"&&r.addListener(a))};t(H),t(b),t(f);const n=new ResizeObserver(()=>y());n.observe(p),n.observe(w),A&&n.observe(A)})();D();
