var u=(a,r,t)=>new Promise((i,n)=>{var m=o=>{try{e(t.next(o))}catch(c){n(c)}},s=o=>{try{e(t.throw(o))}catch(c){n(c)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(m,s);e((t=t.apply(a,r)).next())});import{B as d,A as _}from"./BasicForm.67047978.js";import{u as f}from"./useForm.fec2986b.js";import{step2Schemas as v}from"./data.296feacd.js";import{a as B,aG as F,aI as h,o as x,h as b,j as g}from"./index.656c725e.js";import{D as l}from"./index.4f3dd38a.js";import{D as p}from"./index.f3ec18bd.js";import{a as y}from"./install.3db379fe.js";import"./index.1f507897.js";import"./index.ddc16f9d.js";import"./_baseIteratee.d7866646.js";import"./index.6e6030d1.js";import"./index.d60da1cd.js";import"./index.28987d30.js";import"./index.2e5a1dae.js";import"./index.873c27ee.js";import"./index.38230a24.js";import"./index.e8ce4467.js";import"./useWindowSizeFn.2783558b.js";import"./FullscreenOutlined.52703f8e.js";import"./uniqBy.73b96c75.js";import"./download.add46730.js";import"./index.2c103eba.js";const D=B({components:{BasicForm:d,[_.name]:_,[l.name]:l,[p.name]:p,[p.Item.name]:p.Item},emits:["next","prev"],setup(a,{emit:r}){const[t,{validate:i,setProps:n}]=f({labelWidth:80,schemas:v,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:m,submitFunc:s});function m(){return u(this,null,function*(){r("prev")})}function s(){return u(this,null,function*(){try{const e=yield i();yield y(e),r("next",e)}catch(e){}})}return{register:t}}}),S={class:"step2"};function A(a,r,t,i,n,m){const s=h("BasicForm");return x(),b("div",S,[g(s,{onRegister:a.register},null,8,["onRegister"])])}var U=F(D,[["render",A],["__scopeId","data-v-7c9b57a6"]]);export{U as default};