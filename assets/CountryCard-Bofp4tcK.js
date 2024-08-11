import{j as s,c as l,P as e}from"./index-BCC-Htwz.js";function d({countryName:a,countryFlag:r,countryFlagAlt:t,countryPopulation:o,countryRegion:i,countryCapital:n}){return s.jsx(s.Fragment,{children:s.jsxs(l,{id:a,to:`/Where-in-the-world/country/${a}`,className:"w-60 max-w-[96vw] mx-auto pb-5 rounded-lg overflow-hidden text-Very-Dark-Blue-Dark-Mode-Background bg-Very-Light-Gray-Light-Mode-Background shadow-light-box-shadow dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-Very-Light-Gray-Light-Mode-Background dark:shadow-dark-box-shadow",children:[s.jsx("img",{src:r,alt:t,loading:"lazy",className:"max-h-64 min-h-28"}),s.jsxs("div",{className:"p-4 text-sm sm:text-lg",children:[s.jsx("p",{className:"font-bold mt-1 mb-2 text-lg sm:text-xl",children:a}),s.jsxs("p",{className:"mt-1",children:[s.jsx("span",{className:"font-bold sm:font-semibold",children:"Population:"})," ",o.toLocaleString()]}),s.jsxs("p",{className:"mt-1",children:[s.jsx("span",{className:"font-bold sm:font-semibold",children:"Region:"})," ",i]}),s.jsxs("p",{className:"mt-1",children:[s.jsx("span",{className:"font-bold sm:font-semibold",children:"Capital:"})," ",n[0]]})]})]})})}d.propTypes={countryName:e.string.isRequired,countryFlag:e.string.isRequired,countryFlagAlt:e.string.isRequired,countryPopulation:e.number.isRequired,countryRegion:e.string.isRequired,countryCapital:e.array.isRequired};export{d as default};