import{_ as y,f as _,z as v,j as d,N as b,o as t,c as s,e as S,y as a,m as r,s as $,O as f,b as n}from"./app.468bc449.js";let i,l,w=-1;const E=()=>{i=document.createElement("script"),l=new Promise(o=>i.addEventListener("load",()=>{o()})),i.src="https://static.codepen.io/assets/embed/ei.js",i.async=!0;const e=document.head||document.getElementsByTagName("head")[0];return e.insertBefore(i,e.firstChild),l},k=_({name:"ExampleSection",props:{title:{type:String,required:!0},description:{type:String,required:!0},defaultTab:{type:String,default:()=>"html"},tags:{type:Array,default:()=>[]},height:{type:String,default:"400px"},scripts:{type:Array,default:()=>[]}},setup(e){const{defaultTab:o,tags:p,title:u,description:c,scripts:h}=v(e),m=d(()=>"codepen-"+ ++w),g=d(()=>["tiny-carousel","@frsource/tiny-carousel",...p.value]);return b(async()=>{await(l||E()),window.__CPEmbed("."+m.value)}),{preparsedDefaultTab:d(()=>o.value+",result"),className:m,prefilDataStringified:d(()=>JSON.stringify({title:u.value,description:c.value,tags:g.value,html_classes:[],head:"<meta name='viewport' content='width=device-width, initial-scale=1'>",stylesheets:"https://unpkg.com/water.css@2.0.0/out/water.min.css",scripts:h.value}))}}}),N=["data-prefill","data-height","data-default-tab"],T={key:0,"data-lang":"html"},j=n(),B={key:1,"data-lang":"pug"},C=n(),D={key:2,"data-lang":"scss"},z=n(),P={key:3,"data-lang":"js"},V=n(),q={key:4,"data-lang":"typescript"};function A(e,o,p,u,c,h){return t(),s("section",{style:f({height:e.height})},[S("div",{class:$(e.className),"data-prefill":e.prefilDataStringified,style:f({height:e.height,overflow:"auto"}),"data-height":e.height,"data-active-tab-color":"rgb(241, 80, 160)","data-border":"none","data-default-tab":e.preparsedDefaultTab,"data-editable":"true","data-preview":"true"},[e.$slots.html?(t(),s("pre",T,[a(e.$slots,"html",{},void 0,!0)])):r("",!0),j,e.$slots.pug?(t(),s("pre",B,[a(e.$slots,"pug",{},void 0,!0)])):r("",!0),C,e.$slots.scss?(t(),s("pre",D,[a(e.$slots,"scss",{},void 0,!0)])):r("",!0),z,e.$slots.js?(t(),s("pre",P,[a(e.$slots,"js",{},void 0,!0)])):r("",!0),V,e.$slots.typescript?(t(),s("pre",q,[a(e.$slots,"typescript",{},void 0,!0)])):r("",!0)],14,N)],4)}var O=y(k,[["render",A],["__scopeId","data-v-4d17aee1"],["__file","ExampleSection.vue"]]);export{O as default};
