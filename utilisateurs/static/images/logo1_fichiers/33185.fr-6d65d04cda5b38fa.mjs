"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33185],{197059:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(616550),n=i(807657),a=i(554786);function s(){let e=(0,o.k6)(),t=(0,a.HG)();return i=>{t?(0,n.Z)(i,{disableOriginCheck:!0}):e.push(i)}}},399404:(e,t,i)=>{i.d(t,{Z:()=>o});let o=(e,t)=>{let i=new Date;return new Date(1e3*e)<=new Date(i.getFullYear()-(t||18),i.getMonth(),i.getDate())}},53162:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(785893);function n({size:e}){return(0,o.jsx)("svg",{height:e,viewBox:"0 0 512 512",width:e,xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,o.jsx)("path",{d:"M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",fill:"#4285f4"}),(0,o.jsx)("path",{d:"M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",fill:"#34a853"}),(0,o.jsx)("path",{d:"M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",fill:"#fbbc05"}),(0,o.jsx)("path",{d:"M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",fill:"#ea4335"}),(0,o.jsx)("path",{d:"M20 20h472v472H20V20z"})]})})}},640258:(e,t,i)=>{i.d(t,{Z:()=>n});let o=e=>(e||"").replace(/-/g,"+").replace(/_/g,"/"),n=e=>JSON.parse(decodeURIComponent(atob(o(e.split(".")[1])).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")))},407996:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(883119),n=i(140017),a=i(785893);let s=({isInModal:e})=>{let t=(0,n.ZP)();return(0,a.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new o.Ry(1),children:(0,a.jsx)(o.$j,{accessibilityLabel:t.bt("Chargement...", "Loading", "Full page loading state", undefined, true),show:!0})})}},758939:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(729817),n=i(217058);async function a(e){let t=await (0,o.Kw)(),i=t?{user_ids:Object.keys(t)}:{};(0,n.tj)(`mweb_multiple_accounts_${e}`,i)}},373236:(e,t,i)=>{i.d(t,{eN:()=>d,_:()=>_,kB:()=>u});var o=i(702497),n=i(624797),a=i(940910),s=i(616550);let r=["/resource/:name/:method/","/resource/commerce/:name/:method/","/:username/pins/follow/","/email/remove/","/about/trademark/:claim_type/","/about/copyright/dmca-pin/web-result/:id/","/about/copyright/dmca-pin/pin/:id/","/about/copyright/dmca-pin/","/about/koplg/","/about/:lawName/","/about/radtc/","/website/confirm/","/oauth/","/app-factory-oauth/","/settings/extension/uninstall/","/offsite/","/amp/(.*)"],l=(e,t)=>{let i=new URL(e,t);return r.some(e=>!!(0,s.LX)(i.pathname,{path:e,exact:!0}))};var c=i(953565);let d=e=>e&&(0,n.Qg)(e)&&o.lfe!==e?(0,n.Qc)(e).relative:"/",u=(e,t)=>{let i=(0,n.Jx)(e);return l(i,t)||(0,a.Z)(i)===n.vx.TRUSTED_DIFFERENT_ORIGIN},_=({forceFullPageNavigation:e,history:t,next:i,noLocationReplace:o,origin:a})=>{let s=(0,n.Jx)(i);u(i,a)||!t||e?(e&&(0,c.nP)("webapp.duplo.navigateOnLogin.forceFullPageNavigation",{sampleRate:1}),window.location.assign(s)):o?t.push(d(s)):t.replace(d(s))}},913870:(e,t,i)=>{i.d(t,{Z:()=>x});var o=i(667294),n=i(883119),a=i(640258),s=i(897650),r=i(974371),l=i(340523),c=i(5859),d=i(217058),u=i(623409),_=i(140017),p=i(53162),g=i(472980),h=i(963773),m=i(785893);function b(){let e=(0,_.ZP)(),[t,i]=(0,o.useState)();return(0,g.Z)()?null:(0,m.jsxs)(n.xu,{position:"relative",children:[(0,m.jsx)(n.iP,{onTap:()=>i(!0),children:(0,m.jsxs)(n.xu,{alignItems:"center",color:"secondary",display:"flex",height:40,justifyContent:"center",position:"relative",rounding:"pill",children:[(0,m.jsx)(n.xu,{height:24,marginTop:1,width:24,children:(0,m.jsx)(p.Z,{size:20})}),(0,m.jsx)(n.xu,{marginStart:2,children:(0,m.jsx)(n.xv,{weight:"bold",children:e.bt("Se connecter avec Google", "Connect with Google", "googleConnectButtonWithDisabledSDK.buttonText", undefined, true)})})]})}),t&&(0,m.jsx)(h.Z,{onDismiss:()=>i(!1),type:"google"})]})}function f({onGoogleConnectSuccess:e,onTouch:t}){let{locale:i}=(0,c.B)(),l=(0,o.useRef)(null),_=(0,r.M)(),p=(0,o.useRef)(e),g=(0,u.Z)();return(0,o.useEffect)(()=>{p.current=e},[e]),(0,o.useEffect)(()=>{let e=({credential:e,select_by:t})=>{(0,d.My)(`unauth_mweb.gsi_button.select_by.${t}`),(0,d.NC)("press_google_connect_button");let i=(0,a.Z)(e);p.current({google_open_id_token:e,autologin:!1},{type:"google",google_open_id_token:e,first_name:i.given_name,last_name:i.family_name,image_url:i.picture})};return(async()=>{await _?.ensureInit("button",e),(0,s.ru)({buttonRef:l,isDesktop:!1,locale:i,onTouch:t})})(),()=>{_?.removeButtonCallback(e)}},[_,i]),(0,m.jsx)(n.xu,{position:"relative",children:(0,m.jsx)(n.iP,{onTap:()=>{g({action:"click",item:"google-connect-button"}),(0,d.EX)({event:"start",provider:"google"})},children:(0,m.jsx)(n.xu,{"aria-label":"GOOGLE_SIGNIN_BUTTON",height:44,children:(0,m.jsx)(n.xu,{ref:l,width:"100%"})})})})}function x({onGoogleConnectSuccess:e,onTouch:t}){let{checkExperiment:i}=(0,l.F)(),{anyEnabled:o}=i("mweb_google_disabled");return o?(0,m.jsx)(b,{}):(0,m.jsx)(f,{onGoogleConnectSuccess:e,onTouch:t})}},295923:(e,t,i)=>{i.d(t,{Z:()=>b});var o=i(667294),n=i(883119),a=i(922719),s=i(406893);let r={yellow:"#FAB904",orange:"#FF6400",green:"#0FA573",blue:"#0074e8",purple:"#B469EB"},l="DelightfulBubbles__",c=(e,t)=>{let i=e.length,o=e.indexOf(t)+1>=i?0:e.indexOf(t)+1;return e[o]},d=[`${l}fadeIn {
  to {
    opacity: 1;
  }
}
`,`${l}growShrink {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`,`${l}swirl {
  0% {
    transform: rotate(0deg) translateX(-50%);
  }
  100% {
    transform: rotate(-360deg) translateX(-50%);
  }
}
`,...(()=>{let e=Object.keys(r);return e.map(t=>{let i=c(e,t);return`${l}colorChange_${t} {
      0% {
        background-color: ${r[t]};
      }
      50% {
        background-color: ${r[i]};
      }
    }
    `})})()],u=(0,a.Ll)(d),_=(e,t,i,o,n,a,s,c)=>({bubblePositionStyles:{position:"absolute",marginLeft:`${a/2-n}px`,marginTop:`${i/2-n}px`,left:`${s}px`,top:`${c}px`},bubbleSwirlStyles:{animation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`,WebkitAnimation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`},bubbleGrowShrinkStyles:{transform:"scale(0)",WebkitTransform:"scale(0)",animation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`,WebkitAnimation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`},bubbleShapeStyles:{height:`${t}px`,width:`${t}px`,borderRadius:"50%",backgroundColor:r[o],opacity:0,animation:`${l}colorChange_${o} 12s steps(1, start) ${e}s infinite forwards,
      ${l}fadeIn 3s linear ${e}s 1 forwards`,WebkitAnimation:`${l}colorChange_${o} 12s steps(1, start) ${e}s infinite forwards,
      ${l}fadeIn 3s linear ${e}s 1 forwards`}});var p=i(785893);function g(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let h=e=>{let{delay:t,diameter:i,height:o,initialColor:a,width:s,xOffset:r,yOffset:l}=e,c=Math.floor(i/2),d=_(t,i,o,a,c,s,r,l);return(0,p.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubblePositionStyles},children:(0,p.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleSwirlStyles},children:(0,p.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleGrowShrinkStyles},children:(0,p.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleShapeStyles}})})})})};class m extends o.Component{constructor(...e){super(...e),g(this,"state",{isInitialized:!1})}componentDidMount(){window.requestAnimationFrame(()=>{this.setState({isInitialized:!0})})}shouldComponentUpdate(e,t){return e.numBubbles!==this.props.numBubbles||!t.isInitialized===this.state.isInitialized}getSize(){let{width:e,height:t}=this.props;return void 0!==e&&void 0!==t?{width:e,height:t}:this.containerElement?{height:this.containerElement.offsetHeight,width:this.containerElement.offsetWidth}:{height:void 0,width:void 0}}createBubbles(e,t){let{delayFactor:i,delayOffset:o,numBubbles:n,xRadiusAdjustment:s,yRadiusAdjustment:l}=this.props,c=e+2*l,d=t+2*s,u=[],_=Object.keys(r);for(let s=0;s<n;s+=1){let n=16+(0,a.XF)(-4,4),r=_[s%_.length],{x:l,y:g}=(0,a.CC)(c,d);u.push((0,p.jsx)(h,{delay:s*i+o,diameter:n,height:e,initialColor:r,width:t,xOffset:l,yOffset:g},s))}return u}render(){let{isDesktop:e}=this.props,{height:t,width:i}=this.getSize();return(0,p.jsxs)(n.xu,{height:t,position:"relative",width:i,children:[(0,p.jsx)(s.Z,{unsafeCSS:u}),(0,p.jsxs)(n.xu,{ref:e=>this.containerElement=e,position:e?void 0:"absolute",children:[this.state.isInitialized&&this.createBubbles(t||0,i||0),(0,p.jsx)(n.xu,{position:"relative",children:this.props.children})]})]})}}g(m,"defaultProps",{numBubbles:10,xRadiusAdjustment:0,yRadiusAdjustment:0,delayFactor:1,delayOffset:0});let b=m},310822:(e,t,i)=>{i.d(t,{R:()=>p,Z:()=>g});var o=i(667294),n=i(883119),a=i(22724),s=i(549629),r=i(140017),l=i(5859),c=i(407996),d=i(407053),u=i(295923),_=i(785893);let p=e=>new Set([...d.EU,...d.rT,...d.IO]).has(e);function g({isReducedHeader:e,progressBarAnimationDuration:t}){let i=(0,r.ZP)(),{country:d}=(0,l.B)(),g=p(d);return(0,_.jsx)(o.Fragment,{children:g?(0,_.jsx)(s.Z,{log:{view_type:10,view_parameter:259},children:(0,_.jsxs)(n.xu,{bottom:!0,color:"default",left:!0,position:"fixed",right:!0,top:!0,width:"100%",children:[(0,_.jsx)(a.Z,{color:"dark",duration:t||3e3,finalProgress:95}),(0,_.jsxs)(n.kC,{alignItems:"stretch",direction:"column",height:"100%",justifyContent:"start",children:[(0,_.jsxs)(n.xu,{"data-test-id":"account-creation-heading",margin:10,children:[(0,_.jsx)(n.X6,{overflow:"normal",size:e?"500":"600",children:i.bt("La création de votre compte est en cours.", "Your account is being created!", "account created heading", undefined, true)}),(0,_.jsx)(n.xv,{overflow:"normal",children:i.bt("Vous pouvez désormais enregistrer des idées, obtenir des recommandations personnalisées et bien plus encore", "You can now save ideas, get personalized recommendations, and more", "loading state description while waiting for any sign up registration to complete", undefined, true)})]}),(0,_.jsx)(n.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,_.jsx)(u.Z,{delayOffset:-5,isDesktop:!1,xRadiusAdjustment:40,yRadiusAdjustment:40,children:(0,_.jsx)(n.xu,{alignItems:"center",color:"lightWash",direction:"column",display:"flex",height:120,justifyContent:"end",overflow:"hidden",rounding:"circle",width:120,children:(0,_.jsx)(n.JO,{accessibilityLabel:i.bt("Chargement...", "Loading", "Loading state for any sign up registration", undefined, true),color:"subtle",icon:"person",size:"90"})})})})]})]})}):(0,_.jsx)(c.Z,{})})}},27460:(e,t,i)=>{i.d(t,{f:()=>D,l:()=>R});var o=i(667294),n=i(545007),a=i(216167),s=i(224796),r=i(587703),l=i(658583),c=i(622541),d=i(305657),u=i(957753),_=i(769666),p=i(739670),g=i(508218),h=i(340523),m=i(182962),b=i(891276),f=i(5859),x=i(107905),w=i(731714),y=i(191313),v=i(217058),k=i(722363),j=i(255797),S=i(407053),E=i(758939),C=i(373236),A=i(926234),Z=i(844998),P=i(67661),I=i(953565);let z=e=>({type:"AUTHENTICATE_USER",payload:{user:e}}),D=()=>{let e=(0,r.Z)(),t=(0,h.F)(),i=(0,n.I0)(),{country:D,countryFromHostName:R,countryFromIp:T,regionFromIp:O,userAgent:{isTablet:$,isMobile:F}}=(0,f.B)(),L=(0,m.Z)(),B=(0,k.Z)();return(0,o.useCallback)(async(o,n,r="/",h={isAutologin:!1,isSwitchAccount:!1,noLocationReplace:!1,recaptchaV3Token:"default",noImmediateRedirect:!1,useAlternativeResourceCall:!1,trigger:"other",accountUnlinked:!1},m)=>{L();let f=!$&&!F,{isAutologin:k,isSwitchAccount:N,noLocationReplace:G,recaptchaV3Token:H,noImmediateRedirect:U,useAlternativeResourceCall:M,trigger:X,accountUnlinked:Y}=h;w.Z.setItem(s.V6,(0,g.nY)(o));let K=t=>{e({...m,event_type:t,aux_data:{...m.aux_data,upsell_reason:m.aux_data?.upsell_reason||(k?"autologin":w.Z.getItem(s.bg)||null),upsell_view_count:w.Z.getItem(s.w0)||0}}),7536===t&&w.Z.setItem(s.w0,0)},W={get_user:!0,...o,app_type_from_client:6,recaptchaV3Token:H},J=(0,P.t_)();J&&(W={...W,visited_pages_before_login:J});let V=(0,A.O)();V&&(W={...W,referrer:V});let q=a.Z.create("UserSessionResource",W).callCreate();if(M&&o.username_or_email&&o.password){let e=new FormData;e.append("username",o.username_or_email),e.append("password",o.password),q=fetch("/resource/UserSessionResource/create/",{method:"POST",body:e,credentials:"include",headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":(0,d._V)()||"","X-Requested-With":"XMLHttpRequest"}}).then(e=>{if(200!==e.status)throw Error(e.statusText);return e.json()}).catch(e=>Promise.reject(e))}try{k?(0,v.dy)({event:"login_api_call_start",provider:o.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_start",provider:(0,g.nY)(o)}),K(7534),B({action:k?"autologin":"login",event:"attempt",type:(0,g.lp)(o),trigger:X});let e=await q;k?(0,v.dy)({event:"login_api_call_success",provider:o.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_success",provider:(0,g.nY)(o)}),i(z(e.resource_response.data.user));let a=e.client_context,s=e.resource_response.data.user.gatekeeper_experiments;if(s){let{active:e,triggerable:i}=s;e&&i||(0,I.nP)("webapp.authentication.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!e),triggerable:String(!!i)}}),t.updateExperiments(e,i)}else(0,I.nP)("webapp.authentication.updateExperimentsFailed");a&&a.placed_experiences&&i((0,u.OD)(a.placed_experiences)),(0,E.Z)("authentication.login_success"),g.ZP.storeLoginCredentialsToBrowser(o),K(7536),B({action:k?"autologin":"login",event:"success",type:(0,g.lp)(o),trigger:X}),(0,_.Z)(),l.zN(c.e7.name),l.zN(c.x3.name),(0,y.Nh)(S.AA,1),"/"!==r&&(0,Z.E)(!0),N?(0,x.Z)().then(()=>{let t=`/${e.resource_response.data?.user.username||""}`+(Y?`?message=${p.aU}`:"");window.location.href=t}):k&&!f||U||(!o.google_open_id_token&&f&&t.checkExperiment("dweb_arr_modal_post_fb_login").anyEnabled&&(0,j.I9)(),(0,C._)({forceFullPageNavigation:f,history:n,next:r,noLocationReplace:G,origin:window.location.toString()})),"facebook"===(0,g.nY)(o)&&!f&&t.checkExperiment("mweb_arr_modal_post_fb_login").anyEnabled&&(0,j.I9)(),(0,b.ko)({country:D,countryFromHostName:R,countryFromIp:T,regionFromIp:O,deviceType:"Mobile",eventCategory:"Logins"})}catch(e){if(k?(0,v.dy)({event:"login_api_call_failure",provider:o.google_open_id_token?"google":"facebook"}):(0,v.EX)({event:"login_api_call_failure",provider:(0,g.nY)(o)}),1201!==e.api_error_code||k||f)throw K(7535),B({action:k?"autologin":"login",event:"fail",type:(0,g.lp)(o),trigger:X}),N&&(0,E.Z)("authentication.login_error"),e;if(n){let t={creds:o,next:r,phoneNumber:e?.data?.phone_number_end};n.push({pathname:"/login/mfa/",state:t})}}},[i,D,R,T,L,t,F,$,e,O,B])},R=()=>{let e=(0,h.F)(),t=(0,n.I0)(),i=(0,m.Z)();return({client_context:o,resource_response:n})=>{let{data:a}=n;a&&(i(),t(z(a.user)));let s=a.user.gatekeeper_experiments;if(s){let{active:t,triggerable:i}=s;t&&i||(0,I.nP)("webapp.crossDomainAutologin.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!t),triggerable:String(!!i)}}),e.updateExperiments(t,i)}else(0,I.nP)("webapp.crossDomainAutologin.updateExperimentsFailed");o&&t((0,u.OD)(o.placed_experiences))}}},615208:(e,t,i)=>{i.d(t,{m:()=>D});var o=i(545007),n=i(216167),a=i(224796),s=i(324358),r=i(587703),l=i(658583),c=i(622541),d=i(976731),u=i(957753),_=i(769666),p=i(916963),g=i(96452),h=i(321725),m=i(340523),b=i(182962),f=i(891276),x=i(5859),w=i(107905),y=i(731714),v=i(573810),k=i(217058),j=i(722363),S=i(758939),E=i(926234),C=i(191313),A=i(407053),Z=i(310822),P=i(67661),I=i(953565);let z=e=>({type:"REGISTER_USER",payload:{user:e}}),D=()=>{let e=(0,m.F)(),t=(0,o.I0)(),{country:i,countryFromHostName:D,countryFromIp:R,regionFromIp:T,isAuthenticated:O}=(0,x.B)(),$=(0,b.Z)(),F=(0,r.Z)(),L=(0,j.Z)();return(o,{signupAttemptContextEvent:r})=>{let m=(0,h.yV)(o),b=e=>{F({...r,event_type:e,aux_data:{...r.aux_data,upsell_reason:r.aux_data?.upsell_reason||y.Z.getItem(a.bg)||null,upsell_view_count:y.Z.getItem(a.w0)||0}}),7487===e&&y.Z.setItem(a.w0,0)};b(7537),L({action:"signup",event:"attempt",type:m}),$();let x=0,j=(0,Z.R)(i),B=new Promise(e=>{j?setTimeout(()=>{e(void 0)},3e3):e(void 0)});return new Promise((a,r)=>{let y=()=>{let j=(0,P.t_)(),Z=(0,E.O)(),$={...o,user_behavior_data:function(e){let t={};return e.forEach(e=>{let i=JSON.parse((0,C.qn)(e));i&&(t[e]=i)}),JSON.stringify(t)}([A.E9]),visited_pages:j},F=(0,p.Z)({checkExperiment:e.checkExperiment});F.length>0&&($={...$,privacy_disclaimer_acknowledge:F}),Z&&($={...$,referrer:Z}),(0,I.nP)("webapp.debug_signup_type.redux_registration",{sampleRate:1,tags:{CHECK_TYPE:(0,h.Eh)($,"CHECK_TYPE")??"none",CHECK_EXISTS:(0,h.Eh)($,"DEPRECATED_CHECK_EXISTS"),CHECK_TRUTHY:(0,h.Eh)($,"DEPRECATED_CHECK_TRUTHY")}}),n.Z.create("UserRegisterResource",{...$,get_user:!0}).callCreate().then(n=>B.then(()=>{(0,v.L_)("d_pif_invite");let r=n.client_context;t(z(n.resource_response.data.user));let l=n.resource_response.data.user.gatekeeper_experiments;if(l){let{active:t,triggerable:i}=l;t&&i||(0,I.nP)("webapp.registration.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!t),triggerable:String(!!i)}}),e.updateExperiments(t,i)}else(0,I.nP)("webapp.registration.updateExperimentsFailed");r&&r.placed_experiences&&t((0,u.OD)(r.placed_experiences)),O&&(0,S.Z)("registration.signup_success");let{email:c,username:d,password:p}=o,g=c||d||null,h=p||null,{credentials:x}=navigator;if(x&&g&&h)try{let e=new window.PasswordCredential({id:g,password:h});(0,k.My)("unauth_mweb.navigatorCredentials.store.attempt"),x.store(e).then(()=>{(0,k.My)("unauth_mweb.navigatorCredentials.store.success")})}catch(e){(0,k.My)("unauth_mweb.navigatorCredentials.store.error")}b(7487),L({action:"signup",event:"success",type:m}),(0,s.Z)(),(0,_.Z)(),O&&(0,w.Z)(),(0,f.ko)({country:i,countryFromHostName:D,countryFromIp:R,regionFromIp:T,deviceType:"Mobile",eventCategory:"NewUsers"}),a()})).catch(e=>{let t=(0,d.Z)(e,"api_error_code");t===g.tz&&((0,k.My)("multi_step_set_age_restrict_cookie"),l.t8(c.It,"1",(0,l.kZ)(c.It))),x<3&&[g.dO,g.cZ].includes(t??0)?(x+=1,y()):(b(7488),L({action:"signup",event:"fail",type:m}),O&&(0,S.Z)("registration.signup_error"),r(e))})};y()})}}},963773:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),n=i(930837),a=i(140017),s=i(785893);function r({type:e,onDismiss:t}){let i=(0,a.ZP)(),r="facebook"===e?i.bt("Désolé ! Facebook n’est pas disponible", "Oops! Facebook isn't available", "socialAuthDisabled.facebook.title", undefined, true):i.bt("Désolé ! Google n’est pas disponible", "Oops! Google isn't available", "socialAuthDisabled.google.title", undefined, true),l="facebook"===e?i.bt("Il semblerait que Facebook n’est pas disponible pour l’instant. Essayez une autre option ou actualisez l’application et réessayez plus tard.", "Looks like Facebook isn't available right now. Give another option a try or refresh the page and try again later.", "socialAuthDisabled.facebook.description", undefined, true):i.bt("Il semblerait que Google n’est pas disponible pour l’instant. Essayez une autre option ou actualisez l’application et réessayez plus tard.", "Looks like Google isn't available right now. Give another option a try or refresh the page and try again later.", "socialAuthDisabled.google.description", undefined, true);return(0,s.jsx)(n.ZP,{accessibilityModalLabel:"",isOpen:!0,mobileHideCloseIcon:!0,onDismiss:t,type:"social_auth_disabled_modal",children:(0,s.jsxs)(o.xu,{padding:5,children:[(0,s.jsx)(o.xu,{marginBottom:3,children:(0,s.jsx)(o.X6,{accessibilityLevel:1,size:"500",children:r})}),(0,s.jsx)(o.xu,{marginBottom:3,children:(0,s.jsx)(o.xv,{children:l})}),(0,s.jsx)(o.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:(0,s.jsx)(o.xu,{paddingY:1,children:(0,s.jsx)(o.zx,{accessibilityLabel:i.bt("Ok", "OK", "socialAuthDisabled.okButton", undefined, true),color:"red",onClick:t,size:"lg",text:i.bt("Ok", "OK", "socialAuthDisabled.okButton", undefined, true)})})})]})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/33185.fr-6d65d04cda5b38fa.mjs.map