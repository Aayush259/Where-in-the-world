import{r as t,C as f,u as g,j as e}from"./index-6SbeGFji.js";const x="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e";function w(){const{theme:a,optionValue:c,setOptionValue:l,inputValue:r,setInputValue:i}=t.useContext(f);let h=a==="light"?d:x;const m=g(),n=t.useRef(),o=t.useRef(),u=()=>{const s=n.current.value;l(s),m(`/Where-in-the-world/filter/${s}`)},p=()=>{const s=o.current.value;i(s)};return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"search",className:"flex",children:[e.jsxs("label",{htmlFor:"country",className:`flex ${a}-label`,children:[e.jsx("img",{src:h,alt:"Search for a country",height:15,className:`${a}-searchImg`}),e.jsx("input",{type:"text",name:"country",id:"country",placeholder:"Search for a country...",autoComplete:"on",value:r,ref:o,onChange:p})]}),e.jsx("label",{htmlFor:"region",className:`flex ${a}-label`,children:e.jsxs("select",{name:"region",id:"region",autoComplete:"off",value:c,ref:n,onChange:u,children:[e.jsx("option",{value:"",className:`${a}-label`,children:"Find by Region"}),e.jsx("option",{value:"Africa",className:`${a}-label`,children:"Africa"}),e.jsx("option",{value:"Americas",className:`${a}-label`,children:"America"}),e.jsx("option",{value:"Asia",className:`${a}-label`,children:"Asia"}),e.jsx("option",{value:"Europe",className:`${a}-label`,children:"Europe"}),e.jsx("option",{value:"Oceania",className:`${a}-label`,children:"Oceanic"}),e.jsx("option",{value:"All",className:`${a}-label`,children:"All"})]})})]})})}export{w as default};