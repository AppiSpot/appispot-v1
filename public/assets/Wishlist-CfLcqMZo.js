import{l as t,bG as l,F as s,L as a}from"./index-7VV-N64s.js";import{S as e}from"./SpotCard-D1bckGnm.js";import{u as i}from"./useCart-DJvvD5UN.js";import"./swiper-DPGn5qAn.js";function c(){const{data:r}=i();return console.log(r),t(s,{children:t(l,{title:"My Wishlist",children:t("div",{className:"flex flex-col w-full mb-20 gap-2 max-sm:px-3",children:r.map(o=>t(s,{children:t(e,{spot:o.product,children:t(s,{children:t(a,{to:`/spot/${o.product._id}`,className:"bg-brand-primary text-black px-6 py-2 rounded-md font-semibold mx-auto w-full max-sm:px-3 max-sm:py-1",children:"Explore this Spot"})})},o.product._id)}))})})})}export{c as default};
