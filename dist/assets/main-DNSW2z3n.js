import{r as z,e as F}from"./layout-EUP2m4Y0.js";const R=document.querySelector("#app");R.innerHTML=z("home",`
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
`,"home-main");document.body.classList.remove("no-body-scroll");document.documentElement.classList.remove("no-root-scroll");const I=()=>{const d=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight,b=d>=1e3&&u<=850;document.body.classList.toggle("home-hero-lock",b);const w=d>=1e3&&u>850;document.body.classList.toggle("home-hero-tall",w)};I();window.addEventListener("resize",I,{passive:!0});(function(){const d=document.getElementById("flow-svg"),u=document.getElementById("flow-figure");if(!d||!u)return;const b=u.parentElement;if(!b)return;let w=null,f=null;const y=1200,g=()=>{const r=document.createElement("div");r.style.position="absolute",r.style.left="-99999px",r.style.top="-99999px",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center";const l=u.cloneNode(!0);l.removeAttribute("id"),l.querySelectorAll("[id]").forEach(e=>e.removeAttribute("id")),l.style.width="auto",l.style.height="auto",l.style.transform="none",l.style.transformOrigin="top center",l.style.setProperty("--flow-vw",`${y/100}px`),r.appendChild(l),document.body.appendChild(r);const t=l.getBoundingClientRect();return document.body.removeChild(r),!t.width||!t.height?null:t},A=()=>{if(w!==null&&f!==null)return;const r=g();r&&(w=r.width,f=r.height,u.style.width=`${w}px`,u.style.height=`${f}px`,b.style.display="flex",b.style.alignItems="center",b.style.justifyContent="center",b.style.marginInline="auto",b.style.maxWidth=`${w}px`)},$=()=>{if(A(),w===null||f===null)return;const r=window.innerWidth||document.documentElement.clientWidth||w;let l=66;r<=1e3&&(l=76),r<=650&&(l=80),r<=400&&(l=90),b.style.width=`${l}vw`;const a=(b.getBoundingClientRect().width||w)/w,i=f*a;b.style.height=`${i}px`,u.style.transformOrigin="top center",u.style.transform=`scale(${a})`},_=r=>{switch(r){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(r=>{const l=r.getAttribute("data-id")||"",t=r.querySelector(".icon");t&&(t.innerHTML=_(l))});const C=(r,l,t=2)=>{const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d",r),e.setAttribute("fill","none"),e.setAttribute("stroke",l),e.setAttribute("stroke-width",String(t)),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("shape-rendering","geometricPrecision"),e},B=r=>getComputedStyle(document.documentElement).getPropertyValue(r===1?"--ds-g1":r===2?"--ds-g2":r===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",S=["#4F064F","#821846","#9E2235","#AF3323"],M=()=>{for($();d.firstChild;)d.removeChild(d.firstChild);const r=Array.from(document.querySelectorAll(".flow-left .flow-node")),l=document.getElementById("flow-model"),t=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!l)return;const e=u.getBoundingClientRect();d.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`);const a=l.getBoundingClientRect(),i=a.left-e.left,c=a.right-e.left,s=a.top-e.top+a.height/2,n=(o,m,p,x)=>{const k=Math.max(32,Math.min(120,Math.abs(p-o)*.35)),L=o+k,j=m,H=p-k;return`M ${o} ${m} C ${L} ${j}, ${H} ${x}, ${p} ${x}`},h=window.innerWidth||document.documentElement.clientWidth||e.width;let v=2;h<=1e3&&(v=1.7),h<=720&&(v=1.4),h<=520&&(v=1.1),r.forEach(o=>{const m=Number(o.getAttribute("data-group")||"1"),p=o.getBoundingClientRect(),x=p.right-e.left,k=p.top-e.top+p.height/2,H=n(x,k,i,s);d.appendChild(C(H,B(m),v))}),t.forEach((o,m)=>{const p=o.getBoundingClientRect(),x=c,k=s,L=p.left-e.left,j=p.top-e.top+p.height/2,H=n(x,k,L,j);d.appendChild(C(H,S[m]||S[0],v))})};new ResizeObserver(()=>M()).observe(u),window.addEventListener("resize",M,{passive:!0}),setTimeout(M,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const d=document.getElementById("config-panel"),u=document.getElementById("gen-code");if(!d||!u)return;const b=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],w={social:["social_networks"],chip:["chip_design"],circuits:["electronic_circuits"],sat:["sat_solving"],co:["combinatorial_optimization"],ar:["algo_res_easy","algo_res_medium","algo_res_hard"],weather:["era5_64x32","era5_240x121"]},f=new Set,y=Object.fromEntries(Object.keys(w).map(t=>[t,new Set])),g=new Set,A=t=>{switch(t){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},$=t=>{switch(t){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},_=t=>{const e=f.has(t),a=w[t]||[],i=y[t]||new Set;return`<div class="side-sub">${a.map(s=>{const n=e&&i.has(s)?"checked":"",h=`sub_${t}_${s}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row">
          <input id="${h}" type="checkbox" data-sub-ds="${t}" data-sub="${s}" ${n}/>
          <label class="sub-name" for="${h}">
            <span class="sub-text">${s}</span>
          </label>
        </div>`}).join("")}</div>`},C=()=>{const t='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',e=b.map(s=>{const n=f.has(s.id),h=g.has(s.id),v=(w[s.id]||[]).length>0,o=v?_(s.id):"";return`
          <div class="ds-item" data-ds="${s.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${s.id}" ${n?"checked":""}/></label>
              <span class="ds-icon" style="color:${$(s.id)}">${A(s.id)}</span>
              <span class="ds-name">${s.name}</span>
              ${v?`<button class="ds-disclose" data-ds-toggle="${s.id}" aria-expanded="${h}" aria-label="Toggle options">${t}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${v?`<div class="ds-subwrap" data-open="${h}"><div class="ds-sub">${o}</div></div>`:""}
          </div>`}).join(""),a=document.getElementById("opt-pre-filter"),i=document.getElementById("opt-pre-transform"),c=document.getElementById("opt-transform");d.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${t}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${a&&a.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${i&&i.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${c&&c.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${e}</div>
        </div>`},B=()=>Array.from(f.values()).flatMap(e=>Array.from(y[e]||[])),S=()=>{const t=B(),e=t.length!==1,a=!!document.getElementById("opt-pre-filter")?.checked,i=!!document.getElementById("opt-pre-transform")?.checked,c=!!document.getElementById("opt-transform")?.checked,s=[];if(s.push("import graphbench"),s.push(""),s.push("model = ...  # your torch model"),e){const n=t.length?`[
  `+t.map(h=>`'${h}'`).join(`,
  `)+`
]`:"[]";s.push(`dataset_name = ${n}`)}else{const n=t[0]?`'${t[0]}'`:"'social_networks'";s.push(`dataset_name = ${n}`)}if(a&&s.push("pre_filter = ...  # optional: PyG pre-filter matrix"),i&&s.push("pre_transform = ...  # optional: transform applied at load-time"),c&&s.push("transform = ...  # optional: transform applied at runtime"),s.push(""),e){const n=[];a&&n.push("pre_filter=pre_filter"),i&&n.push("pre_transform=pre_transform"),c&&n.push("transform=transform");const h=n.length?", "+n.join(", "):"";s.push(`datasets = [graphbench.loader(name${h}) for name in dataset_name]`),s.push("opt_models = [graphbench.optimize(model, d['train']) for d in datasets]"),s.push("results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]")}else{const n=[];a&&n.push("pre_filter=pre_filter"),i&&n.push("pre_transform=pre_transform"),c&&n.push("transform=transform");const h=n.length?", "+n.join(", "):"";s.push(`dataset = graphbench.loader(dataset_name${h})`),s.push("opt_model = graphbench.optimize(model, dataset['train'])"),s.push("results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])")}return s.join(`
`)},M=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),E=t=>{let e=M(t);return e=e.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),e=e.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),e=e.replace(/\b(loader|optimize|evaluator)\b/g,'<span class="fn">$1</span>'),e=e.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g,'<span class="var">$1</span>'),e=e.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),e=e.replace(/#([^\n]*)/g,(a,i)=>'<span class="com">#'+String(i).replace(/<[^>]+>/g,"")+"</span>"),e=e.replace(/<span class=\"com\">#([^<]*)\bgraphbench\b([^<]*)<\/span>/g,'<span class="com">#$1</span><span class="ns">graphbench</span><span class="com">$2</span>'),e},r=()=>{const t=S(),e=E(t);u.innerHTML=e;const a=document.querySelector(".builder-copy-btn");a&&a.setAttribute("data-copy",t)},l=()=>{d.querySelectorAll(".ds-item").forEach(e=>{const a=e.getAttribute("data-ds")||"",i=e.querySelector(".ds-subwrap"),c=e.querySelector("[data-ds-toggle]"),s=g.has(a);i&&i.setAttribute("data-open",s?"true":"false"),c&&c.setAttribute("aria-expanded",s.toString());const n=e.querySelectorAll("input[data-sub]"),h=f.has(a),v=y[a]||new Set;n.forEach(m=>{const p=m.getAttribute("data-sub")||"";m.checked=h&&v.has(p)});const o=e.querySelector("input[data-select]");o&&o.getAttribute("data-select")===a&&(o.checked=f.has(a))})};d.addEventListener("change",t=>{const e=t.target;if(!e)return;const a=e.getAttribute("data-select"),i=e.getAttribute("data-sub-ds"),c=e.getAttribute("data-sub"),s=e.getAttribute("id");if(a){e.checked?(f.add(a),y[a]=new Set(w[a]||[]),g.clear(),g.add(a)):(f.delete(a),y[a].clear(),g.delete(a)),l(),r();return}if(i&&c){const n=y[i]||new Set;e.checked?(n.add(c),f.add(i)):(n.delete(c),n.size===0&&f.delete(i)),y[i]=n,g.add(i),l(),r();return}if(s==="opt-pre-filter"||s==="opt-pre-transform"||s==="opt-transform"){r();return}}),d.addEventListener("click",t=>{const e=t.target.closest("button");if(!e||e.getAttribute("data-mode"))return;const i=t.target.closest("[data-coll-toggle]");if(i){const s=i.getAttribute("data-coll-toggle")||"",n=document.getElementById(s);if(n){const h=n.getAttribute("data-open")==="true";n.setAttribute("data-open",h?"false":"true");const v=n.querySelector(".head [data-coll-toggle]");v&&v.setAttribute("aria-expanded",(!h).toString())}return}const c=e.getAttribute("data-ds-toggle");if(c){!g.has(c)?(g.clear(),g.add(c)):g.delete(c),l();return}}),d.addEventListener("click",t=>{const e=t.target.closest(".side-row[data-dsrow]");if(!e)return;const a=t.target.closest('input[type="checkbox"]'),i=t.target.closest("[data-ds-toggle]");if(a||i)return;const s=e.closest(".ds-item")?.getAttribute("data-ds")||"";if(!s)return;!g.has(s)?(g.clear(),g.add(s)):g.delete(s),l()}),d.addEventListener("click",t=>{const e=t.target.closest("#model-coll");if(!e)return;const a=t.target.closest("#model-coll .head"),i=t.target.closest("#model-coll [data-coll-toggle]"),c=t.target.closest("#model-coll .body input, #model-coll .body button, #model-coll .body label");if(a||!c&&!i&&t.target.closest("#model-coll")){const s=e.getAttribute("data-open")==="true";e.setAttribute("data-open",s?"false":"true");const n=e.querySelector(".head [data-coll-toggle]");n&&n.setAttribute("aria-expanded",(!s).toString())}}),C(),r()})();(()=>{const d=document.querySelector(".hero.hero-primary"),u=d?.querySelector(".hero-left");if(!d||!u)return;const b=d.querySelector(".arrow-btn.arrow-down"),w=document.getElementById("site-header"),f=window.matchMedia("(prefers-reduced-motion: reduce)"),y=window.matchMedia("(max-width: 980px)"),g=window.matchMedia("(max-width: 1000px)"),A=d.querySelector(".hero-right"),$=.65,_=1,C=1.15,B=.86;let S=(()=>{const o=Number.parseFloat(getComputedStyle(u).getPropertyValue("--hero-text-scale"));return Number.isFinite(o)&&o>0?o:1})(),M=null,E=!1,r=!1;const l=o=>{const p=(A?getComputedStyle(A).display!=="none"&&!g.matches:!g.matches)?_:C;return o?p:Math.min(1,p)},t=(o,m)=>{const p=l(m),x=Math.min($,p);return Math.max(x,Math.min(p,o))},e=()=>{if(w)return w.offsetHeight;const o=getComputedStyle(document.documentElement).getPropertyValue("--header-h"),m=Number.parseFloat(o);return Number.isFinite(m)?m:64},a=()=>window.visualViewport?window.visualViewport.height:typeof window.innerHeight=="number"?window.innerHeight:document.documentElement.clientHeight,i=()=>{const o=b?.offsetHeight??0,m=o?o+56:96;return Math.max(0,a()-e()-m)},c=()=>{const o=i();if(!o)return;const m=u.scrollHeight;if(!m)return;const p=m/(S||1);if(!p)return;const x=!y.matches,k=t(o/p*B,x);Math.abs(k-S)<.02||(S=k,E=!0,u.style.setProperty("--hero-text-scale",k.toFixed(3)),requestAnimationFrame(()=>{E=!1,r&&(r=!1,s())}))},s=()=>{if(!f.matches){if(E){r=!0;return}M===null&&(M=requestAnimationFrame(()=>{M=null,c()}))}};s();const n=()=>s();window.addEventListener("resize",n);const h=o=>{o&&(typeof o.addEventListener=="function"?o.addEventListener("change",n):typeof o.addListener=="function"&&o.addListener(n))};h(y),h(f),h(g);const v=new ResizeObserver(()=>s());v.observe(d),v.observe(u),A&&v.observe(A)})();F();
