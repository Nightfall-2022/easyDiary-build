import{c as C,h as L,f as X,u as z,g as R,a as Y}from"./QBtn.8127231c.js";import{c as p,h as y,g as O,P as b,n as $,Q as j,J as q,R as k,O as D,L as E,M as w,K as _,N as P,r as A,I as U}from"./index.2c6a7d5a.js";import{u as Q,a as T,d as H}from"./diary.15522827.js";var te=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:i}){const a=p(()=>parseInt(t.lines,10)),c=p(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),e=p(()=>t.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>y("div",{style:e.value,class:c.value},L(i.default))}}),ne=C({name:"QList",props:{...Q,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:i}){const a=O(),c=T(t,a.proxy.$q),e=p(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>y(t.tag,{class:e.value},L(i.default))}});const S={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},W=Object.keys(S);S.all=!0;function I(t){const i={};for(const a of W)t[a]===!0&&(i[a]=!0);return Object.keys(i).length===0?S:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const J=["INPUT","TEXTAREA"];function M(t,i){return i.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof i.handler=="function"&&J.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(i.uid)===-1)}function B(t,i,a){const c=w(t);let e,n=c.left-i.event.x,r=c.top-i.event.y,s=Math.abs(n),o=Math.abs(r);const u=i.direction;u.horizontal===!0&&u.vertical!==!0?e=n<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",s>o&&(u.left===!0&&n<0?e="left":u.right===!0&&n>0&&(e="right"))):u.down===!0&&r>0?(e="down",s>o&&(u.left===!0&&n<0?e="left":u.right===!0&&n>0&&(e="right"))):u.left===!0&&n<0?(e="left",s<o&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&n>0&&(e="right",s<o&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let f=!1;if(e===void 0&&a===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,f=!0,e==="left"||e==="right"?(c.left-=n,s=0,n=0):(c.top-=r,o=0,r=0)}return{synthetic:f,payload:{evt:t,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:c,direction:e,isFirst:i.event.isFirst,isFinal:a===!0,duration:Date.now()-i.event.time,distance:{x:s,y:o},offset:{x:n,y:r},delta:{x:c.left-i.event.lastX,y:c.top-i.event.lastY}}}}let V=0;var ie=X({name:"touch-pan",beforeMount(t,{value:i,modifiers:a}){if(a.mouse!==!0&&b.has.touch!==!0)return;function c(n,r){a.mouse===!0&&r===!0?P(n):(a.stop===!0&&E(n),a.prevent===!0&&D(n))}const e={uid:"qvtp_"+V++,handler:i,modifiers:a,direction:I(a),noop:$,mouseStart(n){M(n,e)&&j(n)&&(q(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(M(n,e)){const r=n.target;q(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,r){if(b.is.firefox===!0&&k(t,!0),e.lastEvt=n,r===!0||a.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&D(u),n.cancelBubble===!0&&E(u),Object.assign(u,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:u}}E(n)}const{left:s,top:o}=w(n);e.event={x:s,y:o,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(n){if(e.event===void 0)return;const r=w(n),s=r.left-e.event.x,o=r.top-e.event.y;if(s===0&&o===0)return;e.lastEvt=n;const u=e.event.mouse===!0,f=()=>{c(n,u);let d;a.preserveCursor!==!0&&a.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),H(),e.styleCleanup=h=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),u===!0){const g=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{g(),h()},50):g()}else h!==void 0&&h()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(n,e.event.mouse);const{payload:d,synthetic:h}=B(n,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&f(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=h===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){f(),e.event.detected=!0,e.move(n);return}const v=Math.abs(s),m=Math.abs(o);v!==m&&(e.direction.horizontal===!0&&v>m||e.direction.vertical===!0&&v<m||e.direction.up===!0&&v<m&&o<0||e.direction.down===!0&&v<m&&o>0||e.direction.left===!0&&v>m&&s<0||e.direction.right===!0&&v>m&&s>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,r){if(e.event!==void 0){if(_(e,"temp"),b.is.firefox===!0&&k(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(B(n===void 0?e.lastEvt:n,e).payload);const{payload:s}=B(n===void 0?e.lastEvt:n,e,!0),o=()=>{e.handler(s)};e.styleCleanup!==void 0?e.styleCleanup(o):o()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,a.mouse===!0){const n=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";q(e,"main",[[t,"mousedown","mouseStart",`passive${n}`]])}b.has.touch===!0&&q(e,"main",[[t,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const a=t.__qtouchpan;a!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&a.end(),a.handler=i.value),a.direction=I(i.modifiers))},beforeUnmount(t){const i=t.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),_(i,"main"),_(i,"temp"),b.is.firefox===!0&&k(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchpan)}}),ae=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:i}){const a=p(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:a.value},L(i.default))}}),re=C({name:"QItem",props:{...Q,...z,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:i,emit:a}){const{proxy:{$q:c}}=O(),e=T(t,c),{hasLink:n,linkAttrs:r,linkClass:s,linkTag:o,navigateOnClick:u}=R(),f=A(null),v=A(null),m=p(()=>t.clickable===!0||n.value===!0||t.tag==="label"),d=p(()=>t.disable!==!0&&m.value===!0),h=p(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(e.value===!0?" q-item--dark":"")+(n.value===!0&&t.active===null?s.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),g=p(()=>{if(t.insetLevel===void 0)return null;const l=c.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+t.insetLevel*56+"px"}});function F(l){d.value===!0&&(v.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===f.value?v.value.focus():document.activeElement===v.value&&f.value.focus()),u(l))}function K(l){if(d.value===!0&&U(l,[13,32])===!0){P(l),l.qKeyEvent=!0;const x=new MouseEvent("click",l);x.qKeyEvent=!0,f.value.dispatchEvent(x)}a("keyup",l)}function N(){const l=Y(i.default,[]);return d.value===!0&&l.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:v})),l}return()=>{const l={ref:f,class:h.value,style:g.value,role:"listitem",onClick:F,onKeyup:K};return d.value===!0?(l.tabindex=t.tabindex||"0",Object.assign(l,r.value)):m.value===!0&&(l["aria-disabled"]="true"),y(o.value,l,N())}}});export{re as Q,ie as T,ae as a,te as b,ne as c};
