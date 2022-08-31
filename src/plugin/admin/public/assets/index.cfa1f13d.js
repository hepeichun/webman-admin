import{j as r,J as _,O as oe,r as U,bZ as ie,cC as re,cD as ae,_ as b,F as le,aa as O,a as Y,U as se,cE as ce,an as K,D as ee,a7 as de,N as pe,br as Q,f as ue,ao as W,aR as be,aB as fe,aj as ve}from"./index.bde7963b.js";function N(o){return o!=null}var me=function(e){var n=e.itemPrefixCls,t=e.component,a=e.span,i=e.labelStyle,d=e.contentStyle,m=e.bordered,s=e.label,c=e.content,l=e.colon,x=t;if(m){var p;return r(x,{class:[(p={},_(p,"".concat(n,"-item-label"),N(s)),_(p,"".concat(n,"-item-content"),N(c)),p)],colSpan:a},{default:function(){return[N(s)&&r("span",{style:i},[s]),N(c)&&r("span",{style:d},[c])]}})}return r(x,{class:["".concat(n,"-item")],colSpan:a},{default:function(){return[r("div",{class:"".concat(n,"-item-container")},[s&&r("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!l)],style:i},[s]),c&&r("span",{class:"".concat(n,"-item-content"),style:d},[c])])]}})},F=me,ye=function(e){var n=function(p,f,v){var j=f.colon,$=f.prefixCls,h=f.bordered,g=v.component,I=v.type,L=v.showLabel,z=v.showContent,w=v.labelStyle,P=v.contentStyle;return p.map(function(u,k){var S,D,y=u.props||{},M=y.prefixCls,R=M===void 0?$:M,T=y.span,J=T===void 0?1:T,V=y.labelStyle,Z=y.contentStyle,q=y.label,G=q===void 0?(D=(S=u.children)===null||S===void 0?void 0:S.label)===null||D===void 0?void 0:D.call(S):q,H=ie(u),A=re(u),B=ae(u),E=u.key;return typeof g=="string"?r(F,{key:"".concat(I,"-").concat(String(E)||k),class:A,style:B,labelStyle:b(b({},w.value),V),contentStyle:b(b({},P.value),Z),span:J,colon:j,component:g,itemPrefixCls:R,bordered:h,label:L?G:null,content:z?H:null},null):[r(F,{key:"label-".concat(String(E)||k),class:A,style:b(b(b({},w.value),B),V),span:1,colon:j,component:g[0],itemPrefixCls:R,bordered:h,label:G},null),r(F,{key:"content-".concat(String(E)||k),class:A,style:b(b(b({},P.value),B),Z),span:J*2-1,component:g[1],itemPrefixCls:R,bordered:h,content:H},null)]})},t=e.prefixCls,a=e.vertical,i=e.row,d=e.index,m=e.bordered,s=oe(ne,{labelStyle:U({}),contentStyle:U({})}),c=s.labelStyle,l=s.contentStyle;return a?r(le,null,[r("tr",{key:"label-".concat(d),class:"".concat(t,"-row")},[n(i,e,{component:"th",type:"label",showLabel:!0,labelStyle:c,contentStyle:l})]),r("tr",{key:"content-".concat(d),class:"".concat(t,"-row")},[n(i,e,{component:"td",type:"content",showContent:!0,labelStyle:c,contentStyle:l})])]):r("tr",{key:d,class:"".concat(t,"-row")},[n(i,e,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:c,contentStyle:l})])},xe=ye;O.any;var he=function(){return{prefixCls:String,label:O.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},ge=Y({name:"ADescriptionsItem",props:he(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var a;return(a=t.default)===null||a===void 0?void 0:a.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function we(o,e){if(typeof o=="number")return o;if(ee(o)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&o[t]!==void 0)return o[t]||te[t]}return 3}function X(o,e,n){var t=o;return(e===void 0||e>n)&&(t=fe(o,{span:n}),ve(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function Se(o,e){var n=be(o),t=[],a=[],i=e;return n.forEach(function(d,m){var s,c=(s=d.props)===null||s===void 0?void 0:s.span,l=c||1;if(m===n.length-1){a.push(X(d,c,i)),t.push(a);return}l<i?(i-=l,a.push(d)):(a.push(X(d,l,i)),t.push(a),i=e,a=[])}),t}var Ce=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:O.any,extra:O.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),C=Y({name:"ADescriptions",props:Ce(),slots:["title","extra"],Item:ge,setup:function(e,n){var t=n.slots,a=se("descriptions",e),i=a.prefixCls,d=a.direction,m,s=U({});ce(function(){m=K.subscribe(function(l){ee(e.column)==="object"&&(s.value=l)})}),de(function(){K.unsubscribe(m)}),pe(ne,{labelStyle:Q(e,"labelStyle"),contentStyle:Q(e,"contentStyle")});var c=ue(function(){return we(e.column,s.value)});return function(){var l,x,p,f,v=e.size,j=e.bordered,$=j===void 0?!1:j,h=e.layout,g=h===void 0?"horizontal":h,I=e.colon,L=I===void 0?!0:I,z=e.title,w=z===void 0?(x=t.title)===null||x===void 0?void 0:x.call(t):z,P=e.extra,u=P===void 0?(p=t.extra)===null||p===void 0?void 0:p.call(t):P,k=(f=t.default)===null||f===void 0?void 0:f.call(t),S=Se(k,c.value);return r("div",{class:[i.value,(l={},_(l,"".concat(i.value,"-").concat(v),v!=="default"),_(l,"".concat(i.value,"-bordered"),!!$),_(l,"".concat(i.value,"-rtl"),d.value==="rtl"),l)]},[(w||u)&&r("div",{class:"".concat(i.value,"-header")},[w&&r("div",{class:"".concat(i.value,"-title")},[w]),u&&r("div",{class:"".concat(i.value,"-extra")},[u])]),r("div",{class:"".concat(i.value,"-view")},[r("table",null,[r("tbody",null,[S.map(function(D,y){return r(xe,{key:y,index:y,colon:L,prefixCls:i.value,vertical:g==="vertical",bordered:$,row:D},null)})])])])])}}});C.install=function(o){return o.component(C.name,C),o.component(C.Item.name,C.Item),o};var je=C;export{je as D};