const __vite__fileDeps=["assets/Search-B4wKBpHo.js","assets/index-BCC-Htwz.js","assets/index-D0DVUZrB.css","assets/FilteredCountryCards-Dhbrp-2c.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as o,j as r,r as s,L as e,_ as t}from"./index-BCC-Htwz.js";const n=s.lazy(()=>t(()=>import("./Search-B4wKBpHo.js"),__vite__mapDeps([0,1,2]))),_=s.lazy(()=>t(()=>import("./FilteredCountryCards-Dhbrp-2c.js"),__vite__mapDeps([3,1,2])));function i(){const{error:a}=o();return r.jsxs(s.Suspense,{fallback:r.jsx(e,{}),children:[r.jsx(n,{}),a||r.jsx(s.Suspense,{fallback:r.jsx(e,{}),children:r.jsx(_,{})})]})}export{i as default};