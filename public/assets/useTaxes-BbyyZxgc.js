import{t,k as u}from"./index-CYYMkemY.js";function y({country:a,state:e,city:r}){return t({queryKey:["taxes",a,e,r],queryFn:async({signal:s})=>(await u.get("/chargeRate",{params:{state:e,city:r,country:a},signal:s})).data,initialData:[]})}export{y as u};
