import{t as a,k as t}from"./index-CYYMkemY.js";function o({state:e}){const{data:s}=a({queryKey:["states"],queryFn:async()=>(await t.get("/chargeRate/states")).data,initialData:[]}),{data:n}=a({queryKey:["cities",e],queryFn:async()=>(await t.get("/chargeRate/cities",{params:{state:e}})).data,initialData:[],enabled:!!e});return{states:s,cities:n}}export{o as u};
