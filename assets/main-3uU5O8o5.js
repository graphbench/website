import{r as j,e as F}from"./layout-XksyZw2U.js";const O=document.querySelector("#app");O.innerHTML=j("home",`
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
          <div class="flow-cta"><a class="btn btn-outline" href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">Learn more</a></div>
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
`,"home-main");document.body.classList.remove("no-body-scroll");document.documentElement.classList.remove("no-root-scroll");const I=()=>{const d=window.innerWidth||document.documentElement.clientWidth,g=window.innerHeight||document.documentElement.clientHeight,b=d>=1e3&&g<=850;document.body.classList.toggle("home-hero-lock",b);const w=d>=1e3&&g>850;document.body.classList.toggle("home-hero-tall",w)};I();window.addEventListener("resize",I,{passive:!0});(function(){const d=document.getElementById("flow-svg"),g=document.getElementById("flow-figure");if(!d||!g)return;const b=g.parentElement;if(!b)return;let w=null,v=null;const y=1200,m=()=>{const r=document.createElement("div");r.style.position="absolute",r.style.left="-99999px",r.style.top="-99999px",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center";const l=g.cloneNode(!0);l.removeAttribute("id"),l.querySelectorAll("[id]").forEach(e=>e.removeAttribute("id")),l.style.width="auto",l.style.height="auto",l.style.transform="none",l.style.transformOrigin="top center",l.style.setProperty("--flow-vw",`${y/100}px`),r.appendChild(l),document.body.appendChild(r);const t=l.getBoundingClientRect();return document.body.removeChild(r),!t.width||!t.height?null:t},_=()=>{if(w!==null&&v!==null)return;const r=m();r&&(w=r.width,v=r.height,g.style.width=`${w}px`,g.style.height=`${v}px`,b.style.display="flex",b.style.alignItems="center",b.style.justifyContent="center",b.style.marginInline="auto",b.style.maxWidth=`${w}px`)},C=()=>{if(_(),w===null||v===null)return;const r=window.innerWidth||document.documentElement.clientWidth||w;let l=66;r<=1e3&&(l=76),r<=650&&(l=80),r<=400&&(l=90),b.style.width=`${l}vw`;const o=(b.getBoundingClientRect().width||w)/w,i=v*o;b.style.height=`${i}px`,g.style.transformOrigin="top center",g.style.transform=`scale(${o})`},$=r=>{switch(r){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(r=>{const l=r.getAttribute("data-id")||"",t=r.querySelector(".icon");t&&(t.innerHTML=$(l))});const A=(r,l,t=2)=>{const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d",r),e.setAttribute("fill","none"),e.setAttribute("stroke",l),e.setAttribute("stroke-width",String(t)),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("shape-rendering","geometricPrecision"),e},B=r=>getComputedStyle(document.documentElement).getPropertyValue(r===1?"--ds-g1":r===2?"--ds-g2":r===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",S=["#4F064F","#821846","#9E2235","#AF3323"],M=()=>{for(C();d.firstChild;)d.removeChild(d.firstChild);const r=Array.from(document.querySelectorAll(".flow-left .flow-node")),l=document.getElementById("flow-model"),t=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!l)return;const e=g.getBoundingClientRect();d.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`);const o=l.getBoundingClientRect(),i=o.left-e.left,c=o.right-e.left,a=o.top-e.top+o.height/2,s=(n,u,p,x)=>{const k=Math.max(32,Math.min(120,Math.abs(p-n)*.35)),H=n+k,z=u,L=p-k;return`M ${n} ${u} C ${H} ${z}, ${L} ${x}, ${p} ${x}`},h=window.innerWidth||document.documentElement.clientWidth||e.width;let f=2;h<=1e3&&(f=1.7),h<=720&&(f=1.4),h<=520&&(f=1.1),r.forEach(n=>{const u=Number(n.getAttribute("data-group")||"1"),p=n.getBoundingClientRect(),x=p.right-e.left,k=p.top-e.top+p.height/2,L=s(x,k,i,a);d.appendChild(A(L,B(u),f))}),t.forEach((n,u)=>{const p=n.getBoundingClientRect(),x=c,k=a,H=p.left-e.left,z=p.top-e.top+p.height/2,L=s(x,k,H,z);d.appendChild(A(L,S[u]||S[0],f))})};new ResizeObserver(()=>M()).observe(g),window.addEventListener("resize",M,{passive:!0}),setTimeout(M,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const d=document.getElementById("config-panel"),g=document.getElementById("gen-code");if(!d||!g)return;const b=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],w={social:["quotes","replies","reposts"],chip:["chipdesign"],circuits:["electronic_circuits_5_eff","electronic_circuits_5_vout","electronic_circuits_7_eff","electronic_circuits_7_vout","electronic_circuits_10_eff","electronic_circuits_10_vout"],sat:["sat_lcg_as","sat_vcg_as","sat_vg_as","sat_lcg_epm","sat_vcg_epm","sat_vg_epm"],co:["rb_small","rb_large","er_small","er_large","ba_small","ba_large"],ar:["bipartitematching","topologicalsorting","mst","steinertree","bridges","maxclique","flow"],weather:["weather_64"]},v=new Set,y=Object.fromEntries(Object.keys(w).map(t=>[t,new Set])),m=new Set,_=t=>{switch(t){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},C=t=>{switch(t){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},$=t=>{const e=v.has(t),o=w[t]||[],i=y[t]||new Set;return`<div class="side-sub">${o.map(a=>{const s=e&&i.has(a)?"checked":"",h=`sub_${t}_${a}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row">
          <input id="${h}" type="checkbox" data-sub-ds="${t}" data-sub="${a}" ${s}/>
          <label class="sub-name" for="${h}">
            <span class="sub-text">${a}</span>
          </label>
        </div>`}).join("")}</div>`},A=()=>{const t='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',e=b.map(a=>{const s=v.has(a.id),h=m.has(a.id),f=(w[a.id]||[]).length>0,n=f?$(a.id):"";return`
          <div class="ds-item" data-ds="${a.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${a.id}" ${s?"checked":""}/></label>
              <span class="ds-icon" style="color:${C(a.id)}">${_(a.id)}</span>
              <span class="ds-name">${a.name}</span>
              ${f?`<button class="ds-disclose" data-ds-toggle="${a.id}" aria-expanded="${h}" aria-label="Toggle options">${t}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${f?`<div class="ds-subwrap" data-open="${h}"><div class="ds-sub">${n}</div></div>`:""}
          </div>`}).join(""),o=document.getElementById("opt-pre-filter"),i=document.getElementById("opt-pre-transform"),c=document.getElementById("opt-transform");d.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${t}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${o&&o.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${i&&i.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${c&&c.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${e}</div>
        </div>`},B=()=>Array.from(v.values()).flatMap(e=>Array.from(y[e]||[])),S=()=>{const t=B(),e=t.length>0,o=t.length>1,i=!!document.getElementById("opt-pre-filter")?.checked,c=!!document.getElementById("opt-pre-transform")?.checked,a=!!document.getElementById("opt-transform")?.checked,s=[];s.push("import graphbench"),s.push(""),s.push("model = ...  # your torch model"),e?o?(s.push("dataset_name = ["),t.forEach((n,u)=>{const p=u===t.length-1?"":",";s.push(`  '${n}'${p}`)}),s.push("]  # name of the task or list of tasks")):s.push(`dataset_name = '${t[0]}'  # name of the task or list of tasks`):s.push("dataset_name = ...  # name of the task or list of tasks"),i&&s.push("pre_filter = ...  # optional: PyTorch Geometric filter matrix"),c&&s.push("pre_transform = ...  # optional: PyG-like transform during loading"),a&&s.push("transform = ...  # optional: PyG-like transform at computation time"),s.push(""),s.push("# Setting up the components of GraphBench"),s.push("Evaluator = graphbench.Evaluator(dataset_name)"),s.push("Optimizer = graphbench.Optimizer(optimization_args, training_method)");const h=[];i&&h.push("pre_filter=pre_filter"),c&&h.push("pre_transform=pre_transform"),a&&h.push("transform=transform");const f=h.length?", "+h.join(", "):"";return s.push(`Loader = graphbench.Loader(dataset_name${f})`),s.push(""),s.push("# Load a GraphBench dataset and get splits"),s.push("dataset = Loader.load()"),s.push(""),s.push("# Optimize your model"),s.push("opt_model = Optimizer.optimize()"),s.push(""),s.push("# Use GraphBench evaluator with targets y_true and predictions y_pred"),s.push("results = Evaluator.evaluate(y_true, y_pred)"),s.join(`
`)},M=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),E=t=>{let e=M(t);return e=e.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),e=e.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),e=e.replace(/\b(load|optimize|evaluate)\b/g,'<span class="fn">$1</span>'),e=e.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name|Loader|Optimizer|Evaluator|pre_filter|pre_transform|transform|optimization_args|training_method|y_true|y_pred)\b/g,'<span class="var">$1</span>'),e=e.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),e=e.replace(/#([^\n]*)/g,(o,i)=>'<span class="com">#'+String(i).replace(/<[^>]+>/g,"")+"</span>"),e=e.replace(/<span class=\"com\">#([^<]*)\bgraphbench\b([^<]*)<\/span>/g,'<span class="com">#$1</span><span class="ns">graphbench</span><span class="com">$2</span>'),e},r=()=>{const t=S(),e=E(t);g.innerHTML=e;const o=document.querySelector(".builder-copy-btn");o&&o.setAttribute("data-copy",t)},l=()=>{d.querySelectorAll(".ds-item").forEach(e=>{const o=e.getAttribute("data-ds")||"",i=e.querySelector(".ds-subwrap"),c=e.querySelector("[data-ds-toggle]"),a=m.has(o);i&&i.setAttribute("data-open",a?"true":"false"),c&&c.setAttribute("aria-expanded",a.toString());const s=e.querySelectorAll("input[data-sub]"),h=v.has(o),f=y[o]||new Set;s.forEach(u=>{const p=u.getAttribute("data-sub")||"";u.checked=h&&f.has(p)});const n=e.querySelector("input[data-select]");n&&n.getAttribute("data-select")===o&&(n.checked=v.has(o))})};d.addEventListener("change",t=>{const e=t.target;if(!e)return;const o=e.getAttribute("data-select"),i=e.getAttribute("data-sub-ds"),c=e.getAttribute("data-sub"),a=e.getAttribute("id");if(o){e.checked?(v.add(o),y[o]=new Set(w[o]||[]),m.clear(),m.add(o)):(v.delete(o),y[o].clear(),m.delete(o)),l(),r();return}if(i&&c){const s=y[i]||new Set;e.checked?(s.add(c),v.add(i)):(s.delete(c),s.size===0&&v.delete(i)),y[i]=s,m.add(i),l(),r();return}if(a==="opt-pre-filter"||a==="opt-pre-transform"||a==="opt-transform"){r();return}}),d.addEventListener("click",t=>{const e=t.target.closest("button");if(!e||e.getAttribute("data-mode"))return;const i=t.target.closest("[data-coll-toggle]");if(i){const a=i.getAttribute("data-coll-toggle")||"",s=document.getElementById(a);if(s){const h=s.getAttribute("data-open")==="true";s.setAttribute("data-open",h?"false":"true");const f=s.querySelector(".head [data-coll-toggle]");f&&f.setAttribute("aria-expanded",(!h).toString())}return}const c=e.getAttribute("data-ds-toggle");if(c){!m.has(c)?(m.clear(),m.add(c)):m.delete(c),l();return}}),d.addEventListener("click",t=>{const e=t.target.closest(".side-row[data-dsrow]");if(!e)return;const o=t.target.closest('input[type="checkbox"]'),i=t.target.closest("[data-ds-toggle]");if(o||i)return;const a=e.closest(".ds-item")?.getAttribute("data-ds")||"";if(!a)return;!m.has(a)?(m.clear(),m.add(a)):m.delete(a),l()}),d.addEventListener("click",t=>{const e=t.target.closest("#model-coll");if(!e)return;const o=t.target.closest("#model-coll .head"),i=t.target.closest("#model-coll [data-coll-toggle]"),c=t.target.closest("#model-coll .body input, #model-coll .body button, #model-coll .body label");if(o||!c&&!i&&t.target.closest("#model-coll")){const a=e.getAttribute("data-open")==="true";e.setAttribute("data-open",a?"false":"true");const s=e.querySelector(".head [data-coll-toggle]");s&&s.setAttribute("aria-expanded",(!a).toString())}}),A(),r()})();(()=>{const d=document.querySelector(".hero.hero-primary"),g=d?.querySelector(".hero-left");if(!d||!g)return;const b=d.querySelector(".arrow-btn.arrow-down"),w=document.getElementById("site-header"),v=window.matchMedia("(prefers-reduced-motion: reduce)"),y=window.matchMedia("(max-width: 980px)"),m=window.matchMedia("(max-width: 1000px)"),_=d.querySelector(".hero-right"),C=.65,$=1,A=1.15,B=.86;let S=(()=>{const n=Number.parseFloat(getComputedStyle(g).getPropertyValue("--hero-text-scale"));return Number.isFinite(n)&&n>0?n:1})(),M=null,E=!1,r=!1;const l=n=>{const p=(_?getComputedStyle(_).display!=="none"&&!m.matches:!m.matches)?$:A;return n?p:Math.min(1,p)},t=(n,u)=>{const p=l(u),x=Math.min(C,p);return Math.max(x,Math.min(p,n))},e=()=>{if(w)return w.offsetHeight;const n=getComputedStyle(document.documentElement).getPropertyValue("--header-h"),u=Number.parseFloat(n);return Number.isFinite(u)?u:64},o=()=>window.visualViewport?window.visualViewport.height:typeof window.innerHeight=="number"?window.innerHeight:document.documentElement.clientHeight,i=()=>{const n=b?.offsetHeight??0,u=n?n+56:96;return Math.max(0,o()-e()-u)},c=()=>{const n=i();if(!n)return;const u=g.scrollHeight;if(!u)return;const p=u/(S||1);if(!p)return;const x=!y.matches,k=t(n/p*B,x);Math.abs(k-S)<.02||(S=k,E=!0,g.style.setProperty("--hero-text-scale",k.toFixed(3)),requestAnimationFrame(()=>{E=!1,r&&(r=!1,a())}))},a=()=>{if(!v.matches){if(E){r=!0;return}M===null&&(M=requestAnimationFrame(()=>{M=null,c()}))}};a();const s=()=>a();window.addEventListener("resize",s);const h=n=>{n&&(typeof n.addEventListener=="function"?n.addEventListener("change",s):typeof n.addListener=="function"&&n.addListener(s))};h(y),h(v),h(m);const f=new ResizeObserver(()=>a());f.observe(d),f.observe(g),_&&f.observe(_)})();F();
