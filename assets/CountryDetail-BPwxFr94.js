import{u as N,j as s}from"./index-DuoeBY6W.js";import"./GetCountryDetail-1erU1ZU0.js";function v({countryDetail:e}){const{theme:l}=N(),c=e[0].name.common,o=e[0].flags.svg,r=e[0].flags.alt,i=Object.values(e[0].languages).join(", "),t=e[0].name.nativeName[Object.keys(e[0].languages)[0]].common,d=e[0].population,m=e[0].region,p=e[0].subregion,x=e[0].capital,j=e[0].tld,u=e[0].currencies[Object.keys(e[0].currencies)[0]].name;let a;try{a=e[0].borders.join(", ")}catch{a="No Border Countries"}let h=a.toString().split(",");return s.jsxs("div",{id:"countryDetail",className:"flex",children:[s.jsx("div",{id:"countryFlag",children:s.jsx("img",{src:o,alt:r})}),s.jsxs("div",{id:"details",children:[s.jsx("p",{className:"countryName bold-800",children:c}),s.jsxs("div",{className:"otherDetails flex",style:{alignItems:"flex-start"},children:[s.jsxs("div",{style:{width:"50%"},children:[s.jsxs("p",{className:"nativeName",children:[s.jsx("span",{className:"bold-600",children:"Native Name: "}),t]}),s.jsxs("p",{className:"population",children:[s.jsx("span",{className:"bold-600",children:"Population: "}),d.toLocaleString()]}),s.jsxs("p",{className:"region",children:[s.jsx("span",{className:"bold-600",children:"Region: "}),m]}),s.jsxs("p",{className:"subRegion",children:[s.jsx("span",{className:"bold-600",children:"Sub Region: "}),p]}),s.jsxs("p",{className:"capital",children:[s.jsx("span",{className:"bold-600",children:"Capital: "}),x]})]}),s.jsxs("div",{style:{width:"50%"},children:[s.jsxs("p",{className:"topLevelDomain",children:[s.jsx("span",{className:"bold-600",children:"Top Level Domain: "}),j]}),s.jsxs("p",{className:"currencies",children:[s.jsx("span",{className:"bold-600",children:"Currencies: "}),u]}),s.jsxs("p",{className:"languages",children:[s.jsx("span",{className:"bold-600",children:"Languages: "}),i]})]})]}),s.jsxs("p",{className:"borderCountries flex",style:{flexWrap:"wrap",justifyContent:"flex-start",gap:"8px"},children:[s.jsx("span",{className:"bold-600",children:"Border Countries: "}),h.map(n=>s.jsx("span",{className:`borderCountry ${l}-backBtn`,children:n},n))]})]})]})}export{v as default};
