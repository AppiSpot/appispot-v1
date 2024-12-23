import{r as c,bi as v,bj as u,b5 as p,n as o,l as s,bk as N,bl as k,bm as F,bn as f,k as x,bo as h,F as y,bp as A,bq as C,x as b,a9 as B}from"./index-7VV-N64s.js";import{B as M,V as z,u as H}from"./ViewBankAccount-CPJOo8QL.js";import"./DialogFullscreen-4Q7iLXx3.js";import"./Toolbar-C-RIKFYh.js";var L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},g=function(t,r){return c.createElement(v,u(u({},t),{},{ref:r,icon:L}))};g.displayName="UnorderedListOutlined";const O=c.forwardRef(g),T=()=>{const n=p(),[t,r]=c.useState(null),l=c.useMemo(()=>[{id:"id",header:"Host ID",accessorFn:a=>a.id??"N/A"},{id:"Name",header:"Name",accessorFn:a=>a==null?void 0:a.name},{id:"Email",header:"Email",accessorFn:a=>a.email},{id:"Active",header:"Active",accessorFn:a=>a.disabled,Cell:({row:a})=>{const d=!a.original.disabled;return o("div",{className:"flex items-center gap-2",children:[s("div",{className:"rounded-full text-xl",children:d?s(A,{className:"text-green-500"}):s(C,{className:"text-red-500"})}),s("p",{className:"text-sm font-bold text-navy-700 ",children:d?"Active":"Blocked"})]})}},{id:"Actions",header:"Actions",accessorFn:a=>a._id,Cell:({row:a})=>s(F,{menu:{items:[{id:"listing",label:"Manage Listing",icon:s(O,{}),onClick:()=>{n(`/admin/listing-management?owner=${a.original._id}`)}},{id:"banking",label:"View Bank Account",icon:s(M,{}),onClick:()=>r(a.original._id)}]},children:s("a",{onClick:d=>d.preventDefault(),children:o(k,{children:["Manage",s(N,{})]})})})}],[]),{query:m,...e}=f({queryKey:["users"],queryFn:async(a,d)=>{const i=await x.get("/auth/users",{params:{...a,role:"host"},signal:d});return{data:i.data.users,total:i.data.total}}});return o(y,{children:[s(h,{columns:l,...e}),s(z,{user:t,open:!!t,onClose:()=>r(null)})]})},U=()=>{const[n]=b(),t=n.get("id"),r=c.useMemo(()=>[{header:"User ID",id:"id",accessorFn:e=>{var a;return(a=e.user)==null?void 0:a.id}},{id:"bankAccountNumber",header:"Bank Account Number",accessorFn:e=>e.bankAccountNumber},{id:"bankName",header:"Bank Name",accessorFn:e=>e.bankName},{id:"address.firstName",header:"First Name",accessorFn:e=>e.address.firstName},{id:"address.lastName",header:"Last Name",accessorFn:e=>e.address.lastName},{id:"address.address",header:"Address",accessorFn:e=>e.address.address},{id:"address.city",header:"City",accessorFn:e=>e.address.city},{id:"address.state",header:"State",accessorFn:e=>e.address.state},{id:"address.zip",header:"Zip",accessorFn:e=>e.address.zip},{id:"address.country",header:"Country",accessorFn:e=>e.address.country}],[]),{query:l,...m}=H({user:t});return s(h,{columns:r,...m})},j=()=>{const[n,t]=b();return s(B,{navs:[{component:T,name:"Hosts",view:"hosts"},{component:U,name:"Banking Information",view:"banking-information"}],onTabChange:r=>{setTimeout(()=>{n.delete("id"),n.set("view",r),t(n),console.log(n)},1e3)}})};export{j as default};
