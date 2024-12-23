import{E as S,H as N,j as y,b5 as j,r as o,x as C,l as e,n as t,L as R,b6 as _,F as k,Q as l,k as q}from"./index-7VV-N64s.js";import{P as h}from"./PasswordInput-C082zh4F.js";import{S as E}from"./SubmitButton-A2513g0k.js";var i={},L=N;Object.defineProperty(i,"__esModule",{value:!0});var x=i.default=void 0,D=L(S()),I=y,F=(0,D.default)((0,I.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");x=i.default=F;function O(){const p=j(),[a,g]=o.useState(""),[r,c]=o.useState(""),[n,d]=o.useState("userinput"),[w,u]=o.useState(!1),[v]=C(),b=v.get("token");return e(k,{children:e("div",{className:"w-full mx-auto bg-transparent rounded-lg  sm:max-w-5xl  flex lg:h-[50vh] sm:min-w-[265px]",children:e("div",{className:"flex flex-col items-center justify-center  mx-auto md:py-0",children:n==="success"?t("div",{className:"container flex flex-col justify-center items-center  gap-2 text-white",children:[e("div",{className:"rounded-full border-2 p-4 border-green-400",children:e(x,{className:"sm:text-3xl text-green-400"})}),e("div",{className:"font-bold sm:text-xl",children:"Email has been successfully sent to you"}),n==="success"&&t(R,{to:"/auth",className:"text-white ",children:[e("span",{className:"text-cyan-400 underline",children:"Click here"})," ","if you're not redirected to login page"]})]}):n==="userinput"?t("form",{onSubmit:async s=>{var m,f;if(s.preventDefault(),!a||!r)return l.error("Please enter password");if(r!==a)return l.error("Confirm password is not matching");try{u(!0),await q.post("/auth/confirm-password-reset",{password:a,token:b,confirmPassword:r}),l.success("Password reset successfully"),d("success"),setTimeout(()=>{p("/auth")},2e3)}catch(P){l.error(((f=(m=P.response)==null?void 0:m.data)==null?void 0:f.message)??"Something went wrong"),d("error")}finally{u(!1)}},method:"post",children:[t("div",{className:"",children:[e(h,{password:a,handlePassword:s=>{s.target.name==="password"&&g(s.target.value),s.target.name==="cpassword"&&c(s.target.value)}}),e(h,{password:r,handlePassword:s=>c(s.target.value),label:"Confirm Password"})]}),e(E,{text:w?"Resetting Password...":"Reset Password"})]}):n==="error"?t("div",{className:"container flex flex-col justify-center items-center p-4 gap-2",children:[e("div",{className:"rounded-full border-2 p-4 border-green-400",children:e(_,{className:"text-3xl text-green-400"})}),e("div",{className:"font-bold text-2xl",children:"Something Went Wrong :("})]}):null})})})}export{O as default};
