"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[84631],{690674:(e,n,i)=>{var a,t,l,s,r,o,d;i.r(n),i.d(n,{default:()=>u});let c={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"inviteCode"}],kind:"Fragment",metadata:null,name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:t=[{kind:"Variable",name:"inviteCode",variableName:"inviteCode"}],concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:t,concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[l,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[s,r,o,d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},d],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}]},params:{id:"4610a8b7fe41310eb2db231b8c1171930d91f797fbc7fd321ec6682cb48a3711",metadata:{},name:"UnauthCloseupInviteUpsellQuery",operationKind:"query",text:null}};c.hash="6932152931fe069ad54b218e36e66908";let u=c;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let n=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[n]=e}}}(c.default||c)},777648:(e,n,i)=>{i.d(n,{Z:()=>l});var a=i(741983),t=i(389638);function l(e){return(0,a.ey)(e)&&((0,a.fY)(e)&&"pin"||(0,a.am)(e)&&"board"||(0,t.Z)(e)&&"profile")||null}},90647:(e,n,i)=>{i.d(n,{Z:()=>h});var a=i(667294),t=i(616550),l=i(214877),s=i(525364),r=i(5859),o=i(217058),d=i(623409),c=i(757293),u=i(773616),_=i(86264),p=i(953565),m=i(785893);function h({children:e,componentType:n,app_upsell_type:i}){let h=(0,t.TH)(),{flushContextEvents:g,logContextEvent:x}=(0,l.v)(),{viewType:y,viewParameter:v}=(0,s.SU)(),b=(0,d.Z)(),{userAgent:{platform:f}}=(0,r.B)();(0,a.useEffect)(()=>{b({action:"view",item:"download-button",within:i})},[h,i,b]);let j=(0,a.useRef)(!1);(0,a.useEffect)(()=>{y&&202!==y?(x({component:n||13106,element:10308,event_type:9976,view_type:y,view_parameter:v,aux_data:{app_upsell_type:i,app_upsell_is_dupe:j.current}}),j.current=!0):(0,p.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:n,view_type:y,view_parameter:v,app_upsell_type:i,app_upsell_is_dupe:j.current}})},[n,x,v,y,i]);let w=(0,u.Z)();return(0,a.useEffect)(()=>{w||(0,o.My)(`mweb.app_upsell.forbidden_upsell.${i}`)},[w,i]),(0,m.jsx)(_.Z,{children:a=>e({handleOpenApp:e=>{b({action:"click",item:"download-button",within:i}),(0,o.NC)("press_open_app",!0),x({component:n||13106,element:10308,event_type:102,view_type:y||202,view_parameter:v,aux_data:{app_upsell_type:i}}),x({component:n||13106,element:10308,event_type:9977,view_type:y||202,view_parameter:v,aux_data:{app_upsell_type:i}}),g(!0),a&&(x({component:n||13106,element:10308,event_type:1701,view_type:y||202,view_parameter:v,aux_data:{app_upsell_type:i}}),a(e?.deepLinkUri??(0,c.Z)(h,"android"===f),i))}})})}},465573:(e,n,i)=>{i.r(n),i.d(n,{UseCloseupInviteQuery:()=>T,default:()=>I});var a,t=i(167912),l=i(616550),s=i(883119),r=i(777648),o=i(340523),d=i(5859),c=i(608516),u=i(344064),_=i(205841),p=i(140017),m=i(48481),h=i(623409),g=i(490166),x=i(953565),y=i(785893);function v({isStoryPin:e,inviteText:n,inviterFirstName:i,isThinnerStyle:a,username:t}){let l=(0,h.Z)(),r=n.split(i);return(0,y.jsx)(s.xu,{children:(0,y.jsx)(g.Z,{onTouch:()=>{(0,x.nP)("mweb_social_unauth.closeup.social_text_click")},pressState:"none",children:(0,y.jsxs)(s.kC,{direction:"row",gap:{row:1,column:0},children:[(0,y.jsx)(s.xv,{inline:!0,size:"300",children:r[0]}),e?(0,y.jsx)(s.xv,{inline:!0,size:"300",weight:"bold",children:(0,y.jsx)(s.rU,{href:"/"+t,onClick:()=>{l({action:"click",item:"invite-profiler"})},target:"blank",children:i})}):(0,y.jsx)(s.xv,{inline:!0,size:a?"200":"300",weight:a?"normal":"bold",children:(0,y.jsx)(s.rU,{href:"/"+t,onClick:()=>{l({action:"click",item:"invite-profiler-not-story"})},target:"blank",children:i})}),(0,y.jsx)(s.xv,{inline:!0,size:a?"200":"300",children:r[1]})]})})})}function b({inviter:e,socialContextBannerStyle:n,setShouldShowSocialUpsellBanner:i}){let{shouldShowSignupUpsellText:a,isDismissible:t}=n,l=(0,p.ZP)(),{username:r}=e,o=e.imageMediumUrl,d=e.firstName,c=(0,m.Z)(),u=(0,h.Z)();return(0,y.jsx)(s.kC,{alignItems:"center",justifyContent:t?"center":"start",children:(0,y.jsx)(s.xu,{children:(0,y.jsx)(s.iP,{fullHeight:!0,onTap:()=>{u({action:"click",item:"close-button",within:"social-banner"}),c({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_desktop_unauth_social_context_banner",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}})},children:(0,y.jsxs)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(233, 228, 255, 0.9)"}},direction:"row",display:"flex",height:44,marginBottom:6,marginStart:t?0:2,marginTop:2,paddingX:t?4:2,paddingY:4,position:t?"static":"absolute",rounding:"pill",top:!0,width:t?1012:void 0,zIndex:new s.Ry(1),children:[(0,y.jsx)(s.xu,{marginBottom:8,marginEnd:1,marginTop:8,width:32,children:(0,y.jsx)(g.Z,{onTouch:e=>{e.stopPropagation(),r&&window.open("/"+r),u({action:"click",item:"user-rep",within:"social-banner"})},pressState:"none",children:o?.includes("default")?(0,y.jsx)(s.JO,{accessibilityLabel:"pinterest logo",color:"default",icon:"pinterest",size:24}):(0,y.jsx)(_.qE,{name:d,size:"fit",src:o??void 0})})}),(0,y.jsxs)(s.kC,{direction:"row",flex:"grow",children:[(0,y.jsx)(v,{inviterFirstName:d,inviteText:a?(l.bt("{{ name }} a partagé cette idée.", "{{ name }} shared this idea.", "pin.closeup.long_banner.desktop.shareNotification", undefined, true)).replace("{{ name }}",d):(l.bt("{{ name }} a partagé cette idée ", "{{ name }} shared this idea ", "pin.closeup.banner.desktop.shareNotification", undefined, true)).replace("{{ name }}",d),isStoryPin:!1,isThinnerStyle:a,username:r}),a&&(0,y.jsx)(s.xu,{marginEnd:2,marginStart:1,children:(0,y.jsx)(s.xv,{inline:!0,size:"200",weight:"bold",children:l.bt("Inscrivez-vous pour rejoindre cet utilisateur", "Sign up to join them", "pin.header.social_context_dweb", undefined, true)})})]}),t&&(0,y.jsx)(s.hU,{accessibilityLabel:"cancel",icon:"cancel",onClick:({event:e})=>{e.stopPropagation(),u({action:"dismiss",item:"close-button",within:"social-banner"}),i?.(!1)},size:"sm"})]})})})})}var f=i(554786),j=i(494125),w=i(90647),C=i(773616),k=i(667294),S=i(339001);function P({inviterFirstName:e,avatar:n,unauthReceiverlandingExpGroup:i}){let a=(0,p.ZP)(),t=(0,m.Z)(),l=(0,h.Z)(),r=(0,f.ml)(),[o,d]=(0,k.useState)("enabled_top_banner"===i);return o&&(0,y.jsxs)(s.xu,{alignContent:"center",alignSelf:"center",borderStyle:"shadow",color:"default",display:"flex",flex:"grow",marginBottom:3,marginEnd:2,marginStart:2,marginTop:3,maxWidth:400,minWidth:r?"":400,padding:4,position:"relative",rounding:4,children:[(0,y.jsx)(s.xu,{marginEnd:2,children:(0,y.jsx)(_.qE,{name:e,size:"md",src:n??void 0})}),(0,y.jsxs)(s.xu,{marginStart:2,children:[(0,y.jsx)(s.xu,{marginBottom:1,marginTop:1,children:(0,y.jsx)(s.xv,{color:"default",weight:"bold",children:(0,S.nk)(a.bt("Vous avez aimé cette idée de {{ name }} ?", "Loving this idea from {{ name }}?", "mweb.pin.inviteCard.inviteCopy", undefined, true),{name:e||""})})}),(0,y.jsx)(s.kC,{alignItems:"stretch",justifyContent:"start",children:(0,y.jsx)(s.xv,{inline:!0,underline:!0,children:(0,y.jsx)(s.iP,{onTap:()=>{l({action:"click",item:"unauth-social-banner-text"}),t({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:"social-text"})},children:a.bt("Commencez à enregistrer vos propres idées", "Start saving your own ideas", "mweb.pin.inviteCard.inviteCopy", undefined, true)})})}),(0,y.jsx)(s.xu,{"data-test-id":"close-unauth-social-top-banner",marginEnd:2,marginStart:4,marginTop:2,position:"absolute",right:!0,top:!0,children:(0,y.jsx)(s.hU,{accessibilityLabel:a.bt("icône fermeture arrière-plan", "close icon background", "accesibility label for close icon on a overlay", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:()=>{d(!1)},size:"sm"})})]})]})}function E({inviter:{imageMediumUrl:e,username:n,firstName:i},isStoryPin:a,unauthReceiverlandingExpGroup:t}){let l=(0,p.ZP)(),r=(0,m.Z)();(0,j.Z)(()=>{"enabled_signup_modal"===t&&r({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:"unauth_social_signup_modal",mobileOptions:void 0})});let o=()=>(0,x.nP)("mweb_social_unauth.closeup.avatar_click"),d=(0,C.Z)(),c=(0,h.Z)(),u=(0,f.ml)(),b=(l.bt("{{ name }} a partagé cette idée", "{{ name }} shared this idea", "pin.closeup.header.shareNotification", undefined, true)).replace("{{ name }}",n),k="undefined"!=typeof window&&window.innerWidth<360,S=n.length>25,E=u?(0,y.jsx)(P,{avatar:e,inviterFirstName:i,unauthReceiverlandingExpGroup:t}):(0,y.jsx)(s.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:(0,y.jsx)(P,{avatar:e,inviterFirstName:i,unauthReceiverlandingExpGroup:t})}),A="enabled_top_banner"===t||"enabled_signup_modal"===t?E:(0,y.jsx)(g.Z,{pressState:"none",children:(0,y.jsxs)(s.kC,{alignItems:"center",gap:4,justifyContent:"start",minHeight:80,children:[(0,y.jsx)(s.xu,{marginBottom:4,marginStart:0,marginTop:4,width:48,children:(0,y.jsx)(g.Z,{onTouch:o,pressState:"none",children:(0,y.jsx)(_.qE,{name:i,src:e??void 0})})}),(0,y.jsx)(s.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:(0,y.jsx)(s.xu,{marginStart:0,children:(0,y.jsx)(v,{inviterFirstName:i,inviteText:(l.bt("{{ name }} a partagé cette idée avec vous", "{{ name }} shared this idea with you", "pin.closeup.header.shareNotification", undefined, true)).replace("{{ name }}",i),isStoryPin:a,isThinnerStyle:!1,username:n})})})]})});return d&&a&&!t?.startsWith("enabled")?(0,y.jsxs)(s.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"center",minHeight:S?100:80,children:[(0,y.jsx)(s.xu,{marginBottom:4,marginTop:4,width:40,children:(0,y.jsx)(g.Z,{onTouch:o,pressState:"none",children:(0,y.jsx)(_.qE,{name:i,size:"fit",src:e??void 0})})}),(0,y.jsx)(s.kC.Item,{flex:"grow",children:(0,y.jsxs)(s.xu,{alignItems:"center",direction:S?"column":"row",display:"flex",justifyContent:S?"start":"between",padding:S?3:0,children:[(0,y.jsxs)(s.kC,{alignItems:"start",direction:"column",gap:{row:0,column:1},wrap:!k,children:[(0,y.jsx)(s.kC,{children:(0,y.jsxs)(s.xv,{align:S?"center":"start",children:[(0,y.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,y.jsx)(s.rU,{display:"inlineBlock",href:`/${n??""}/`,onClick:()=>{c({action:"click",item:"invite-profiler"})},target:"blank",underline:"hover",children:n})}),b.split(n)[1]]})}),!S&&(0,y.jsx)(s.xv,{size:"100",children:l.bt("Ouvrez Pinterest pour en découvrir plus", "Open Pinterest to see more", "unauth.mweb.shared.banner.edu", undefined, true)})]}),(0,y.jsx)(s.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:S?3:0,minWidth:S?0:100,children:(0,y.jsx)(w.Z,{app_upsell_type:"social-context-header",componentType:14161,children:({handleOpenApp:e})=>(0,y.jsx)(s.zx,{onClick:()=>e(),size:"md",text:l.bt("Ouvrir l’application", "Open app", "unauth.mweb.shared.banner.cta", undefined, true)})})})]})})]}):A}let A=void 0!==a?a:a=i(690674),T=({children:e,variables:n})=>e((0,t.useLazyLoadQuery)(A,n));function I({inviterFirstNameRef:e,isDesktop:n,isStoryPin:i,setShouldShowSocialUpsellBanner:a,socialContextBannerStyle:t}){let{isAuthenticated:_}=(0,d.B)(),{checkExperiment:p}=(0,o.F)(),m=(0,l.TH)();return(0,y.jsx)(c.Z,{children:(0,y.jsx)(u.ty,{children:l=>l?(0,y.jsx)(T,{variables:{inviteCode:l},children:l=>{let{firstName:o,imageMediumUrl:d,username:c}=l.v3GetInviteCodeQuery?.data?.sender??Object.freeze({});if(!o||!c)return null;e&&(e.current=o);let u=!_&&"pin"===(0,r.Z)(m)&&!n&&p("unauth_mweb_pin_social_landing").group||"";return n?(0,y.jsx)(b,{inviter:{firstName:o,imageMediumUrl:d,username:c},setShouldShowSocialUpsellBanner:a,socialContextBannerStyle:t??{isDismissible:!0,shouldShowSignupUpsellText:!0}}):(0,y.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:u.startsWith("enabled")?"":"0 1px 0 0 rgba(0, 0, 0, 0.08)"}},marginEnd:-2,marginStart:-2,paddingX:2,children:(0,y.jsx)(E,{inviter:{firstName:o,imageMediumUrl:d,username:c},isStoryPin:!!i,unauthReceiverlandingExpGroup:u||""})})}}):null})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-www-closeup-duplo-unauth-UnauthCloseupInviteUpsell.fr-6b79c54cddf3835b.mjs.map