import{w as y,r as i,n,l as e,ac as o,ad as c,S as F,cp as N,Q as I,k as v,F as T,bo as w,a9 as C,bG as q}from"./index-7VV-N64s.js";import{u as k}from"./useSupportMRT-53FC8Pk7.js";import{A as R,a as D}from"./AvatarGroup-B69Ud2mQ.js";const j=["Booking issue","Cancellation issue","Technical issue","Spot issue","Billing issue","Pricing issue","Other issue"];function A(){const[r,t]=i.useState(""),[a,l]=i.useState(""),[d,u]=i.useState(""),[p,h]=i.useState(""),[g,x]=i.useState([]),[b,f]=i.useState(null);return n("form",{className:"flex flex-col gap-3 max-sm:mb-16",onSubmit:async s=>{s.preventDefault();const m={reference:r,title:d||a,type:a=="Technical issue"?"technical":"other",description:p,screenshots:g,contact:b};await I.promise(v.postForm("/support",m),{pending:"Submitting...",success:"Submitted successfully",error:"Failed to submit"})},onReset:()=>{t(""),l(""),u(""),h(""),x([]),f(null)},children:[n("div",{className:"flex flex-col gap-1.5",children:[e(o,{htmlFor:"bookingId",children:"Reference ID"}),e(c,{type:"text",id:"bookingId",name:"bookingId",margin:!0,value:r,onChange:s=>t(s.target.value)})]}),n("div",{className:"flex flex-col gap-1.5",children:[e(o,{htmlFor:"issueType",required:!0,children:"Issue Type"}),n(F,{id:"issueType",name:"issueType",margin:!0,value:a,onChange:s=>{l(s.target.value),u("")},required:!0,children:[e("option",{value:"",selected:!0,disabled:!0,children:"Select Issue Type"}),j.map((s,m)=>e("option",{value:s,children:s},m))]})]}),a==="Other issue"&&n("div",{className:"flex flex-col gap-1.5",children:[e(o,{htmlFor:"otherIssue",required:!0,children:"What's issue you are facing?"}),e(c,{type:"text",id:"otherIssue",name:"otherIssue",margin:!0,value:d,onChange:s=>u(s.target.value),required:!0})]}),n("div",{className:"flex flex-col gap-1.5",children:[e(o,{htmlFor:"description",required:!0,children:"Description"}),e(N,{type:"text",id:"description",name:"description",margin:!0,width:"max-w-lg",value:p,onChange:s=>h(s.target.value),required:!0})]}),n("div",{className:"flex flex-col gap-1.5",children:[e(o,{htmlFor:"contact",required:!0,children:"Contact"}),e(c,{type:"text",id:"contact",name:"contact",margin:!0,width:"max-w-lg",value:b,onChange:s=>f(s.target.value),required:!0})]}),n("div",{className:"flex flex-col gap-1.5 max-w-sm h-fit",children:[e(o,{htmlFor:"screenshots",children:"Screenshots"}),e(c,{type:"file",id:"screenshots",name:"screenshots",margin:!0,onChange:s=>x(s.target.files),multiple:!0,className:"hidden"}),e(S,{screenshots:g})]}),n("div",{className:"-mx-5 -mb-5 bg-[#F3F3F3] flex font-medium gap-3 px-8 py-3 mt-3",children:[e("button",{className:"bg-brand-primary text-black py-1.5 px-4 rounded-sm",type:"submit",children:"Submit"}),e("button",{className:"bg-transparent  border-[#696C80] border-2  text-[#696C80] px-3 py-2 rounded-sm",type:"reset",children:"Cancel"})]})]})}function S({screenshots:r}){return e(T,{children:n("div",{className:"grid grid-cols-3 gap-1.5 h-full items-stretch",children:[e("label",{htmlFor:"screenshots",className:"col-span-2 flex px-2.5 items-center border border-gray-400 text-black sm:text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600  bg-gray-50@:bg-gray-800@:text-white@:border-gray-600@:focus:ring-blue-600@:focus:border-blue-600",children:(r==null?void 0:r.length)>0?e("p",{className:"text-sm font-sm  text-navy-700 mx-4",children:r.length==1?r[0].name:`${r.length} files selected`}):e("p",{className:"text-sm text-navy-700 mx-4",children:"No file choosen"})}),e("button",{type:"button",className:"mx-auto",children:e("label",{htmlFor:"screenshots",className:"cursor-pointer bg-black text-white px-2 py-2 rounded-sm flex items-center justify-between",children:"Choose File"})})]})})}S.propTypes={screenshots:y.arrayOf(y.object)};function O(){const r=k();return e(w,{columns:[{header:"ID",id:"id",accessorFn:t=>t.id},{header:"Issue Type",id:"title",accessorFn:t=>t.title},{header:"Description",id:"description",accessorFn:t=>t.description},{header:"Sceenshots",id:"sceenshots",accessorFn:t=>{var a;return(a=t.screenshots)==null?void 0:a.map(l=>`${v.defaults.baseURL}/support/image/${l}`)},Cell:({renderedCellValue:t})=>e("p",{className:"text-sm font-bold text-navy-700 mx-4",children:e(R,{max:3,children:t==null?void 0:t.map(a=>e(D,{src:a},`${a}avatarsupport`))})})},{header:"Status",id:"status",accessorFn:t=>t.status==="resolved",Cell:({renderedCellValue:t})=>e("div",{className:"flex flex-col",children:t?e("span",{className:"text-green-500",children:"Resolved"}):e("span",{className:"text-red-500",children:"Pending"})})}],...r})}function L(){return e(q,{title:"Support",className:"max-sm:mb-16",children:e(C,{navs:[{name:"Support",view:"support",component:()=>e(A,{})},{name:"Support Status",view:"status",component:()=>e(O,{})}]})})}export{L as default};
