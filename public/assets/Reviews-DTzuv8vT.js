import{r as x,l as e,n,F as w,bT as F,a7 as L,k as _,G as E,w as y,a0 as $,t as P,bU as q,bV as B,b9 as z,D as I,Q as M,q as W,a5 as H}from"./index-7VV-N64s.js";import{S as R}from"./index-BJg3HNK-.js";import{u as O}from"./useReviews-y2EBonKG.js";import{u as Q,f as U}from"./socket-2ELdkvWa.js";import{M as K,T as Y,C as D,a as G,P as V}from"./ChangeView-CDkdWtqO.js";function J({onSubmit:a,text:d}){const[s,u]=x.useState([]),[p,m]=x.useState(""),[o,t]=x.useState(0);x.useState("");const[v,T]=x.useState(["amenities","food","room","cleanliness","value for money"]),S=r=>{if(r&&!s.includes(r)){const h=[...s,r];u(h)}},b=r=>{const h=s.filter(l=>l!==r);u(h)};return e(w,{children:n("div",{className:"flex flex-col gap-4 ",children:[n("div",{className:"flex flex-col justify-between",children:[e("p",{className:"font-normal text-black mt-8 mb-4",children:d??"How was your experience?"}),n("div",{className:"flex flex-row items-center",children:[Array(o).fill().map((r,h)=>e(R,{className:"text-black text-xl w-7 h-auto",onClick:()=>t(0)},`star-${h}`)),Array(5-o).fill().map((r,h)=>e(R,{className:"text-gray-300 text-xl w-7 h-auto",onClick:()=>t(o+h+1)},`star-${h}`))]})]}),e("textarea",{className:"w-full h-32 border border-gray-300 rounded-md px-4 py-2",placeholder:"Write your review here...",value:p,onChange:r=>m(r.target.value)}),e("div",{className:"flex flex-col gap-2",children:e("div",{className:"flex flex-wrap gap-2",children:s.map((r,h)=>n("div",{className:"flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded-md",children:[e("span",{children:r}),e("button",{className:"ml-2 text-red-500",onClick:()=>b(r),children:"×"})]},h))})}),e("div",{className:"flex flex-wrap gap-2 mb-2",children:v.map((r,h)=>e("button",{className:`px-3 py-1 rounded-md ${s.includes(r)?"bg-blue-200 text-blue-800":"bg-gray-200 text-gray-800"}`,onClick:()=>S(r),children:r},h))}),e("button",{className:"w-32 h-10 bg-brand-primary text-black font-medium rounded-md",onClick:()=>{a({comment:p,rating:o,tags:s}),m(""),t(0),u([])},children:"Submit"})]})})}function X(a){const d=F();return L({mutationKey:"addReview",mutationFn:async u=>(await _.post("/review",u)).data,onSuccess:()=>{d.invalidateQueries({queryKey:["reviews",a]})}})}function Z(a){return E({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"}}]})(a)}function j({sender:a,message:d}){return n(w,{children:[e("div",{className:" text-xs flex items-center justify-center  ",children:s(d.createdAt)}),e("div",{className:`${a?"self-end bg-brand-primary text-black":"self-start bg-black text-white"} shadow-xl drop-shadow-lg p-3 rounded-lg my-2 text-sm md:my-1 max-w-[55%] flex-wrap]`,children:e("p",{className:"text-sm break-words",children:d==null?void 0:d.message})})]});function s(u){const p=new Date,m=new Date(u),o=Math.floor((p-m)/(1e3*60*60*24));if(o===0){const t={hour:"numeric",minute:"numeric"};return` ${m.toLocaleTimeString(void 0,t)}`}else if(o===1){const t={hour:"numeric",minute:"numeric"};return`Yesterday, ${m.toLocaleTimeString(void 0,t)}`}else{const t={weekday:"long",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return m.toLocaleDateString(void 0,t)}}}j.propTypes={sender:y.number,message:y.string};function A({spotDetails:a,setdialogOpen:d}){var r,h;const[s,u]=x.useState(""),{auth:p}=$(),[m,o]=x.useState([]);P({queryKey:["chats",a._id],queryFn:async({signal:l})=>{const{data:c}=await _.get(`/chat/user/${a.owner._id||a.owner}`,{signal:l});return o(c.messages||[]),c}});const t=Q();x.useEffect(()=>{t.connect(),t.emit("connection");function l(c){o(g=>[...g,c])}return t.on("UpdateNewMessage",l),t.on("UpdateNewChat",console.log),()=>{t.off("UpdateNewMessage",l),t.off("UpdateNewChat",console.log),t.disconnect()}},[t]);const v=l=>{let c=l;for(let i=0;i<U.length;i++){const N=U[i],k=new RegExp("\\b"+N+"\\b","gi");c=c.replace(k,""),c=c.replace("@",""),c=c.replace(/\b\d{10}\b/,"")}let g=document.getElementById("chatBox");g.value=c,l!==c&&(g=document.getElementById("alertPopUp"),g&&(g.style.display="flex"))},T=()=>{let l=document.getElementById("alertPopUp");l.style.display="none"},S=async l=>{l.preventDefault();const c=a.owner._id||a.owner;t.emit("sendMessage",{chat:c,message:s}),u("")},b=(h=(r=a==null?void 0:a.owner)==null?void 0:r.name)==null?void 0:h.split(" ");return console.log(b[0].slice(0,1).toUpperCase()+b[0].slice(1)),n("div",{className:"flex -ml-7 flex-col space-y-3 max-sm:h-full max-sm:w-[99vw] md:w-[30vw] md:max-h-[500px] overflow-y-hidden rounded md:px-2 font-[Fira Sans] md:my-3 md:fixed md:py-2 md:pb-5 md:right-20 bg-white bottom-0 md:rounded-xl",children:[e(B,{sx:{width:"100%"},spacing:2,children:e(q,{severity:"warning",id:"alertPopUp",style:{display:"none"},onClose:T,children:"Forbidden Word"})}),n("div",{className:"header flex gap-2 items-center border-b border-b-gray-600 pb-3",children:[e(z,{className:"text-3xl text-gray-500"}),e("span",{className:"text-lg font-bold ml-2",children:b[0].slice(0,1).toUpperCase()+b[0].slice(1)}),e(Z,{className:"text-sm mx-2 text-gray-600 ml-auto cursor-pointer",onClick:()=>{d(!1)}})]}),e("span",{className:"text-sm font-medium px-4 pb-2 shadow-lg w-full ",children:"Have a question for the host ?"}),e("div",{className:" flex flex-col grow md:min-h-[35vh] h-[900px] gap-2 md:max-h-[70vh] overflow-x-hidden  ",children:m==null?void 0:m.map((l,c)=>{var g;return e(j,{sender:(((g=l.user)==null?void 0:g._id)??l.user)===p._id,message:l},c)})}),n("form",{onSubmit:s!=""?S:()=>alert("Can't send empty message!"),className:"flex w-[100%] h-full items-center border-t border-t-gray-400 pt-4",children:[e("input",{value:s,onChange:l=>{v(l.target.value),u(l.target.value)},name:"",id:"chatBox",className:"mx-4 rounded-lg border h-full w-2/6 py-2 grow border-gray-300 px-2",placeholder:"What's on your mind ?"}),e("button",{className:"bg-brand-primary w-fit text-black rounded-lg p-2 px-4",children:"Send"})]})]})}A.propTypes={spotDetails:y.object,setdialogOpen:y.func,user:y.object};function ee({spotDetails:a,width:d}){const[s,u]=x.useState(!1),p=()=>{u(!s)};s?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal");const[m,o]=x.useState(!1),{auth:t}=$();return console.log("user",t),n(w,{children:[s&&n("div",{className:"modal z-[99] mt-14 w-full h-fit",children:[e("div",{onClick:p,className:"overlay"}),n("div",{className:"modal-content h-[85vh] w-screen",children:[e(A,{spotDetails:a,setdialogOpen:o,user:t}),e("button",{className:"close-modal mt-5 ml-3 text-transparent z-50",onClick:p,children:"CLOSE"})]})]}),e(I,{open:m,onClose:()=>{o(!1)},className:"w-full px-5 !fixed !bottom-0 !right-20",children:e(A,{spotDetails:a,setdialogOpen:o,user:t})}),e("div",{children:d>600?e(w,{children:e("span",{className:`flex gap-2 mt-6 px-6 py-3 bg-black rounded-lg text-white w-fit
                            ${t?"cursor-pointer hover:bg-gray-800":"cursor-not-allowed"}            
                        `,onClick:()=>{if(!t)return M.error("Please login to message the host");o(!0)},children:e("span",{className:"font-medium cursor-pointer",children:"Message Host"})})}):e(w,{children:e("span",{className:`flex gap-2 mt-6 px-6 py-3 bg-black rounded-lg text-white w-fit
                  ${t?"cursor-pointer hover:bg-gray-800":"cursor-not-allowed"}            
              `,onClick:()=>{if(!t)return M.error("Please login to message the host");p()},children:e("span",{className:" btn-modal font-medium  cursor-pointer",children:"Message Host"})})})})]})}ee.propTypes={spotDetails:y.object};function te({spot:a}){var s,u,p,m;const d=[((u=(s=a==null?void 0:a.location)==null?void 0:s.location)==null?void 0:u.coordinates[1])??0,((m=(p=a==null?void 0:a.location)==null?void 0:p.location)==null?void 0:m.coordinates[0])??0];return e(w,{children:n("div",{className:"flex flex-col gap-6 items-start",children:[e("h3",{className:"text-lg font-medium text-black",children:"You'll be here"}),e("div",{className:"w-full   max-sm:w-[100%] max-sm:h-[40vh]  rounded-xl  overflow-hidden",children:n(K,{className:"aspect-video w-full scale-110 overflow-hidden max-sm:h-[40vh] ",center:d,zoom:19,attributionControl:!0,zoomControl:!0,children:[e(Y,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),e(D,{center:d,zoom:12}),e(G,{position:d,children:e(V,{children:"Popup for any custom information."})})]})})]})})}te.propTypes={spot:y.object};function ae({spot_id:a,owner_id:d,showreview:s}){const u=W(),[p,m]=x.useState(""),o=a,t=d,{data:v=[]}=O({target:o}),[T,S]=x.useState([]),b=X({target:o}),[r,h]=x.useState(!1);r?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),x.useState(!1);const{auth:l}=$(),c=async i=>{M.promise(async()=>{await b.mutateAsync({...i,target:o,owner:t},{onError:N=>{console.error(N)}})},{pending:"Adding review...",success:"Review added!",error:"Failed to add review!"})},g=async(i,N,k)=>{try{const f=await _.patch(`/review/${i}/reply`,{userId:N,reply:k});f.status===200&&(M.success("Reply added successfully"),S(f.data)),console.log(f);const C=await f.json();console.log(C),location.location.reload()}catch(f){console.error(f,"this is error")}};return console.log(v),e(w,{children:n("div",{className:`  w-full flex flex-col gap-7 text-base max-sm:text-sm  sm:h-screen sm:overflow-y-scroll px-3 ${s&&"h-[100px] "}`,children:[s&&e("p",{className:"text-lg text-bold",children:"What people think about this spot"}),u.pathname==="/host/review-management"?e(w,{}):e(J,{onSubmit:c}),s&&e("div",{className:"flex flex-col gap-8 ",children:v.length>0?v.map((i,N)=>{var k;return n("div",{className:"flex flex-col gap-4",children:[n("div",{className:"flex flex-col justify-between gap-4",children:[n("div",{className:"flex flex-row items-center gap-2 text-gray-500",children:[e(H,{className:"text-3xl rounded-full border text-gray-500 p-1 border-gray-500"}),e("span",{className:"",children:(k=i==null?void 0:i.user)==null?void 0:k.name})]}),n("div",{className:"flex flex-row items-center",children:[Array(i.rating).fill().map((f,C)=>e(R,{className:"text-black text-xl w-4 h-auto"},`star-${C}`)),Array(5-i.rating).fill().map((f,C)=>e(R,{className:"text-gray-400 text-xl w-4 h-auto"},`star-${C}`))]})]}),e("p",{className:"text-base text-gray-900",children:i.comment}),n("div",{className:"flex flex-row items-center gap-2",children:[e("span",{className:"text-gray-500",children:"What people liked:"}),e("div",{className:"flex flex-wrap gap-2",children:i.tags.map((f,C)=>e("div",{className:"flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded-md",children:e("span",{children:f})},C))})]}),n("div",{className:"",children:[i.reply&&n("div",{className:"flex flex-col gap-2",children:[e("span",{className:"text-gray-500",children:"Reply"}),e("p",{className:"text-base text-gray-900",children:i.reply})]}),l._id===i.owner&&n("div",{className:"flex gap-4",children:[e("input",{value:p,onChange:f=>m(f.target.value),type:"text",placeholder:"Reply",className:"border border-gray-300 rounded-md px-4 py-2"}),e("button",{onClick:()=>g(i._id,l._id,p),className:"bg-blue-500 text-white px-4 py-2 rounded-md",children:"Reply"})]})]})]},`review-${N}`)}):e("span",{className:"font-medium text-center text-sm text-gray-500",children:"No Experice Yet!"})})]})})}ae.propTypes={spot_id:y.string.isRequired,owner_id:y.string.isRequired};export{J as A,ee as C,ae as R,te as S,X as u};
