import{bT as c,t as p,a7 as y,k as e}from"./index-7VV-N64s.js";function l(s){const o=c(),{data:n,isFetching:a,isError:r}=p({queryKey:["spots","all",s],queryFn:async({signal:t})=>(await e.get("/product",{params:s,signal:t})).data.products,initialData:[]}),{mutateAsync:u}=y({mutationFn:async t=>(await e.postForm("/product",t)).data,onSuccess:()=>{o.invalidateQueries({queryKey:["spots","all",s]})}});return{spots:n,isLoading:a,saveSpot:u,isError:r}}export{l as u};
