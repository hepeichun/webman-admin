import{a as N,c$ as e,r as O,d0 as R,d1 as S,d2 as v,c as A,b as h,f as x,k as s,d3 as T,j as r,B as k}from"./index.bde7963b.js";import{R as G}from"./index.4727443d.js";var P="/app/admin/assets/no-data.f7e550cc.svg",C="/app/admin/assets/net-error.61b7e6df.svg",I=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:m}=R(),o=S(),c=v(),{t}=A(),{prefixCls:f}=h("app-exception-page"),_=x(()=>{const{status:l}=m,{status:u}=n;return Number(l)||u}),g=x(()=>s(a).get(s(_))),p=t("sys.exception.backLogin"),i=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?p:i,handler:()=>n.full?o(T.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?p:i,handler:()=>n.full?o(T.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:i,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:P}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:C}),()=>{const{title:l,subTitle:u,btnText:d,icon:b,handler:E,status:y}=s(g)||{};return r(G,{class:f,status:y,title:n.title||l,"sub-title":n.subTitle||u},{extra:()=>d&&r(k,{type:"primary",onClick:E},{default:()=>d}),icon:()=>b?r("img",{src:b},null):null})}}});export{I as default};