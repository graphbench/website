import{r as l,e as c}from"./layout-Dl1a0lmI.js";const p=["@misc{stoll2025graphbenchnextgenerationgraphlearning,","      title={GraphBench: Next-generation graph learning benchmarking},","      author={Timo Stoll and Chendi Qian and Ben Finkelshtein and Ali Parviz and Darius Weber and Fabrizio Frasca and Hadar Shavit and Antoine Siraudin and Arman Mielke and Marie Anastacio and Erik Müller and Maya Bechler-Speicher and Michael Bronstein and Mikhail Galkin and Holger Hoos and Mathias Niepert and Bryan Perozzi and Jan Tönshoff and Christopher Morris},","      year={2025},","      eprint={2512.04475},","      archivePrefix={arXiv},","      primaryClass={cs.LG},","      url={https://arxiv.org/abs/2512.04475},","}"],n=p.join(`
`),i=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=i(n),h=i(n).replace(/"/g,"&quot;").replace(/\n/g,"&#10;"),m=document.querySelector("#app");m.innerHTML=l("quickstart",`
  <section class="page-header tight">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 18 12 8 19"/></svg>
        </span>
        <h2>Get Started</h2>
      </div>
      <p class="lead">Install GraphBench, set up your experiment, optimize your model, and evaluate — in just a few lines.</p>
    </div>
  </section>

  <section class="container qs-main">
    <div class="grid">
      <div class="col-12 section-surface prose qs-prose">
        <ol class="steps">
          <li class="step">
            <div class="num">1</div>
            <div class="body">
              <h3>Install</h3>
              <p>We recommend installing with Python's package manager.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="pip install graphbench-lib" aria-label="Copy pip install command" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                  <pre><code class="code-manual">pip install graphbench-lib</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">2</div>
            <div class="body">
              <h3>Setup</h3>
              <p>Choose your components. You can plug in any PyTorch model and optional PyG-style transforms.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="import graphbench

model = ...  # your torch model
dataset_name = ...  # name of the task or list of tasks
pre_filter = ...  # optional: PyTorch Geometric filter matrix
pre_transform = ...  # optional: PyG-like transform during loading
transform = ...  # optional: PyG-like transform at computation time" aria-label="Copy setup snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="kw">import</span> graphbench

<span class="var">model</span> = <span class="com"># your torch model</span>
<span class="var">dataset_name</span> = <span class="com"># name of the task or list of tasks</span>
<span class="var">pre_filter</span> = <span class="com"># optional: PyTorch Geometric filter matrix</span>
<span class="var">pre_transform</span> = <span class="com"># optional: PyG-like transform during loading</span>
<span class="var">transform</span> = <span class="com"># optional: PyG-like transform at computation time</span></code></pre>
                </div>
              </div>

              <button type="button" class="qs-ds-toggle" aria-expanded="false" aria-controls="qs-ds-panel">
                <span class="qs-ds-toggle-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
                <span class="qs-ds-toggle-text">Show datasets</span>
              </button>

              <div id="qs-ds-panel" class="qs-ds-panel" hidden>
                <div class="card qs-ds-card">
                  <div class="qs-ds-card-title">Available dataset names</div>
                  <p class="qs-ds-card-help">Use these values for <code>dataset_name</code>. When choosing a grouped name, all sub-datasets for that group are loaded together.</p>
                  <div class="qs-ds-grid">
                    <div class="qs-ds-domain accent-g1">
                      <span class="qs-ds-domain-title">Social Networks</span>
                      <pre><code class="code-manual qs-ds-code">socialnetwork
├── bluesky_quotes
├── bluesky_replies
└── bluesky_retweets</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g2">
                      <span class="qs-ds-domain-title">Chip Design</span>
                      <pre><code class="code-manual qs-ds-code">chipdesign</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g2">
                      <span class="qs-ds-domain-title">Electronic Circuits</span>
                      <pre><code class="code-manual qs-ds-code">electronic_circuits
├── electronic_circuits_5_eff
├── electronic_circuits_5_vout
├── electronic_circuits_7_eff
├── electronic_circuits_7_vout
├── electronic_circuits_10_eff
└── electronic_circuits_10_vout</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g3">
                      <span class="qs-ds-domain-title">SAT Solving</span>
                      <pre><code class="code-manual qs-ds-code">sat
├── sat_lcg_as
├── sat_lcg_epm
├── sat_vcg_as
├── sat_vcg_epm
├── sat_vg_as
└── sat_vg_epm</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g3">
                      <span class="qs-ds-domain-title">Combinatorial Optimization</span>
                      <pre><code class="code-manual qs-ds-code">co
├── co_ba_large
├── co_ba_small
├── co_er_large
├── co_er_small
├── co_rb_large
└── co_rb_small</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g3">
                      <span class="qs-ds-domain-title">Algorithmic Reasoning</span>
                      <pre><code class="code-manual qs-ds-code">algorithmic_reasoning_easy
├── bipartitematching_easy
├── bridges_easy
├── mst_easy
├── steinertree_easy
├── maxclique_easy
├── flow_easy
└── topologicalorder_easy

algorithmic_reasoning_medium
├── bipartitematching_medium
├── bridges_medium
├── mst_medium
├── steinertree_medium
├── maxclique_medium
├── flow_medium
└── topologicalorder_medium

algorithmic_reasoning_hard
├── bipartitematching_hard
├── bridges_hard
├── mst_hard
├── steinertree_hard
├── maxclique_hard
├── flow_hard
└── topologicalorder_hard</code></pre>
                    </div>

                    <div class="qs-ds-domain accent-g4">
                      <span class="qs-ds-domain-title">Weather Forecasting</span>
                      <pre><code class="code-manual qs-ds-code">weather</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">3</div>
            <div class="body">
              <h3>Load data</h3>
              <p>Create your dataset and splits through the Loader, applying optional transforms when needed.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="Loader = graphbench.Loader(dataset_name, pre_filter, pre_transform, transform)
dataset = Loader.load()" aria-label="Copy load snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">Loader</span> = graphbench.<span class="fn">Loader</span>(<span class="var">dataset_name</span>, <span class="var">pre_filter</span>, <span class="var">pre_transform</span>, <span class="var">transform</span>)
<span class="var">dataset</span> = <span class="var">Loader</span>.<span class="fn">load</span>()</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">4</div>
            <div class="body">
              <h3>Optimize</h3>
              <p>Automatically tune training hyperparameters with the Optimizer.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="Optimizer = graphbench.Optimizer(optimization_args, training_method)
opt_model = Optimizer.optimize()" aria-label="Copy optimization snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">Optimizer</span> = graphbench.<span class="fn">Optimizer</span>(<span class="var">optimization_args</span>, <span class="var">training_method</span>)
<span class="var">opt_model</span> = <span class="var">Optimizer</span>.<span class="fn">optimize</span>()</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">5</div>
            <div class="body">
              <h3>Evaluate</h3>
              <p>Use the Evaluator with your predictions and targets to get standardized metrics.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="Evaluator = graphbench.Evaluator(dataset_name)
results = Evaluator.evaluate(y_true, y_pred)" aria-label="Copy evaluation snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">Evaluator</span> = graphbench.<span class="fn">Evaluator</span>(<span class="var">dataset_name</span>)
<span class="var">results</span> = <span class="var">Evaluator</span>.<span class="fn">evaluate</span>(<span class="var">y_true</span>, <span class="var">y_pred</span>)</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">6</div>
            <div class="body">
              <h3>All together</h3>
              <p>Run the entire GraphBench workflow with just a few lines.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="import graphbench

model = ...  # your torch model
dataset_name = ...  # name of the task or list of tasks
pre_filter = ...  # optional: PyTorch Geometric filter matrix
pre_transform = ...  # optional: PyG-like transform during loading
transform = ...  # optional: PyG-like transform at computation time

# Load a GraphBench dataset and get splits
Loader = graphbench.Loader(dataset_name, pre_filter, pre_transform, transform)
dataset = Loader.load()

# Optimize your model
Optimizer = graphbench.Optimizer(optimization_args, training_method)
opt_model = Optimizer.optimize()

# Use GraphBench evaluator with targets y_true and predictions y_pred
Evaluator = graphbench.Evaluator(dataset_name)
results = Evaluator.evaluate(y_true, y_pred)" aria-label="Copy full example" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="kw">import</span> graphbench

<span class="var">model</span> = <span class="com"># your torch model</span>
<span class="var">dataset_name</span> = <span class="com"># name of the task or list of tasks</span>
<span class="var">pre_filter</span> = <span class="com"># optional: PyTorch Geometric filter matrix</span>
<span class="var">pre_transform</span> = <span class="com"># optional: PyG-like transform during loading</span>
<span class="var">transform</span> = <span class="com"># optional: PyG-like transform at computation time</span>

<span class="com"># Load a GraphBench dataset and get splits</span>
<span class="var">Loader</span> = graphbench.<span class="fn">Loader</span>(<span class="var">dataset_name</span>, <span class="var">pre_filter</span>, <span class="var">pre_transform</span>, <span class="var">transform</span>)
<span class="var">dataset</span> = <span class="var">Loader</span>.<span class="fn">load</span>()

<span class="com"># Optimize your model</span>
<span class="var">Optimizer</span> = graphbench.<span class="fn">Optimizer</span>(<span class="var">optimization_args</span>, <span class="var">training_method</span>)
<span class="var">opt_model</span> = <span class="var">Optimizer</span>.<span class="fn">optimize</span>()

<span class="com"># Use GraphBench evaluator with targets y_true and predictions y_pred</span>
<span class="var">Evaluator</span> = graphbench.<span class="fn">Evaluator</span>(<span class="var">dataset_name</span>)
<span class="var">results</span> = <span class="var">Evaluator</span>.<span class="fn">evaluate</span>(<span class="var">y_true</span>, <span class="var">y_pred</span>)</code></pre>
                </div>
              </div>
            </div>
          </li>

          <!-- Builder CTA -->
          <li class="step">
            <div class="num">→</div>
            <div class="body">
              <h3>Assemble your custom GraphCast code</h3>
              <p>Use our interactive builder to configure datasets and generate your full GraphCast script.</p>
              <div style="text-align:center; margin:.6rem 0 0;">
                <a class="btn btn-primary" href="./index.html#builder" title="Open the code builder" style="border:none; color:#fff;">Let's Go!</a>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">★</div>
            <div class="body">
              <h3>Cite GraphBench</h3>
              <p>If you use GraphBench in your work, please cite our paper (Bibtex below).</p>
              <div class="cite-box code-wrap" role="region" aria-label="BibTeX citation">
                <button class="copy-btn" data-copy="${h}" aria-label="Copy BibTeX citation" title="Copy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
                <pre><code class="cite-code code-manual">${d}</code></pre>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
`);c();(function(){const a=document.querySelector(".qs-ds-toggle"),s=document.getElementById("qs-ds-panel");if(!a||!s)return;const e=a.querySelector(".qs-ds-toggle-text"),o=r=>{a.setAttribute("aria-expanded",r?"true":"false"),a.dataset.open=r?"true":"false",r?(s.setAttribute("data-open","true"),s.removeAttribute("hidden"),e&&(e.textContent="Hide datasets")):(s.removeAttribute("data-open"),s.setAttribute("hidden",""),e&&(e.textContent="Show datasets"))};let t=!1;a.addEventListener("click",()=>{t=!t,o(t)})})();
