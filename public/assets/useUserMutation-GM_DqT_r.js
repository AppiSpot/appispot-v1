import{a7 as s,k as a}from"./index-7VV-N64s.js";function i(){const{mutateAsync:n}=s({mutationFn:async(t="")=>(await a.delete(`/auth/user/${t??""}`)).data}),{mutateAsync:r}=s({mutationFn:async({id:t="",data:e})=>(await a.patchForm(`/auth/user/${t??""}`,e)).data}),{mutateAsync:o}=s({mutationFn:async t=>(await a.post("/auth/register",t)).data});return{deleteUser:n,updateUser:r,createUser:o}}export{i as u};
