import{w as o,l as e,F as s,r as d,a0 as m,a7 as h,n as t,D as x,b3 as p,z as f,b4 as g,aF as l,k as D}from"./index-CYYMkemY.js";import{D as y}from"./DialogContentText-DIlckXhd.js";function c({children:a}){return e(s,{children:e("div",{className:"flex flex-col gap-5 max-w-xl items-stretch mx-auto",children:a})})}c.propTypes={children:o.node.isRequired};function b(){const[a,n]=d.useState(!1);async function i(){return await D.delete("/auth/user")}const{logout:r}=m(),{mutate:u}=h({mutationFn:i,onSuccess:async()=>{await r({}),window.location.href="/auth"}});return t(s,{children:[t(c,{children:[e("div",{className:"flex flex-col gap-5 max-w-xl items-stretch mx-auto",children:t("div",{className:"flex flex-col gap-1",children:[e("label",{htmlFor:"delete-account",className:"text-sm font-medium text-gray-600",children:"Delete Account"}),e("p",{className:"text-sm text-gray-600",children:"Once you delete your account, there is no going back. Please be certain."})]})}),e("div",{className:"max-sm:self-center",children:e("button",{onClick:()=>n(!0),className:"bg-brand-primary text-black px-4 py-2 rounded-lg",children:"Delete Account"})})]}),t(x,{open:a,onClose:()=>n(!1),children:[e(p,{children:"Delete Account"}),e(f,{children:e(y,{children:"Are you sure you want to delete your account?"})}),t(g,{children:[e(l,{onClick:()=>n(!1),children:"Cancel"}),e(l,{onClick:u,children:"Delete"})]})]})]})}b.propTypes={onDelete:o.func.isRequired};export{b as default};
