import{_ as i,r as a,o as r,c as l,e,a as n,d as s,b as o}from"./app.328098f5.js";const c={},d=s('<h1 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h1> <p>Core is the module providing main Tiny Carousel functionalities and API. It exports the TinyCarousel class.</p> <h2 id="styling" tabindex="-1"><a class="header-anchor" href="#styling" aria-hidden="true">#</a> Styling</h2> <p>Styling can be imported via:</p> <blockquote><p>Sass: <code>@frsource/tiny-carousel-core/src/index.scss</code></p> <p>CSS: <code>@frsource/tiny-carousel-core/dist/index.css</code></p></blockquote> ',10),u=o("When importing Sass source file you can configure "),h={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},p=o("the variables"),g=o(":"),f=s(` <ul><li><p><strong>Sass variables:</strong></p> <ul><li><code>{string} $frs-tc-class-name = &quot;frs-tc&quot;</code></li> <li><code>{string} $frs-tc-class-name-overflow = &quot;frs-tc--o&quot;</code></li> <li><code>{string} $frs-tc-item-class-name = &quot;frs-tc-item&quot;</code></li></ul></li> <li><p><strong>Details:</strong></p> <ul><li><code>$frs-tc-class-name</code> is a class name added to the carousel element</li> <li><code>$frs-tc-class-name-overflow</code> is a class name added to the carousel element when <a href="#config">overflow option</a> is set to <code>true</code></li> <li><code>$frs-tc-item-class-name</code> is a class name added to the carousel items (slides)</li></ul></li></ul> <div class="custom-container tip"><p class="custom-container-title">TIP</p> <p>Every <code>SCSS variable</code> should be changed together with a corresponding <a href="#config">Config</a> option.</p></div> <ul><li><strong>Example:</strong></li></ul> <div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$frs-tc-class-name</span></span><span class="token punctuation">:</span> <span class="token string">&quot;some-custom-classname&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;~@frsource/tiny-carousel-core&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"TIP",-1),b=o(),v=o("This packages uses "),y={href:"https://www.npmjs.com/package/@frsource/frs-hide-scrollbar",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"@frsource/frs-hide-scrollbar",-1),x=o(" to hide native scrollbars. So, when importing the core Sass styling you have a possibility to set "),T={href:"https://www.frsource.org/FRS-hide-scrollbar/usage",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"@frsource/frs-hide-scrollbar",-1),k=o(" configuration"),S=o(` beforehand.
For example, this might be useful to change the default `),q=e("code",null,"frs-hide-scroll",-1),N=o(" class name:"),A=s(` <div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$frs-hide-scroll-classname</span></span><span class="token punctuation">:</span> <span class="token string">&quot;your-new-hide-scroll-classname&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&#39;~@frsource/tiny-carousel-core&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E=s(` <h2 id="global-api" tabindex="-1"><a class="header-anchor" href="#global-api" aria-hidden="true">#</a> Global API</h2> <h3 id="updatedefaultconfig-config" tabindex="-1"><a class="header-anchor" href="#updatedefaultconfig-config" aria-hidden="true">#</a> updateDefaultConfig( config )</h3> <ul><li><p><strong>Arguments:</strong></p> <ul><li><a href="#config"><code>{Config} config</code></a></li></ul></li> <li><p><strong>Returns:</strong> <code>undefined</code></p></li> <li><p><strong>Usage:</strong></p> <p>Method used for changing the default configuration of the whole TinyCarousel module. Every instance created afterwards will use updated default configuration. The argument <code>config</code> is merged with previous configuration which means that to remove property you\u2019d need to pass it explicitly set to <code>undefined</code>.</p></li> <li><p><strong>See also:</strong> <a href="#config"><code>Config</code> data type description</a></p></li></ul> <h3 id="defaultconfig" tabindex="-1"><a class="header-anchor" href="#defaultconfig" aria-hidden="true">#</a> defaultConfig</h3> <ul><li><p><strong>Type:</strong> <a href="#config"><code>Config</code></a></p></li> <li><p><strong>Read only</strong></p></li> <li><p><strong>Details:</strong></p> <p>Property returning copy of the default configuration object.</p></li> <li><p><strong>See also:</strong> <a href="#config"><code>Config</code> data type description</a></p></li></ul> <h3 id="new-tinycarousel-carouselelement-config" tabindex="-1"><a class="header-anchor" href="#new-tinycarousel-carouselelement-config" aria-hidden="true">#</a> new TinyCarousel( carouselElement, config )</h3> <ul><li><p><strong>Arguments:</strong></p> <ul><li><code>{HTMLElement} carouselElement</code></li> <li><a href="#config"><code>{Config} config &lt;optional&gt;</code></a></li></ul></li> <li><p><strong>Returns:</strong> New, uninitialized Tiny Carousel instance</p></li> <li><p><strong>Usage:</strong></p> <p>Carousel wrapper element should be passed ad <code>carouselElement</code>. Every of the <code>config</code> properties (and the <code>config</code> object itself) are optional.</p></li> <li><p><strong>See also:</strong> <a href="#config"><code>Config</code> data type description</a></p></li></ul> <h2 id="instance-properties" tabindex="-1"><a class="header-anchor" href="#instance-properties" aria-hidden="true">#</a> Instance properties</h2> <h3 id="carousel-config" tabindex="-1"><a class="header-anchor" href="#carousel-config" aria-hidden="true">#</a> carousel.config</h3> <ul><li><p><strong>Type:</strong> <a href="#config"><code>Config</code></a></p></li> <li><p><strong>Details:</strong></p> <p>Configuration object of the Tiny Carousel instance.</p></li> <li><p><strong>See also:</strong> <a href="#config"><code>Config</code> data type description</a></p></li></ul> <h3 id="carousel-carouselelement" tabindex="-1"><a class="header-anchor" href="#carousel-carouselelement" aria-hidden="true">#</a> carousel.carouselElement</h3> <ul><li><p><strong>Type:</strong> <code>HTMLElement</code></p></li> <li><p><strong>Details:</strong></p> <p>Main wrapper element of the carousel.</p></li></ul> <h3 id="carousel-active" tabindex="-1"><a class="header-anchor" href="#carousel-active" aria-hidden="true">#</a> carousel.active</h3> <ul><li><p><strong>Type:</strong> <code>number</code></p></li> <li><p><strong>Read only</strong></p></li> <li><p><strong>Details:</strong></p> <p>Active slide index.</p></li></ul> <h2 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods" aria-hidden="true">#</a> Instance methods</h2> <h3 id="carousel-use" tabindex="-1"><a class="header-anchor" href="#carousel-use" aria-hidden="true">#</a> carousel.use</h3> <ul><li><p><strong>Arguments:</strong></p> <ul><li><a href="#plugin-definition"><code>{PluginDefinition} pluginDefinition</code></a></li> <li><code>{unknown[]} ...args &lt;optional&gt;</code></li></ul></li> <li><p><strong>Returns:</strong> <code>this</code> - this TinyCarousel instance (for chaining purposes)</p></li> <li><p><strong>Usage:</strong></p> <p>Method used to setup any of the Tiny Carousel plugins. Number of arguments and their types are dependent on what plugin is being installed. For details, head to the documentation of the plugin you\u2019d like to use.</p></li></ul> <h3 id="carousel-init" tabindex="-1"><a class="header-anchor" href="#carousel-init" aria-hidden="true">#</a> carousel.init</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> <code>this</code> - this TinyCarousel instance (for chaining purposes)</p></li> <li><p><strong>Usage:</strong></p> <p>Initializes a TinyCarousel instance. If no <code>config.items</code> were set yet the library will fallback to the value returned by <a href="#carousel-findpossibleitems"><code>carousel.findPossibleItems</code> method</a>.
Also, this method adds class names to the carousel wrapper and carousel items HTML elements and sets the correct active slide based on <code>config.active</code> variable.</p></li></ul> <h3 id="carousel-destroy" tabindex="-1"><a class="header-anchor" href="#carousel-destroy" aria-hidden="true">#</a> carousel.destroy</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> <code>this</code> - this TinyCarousel instance (for chaining purposes)</p></li> <li><p><strong>Usage:</strong></p> <p>Deregisters every event handler bound by the carousel and its plugins. Use this method before you\u2019d like to remove the carousel or to reinitialize it (together with <a href="#carousel-init"><code>carousel.init</code> method</a>).</p></li></ul> <h3 id="carousel-goto" tabindex="-1"><a class="header-anchor" href="#carousel-goto" aria-hidden="true">#</a> carousel.goTo</h3> <ul><li><p><strong>Arguments:</strong></p> <ul><li><code>{number} index</code></li></ul></li> <li><p><strong>Returns:</strong> <code>this</code> - this TinyCarousel instance (for chaining purposes)</p></li> <li><p><strong>Usage:</strong></p> <p>Method which allows to change the current slide.
<code>index</code> parameter should be <strong>any</strong> numeric value (even negated).</p> <ul><li>For <code>index</code> values less than 0, the new active slide is counted from the end of items array. For example: when there are 3 slides and <code>carousel.goTo(-1)</code> is called, the new active index will be 3 - because that\u2019s the last index in the <a href="#config"><code>config.items</code> array</a></li> <li>For <code>index</code> values bigger than the number of items or smaller than the negated number of items, number of items will be subtracted/added to the <code>index</code> value. Whole operation will be repeated until <code>index</code> is within the range from negated items array length to items array length</li></ul></li></ul> <h3 id="carousel-next" tabindex="-1"><a class="header-anchor" href="#carousel-next" aria-hidden="true">#</a> carousel.next</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> same as <a href="#carousel-goto"><code>goTo</code> method</a></p></li> <li><p><strong>Usage:</strong></p> <p>Syntax sugar for changing the active slide to the next one. Same as <code>carousel.goTo(carousel.active + 1)</code>.</p></li></ul> <h3 id="carousel-prev" tabindex="-1"><a class="header-anchor" href="#carousel-prev" aria-hidden="true">#</a> carousel.prev</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> same as <a href="#carousel-goto"><code>goTo</code> method</a>. Additionally, returns <code>false</code> when <a href="#carousel-active"><code>carousel.active</code></a> equals 0</p></li> <li><p><strong>Usage:</strong></p> <p>Syntax sugar for changing the active slide to the previous one. Same as <code>carousel.goTo(carousel.active - 1)</code>.</p></li></ul> <h3 id="carousel-resetactive" tabindex="-1"><a class="header-anchor" href="#carousel-resetactive" aria-hidden="true">#</a> carousel.resetActive</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> <code>undefined</code></p></li> <li><p><strong>Usage:</strong></p> <p><strong>Use with caution!</strong> This method is used for flushing of the cached <a href="#carousel-active"><code>carousel.active</code></a> value. It should be used whenever you need to force active index recalculation during next carousel operation.</p></li></ul> `,59),I={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1),D=o(),U=o("To recalculate "),M=e("a",{href:"#carousel-active"},[e("code",null,"carousel.active")],-1),P=o(" in place, call "),$=e("code",null,"carousel.resetActive",-1),F=o(" and then try to access "),L=e("a",{href:"#carousel-active"},[e("code",null,"carousel.active")],-1),z=o(" property. "),H={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",target:"_blank",rel:"noopener noreferrer"},j=o("Getter"),V=o(" will provide you with new value."),W=s(' <h3 id="carousel-findpossibleitems" tabindex="-1"><a class="header-anchor" href="#carousel-findpossibleitems" aria-hidden="true">#</a> carousel.findPossibleItems</h3> <ul><li><p><strong>Arguments:</strong> None</p></li> <li><p><strong>Returns:</strong> <code>HTMLElement[]</code> - an array of the possible slides. The return value is:</p> <ul><li>The <code>carouselElement</code> children which have <code>config.itemClassName</code> class name set,</li> <li>(if the step above doesn\u2019t find any item) all <code>carouselElement</code> children</li></ul></li> <li><p><strong>Usage:</strong></p> <p>Method which finds possible carousel items. Called as a item-gathering fallback by <a href="#new-tinycarousel-carouselelement-config">the constructor</a>.</p></li></ul> <h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2> <h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3> <ul><li><p><strong>Properties:</strong></p> <ul><li><code>{number} active = 0</code></li> <li><code>{string} className = &quot;frs-tc&quot;</code></li> <li><code>{string} classNameOverflow = &quot;frs-tc--o&quot;</code></li> <li><code>{string} itemClassName = &quot;frs-tc-item&quot;</code></li> <li><code>{string} hideScrollClassName = &quot;frs-hide-scroll&quot;</code></li> <li><code>{boolean} overflow = true</code></li> <li><code>HTMLElement[] items = []</code></li></ul></li> <li><p><strong>Details:</strong></p> <p>Data type which holds most of the Tiny Carousel configuration. To be changed together with <code>SCSS variables</code> - more in <a href="#styling">the styling section</a>.</p> <ul><li><code>active</code> index of the item which should be activated during carousel initialization</li> <li><code>overflow</code> allows toggling the overflow behavior on/off</li></ul></li></ul> ',11),B={class:"custom-container tip"},G=e("p",{class:"custom-container-title"},"TIP",-1),O=o(),J=o("When changing "),K=e("code",null,"hideScrollClassName",-1),Q=o(" always remember to change the "),X=e("code",null,"$frs-hide-scroll",-1),Y=o(" Sass variable as well. More information available in "),Z=e("a",{href:"#styling"},"the styling section",-1),ee=o(" or "),oe={href:"https://www.frsource.org/FRS-hide-scrollbar/usage",target:"_blank",rel:"noopener noreferrer"},se=e("code",null,"@frsource/frs-hide-scrollbar",-1),te=o(" documentation"),ne=o("."),ie=s(' <h3 id="plugindefinition" tabindex="-1"><a class="header-anchor" href="#plugindefinition" aria-hidden="true">#</a> PluginDefinition</h3> <ul><li><p><strong>Methods:</strong></p> <ul><li><code>install( instance, args )</code> - method called by <a href="#carousel-use"><code>carousel.use</code></a> during plugin installation</li></ul></li> <li><p><strong>Details:</strong></p> <p>Data type describing general interface which needs to be implemented by every plugin in the <a href="../../ecosystem">Tiny Carousel ecosystem.</a></p></li></ul>',4);function ae(re,le){const t=a("ExternalLinkIcon");return r(),l("div",null,[d,e("p",null,[u,e("a",h,[p,n(t)]),g]),f,e("div",m,[_,b,e("p",null,[v,e("a",y,[w,n(t)]),x,e("a",T,[C,k,n(t)]),S,q,N]),A]),E,e("div",I,[R,D,e("p",null,[U,M,P,$,F,L,z,e("a",H,[j,n(t)]),V])]),W,e("div",B,[G,O,e("p",null,[J,K,Q,X,Y,Z,ee,e("a",oe,[se,te,n(t)]),ne])]),ie])}var de=i(c,[["render",ae],["__file","core.html.vue"]]);export{de as default};
