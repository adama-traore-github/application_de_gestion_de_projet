"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[29541],{97032:(e,t,i)=>{i.d(t,{default:()=>I});var s=i(667294),a=i(782677),n=i(883119),r=i(216167),o=i(25919),l=i(140017),d=i(339001),c=i(827625),h=i(638365),u=i(708171),_=i(81149),p=i(785893);let g=e=>({duration:5e3,thumbnail:(0,p.jsx)(n.xu,{"data-test-id":"pin-save-toast",height:48,width:48,children:(0,p.jsx)(_.Z,{boardId:e})})});var m=i(454514),f=i(149722);function y({boardId:e,hideToast:t,pinId:i,originalPinId:s}){let a=(0,l.ZP)(),r=(0,f.Z)();return(0,p.jsx)(m.ZP,{duration:5e3,onHide:t,primaryAction:{accessibilityLabel:a.bt("Bouton Modifier l’Épingle enregistrée", "Change saved Pin button", "RepinRequest.a11yChangeButton", undefined, true),href:`/pin/${i}/repin/?isEditingPin=true&pinBoardId=${e??""}&&isFromToast=true&&originalPinId=${s??""}`,label:a.bt("Modifier", "Change", "RepinRequest.ChangeButton", undefined, true),size:"lg",onClick:t,role:"link"},text:(0,p.jsxs)(n.xv,{children:[(0,p.jsx)(n.xv,{inline:!0,children:a.bt("Enregistrée dans ", "Saved to ", "RepinRequest.ProfileSaveToastText", undefined, true)}),(0,p.jsx)(n.xv,{inline:!0,weight:"bold",children:(0,p.jsx)(n.rU,{display:"inlineBlock",href:r.isAuth?`/${r.username}/_saved`:"/",target:"self",underline:"hover",children:a.bt("Profil", "Profile", "RepinRequest.ProfileSaveToastText.Profile", undefined, true)})})]}),thumbnail:{icon:(0,p.jsx)(n.JO,{accessibilityLabel:a.bt("Profil", "Profile", "RepinRequest.ProfileIcon", undefined, true),icon:"history",size:22})}})}var v=i(117512),b=i(539426);let x="RepinResource",P=({board:e,section:t})=>{let i=(0,l.ZP)(),a="quick_saves"===e.layout?i.bt("Profil", "Profile", "EditPin.Quicksaves.BoardName", undefined, true):e.name;return t?(0,d.nk)(i.bt("Enregistrée dans le sous-tableau {{sectionName}} du tableau {{boardName}}", "Saved to {{sectionName}} in {{boardName}}", "Toast for successfully saving to a section within a board", undefined, true),{sectionName:t&&t.title,boardName:e.name}).join(""):(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(n.xv,{color:"default",children:i.bt("Enregistrée dans", "Saved to", "Saved to {{ boardName }}", undefined, true)}),(0,p.jsx)(n.xv,{color:"default",weight:"bold",children:a})]})};class I{constructor({boardId:e,dispatch:t,history:i,isOneTapSave:s=!1,isQuickSave:n=!1,onSuccess:r,originalPinId:o,pinId:l,section:d,showNewUserSavetoProfileAnimation:c=!1,showRepinToasts:u,trackingParams:_,userId:p,viewType:g,historyPush:m,suggestedBoardIds:f,savePinId:y,eventContext:v=null,pinData:{trackingParams:P,viewParameter:I,pinnedToBoardId:S}}){var T,A,E;T="_getNormalizedResponse",A=e=>(0,a.Fv)(e.resource_response.data,b.Z[x]),(T="symbol"==typeof(E=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(T,"string"))?E:String(E))in this?Object.defineProperty(this,T,{value:A,enumerable:!0,configurable:!0,writable:!0}):this[T]=A,this.boardId=e,this.trackingParams=_,this.clientTrackingParams=(0,h.Z)(_.clientTrackingParams||"",P),this.dispatch=t,this.history=i,this.onSuccess=r,this.originalPinId=o,this.pinId=l,this.pinnedToBoardId=_.pinnedToBoardId||(S??""),this.showNewUserSavetoProfileAnimation=c,this.showRepinToasts=u,this.section=d,this.isOneTapSave=s,this.isQuickSave=n,this.userId=p,this.viewType=g??3,this.historyPush=m,this.suggestedBoardIds=f,this.savePinId=y,this.pinViewParameter=I,this.eventContext=v}get resourceOptions(){return{pin_id:this.pinId,board_id:this.boardId,section:this.section?.id,clientTrackingParams:this.clientTrackingParams,user_id:this.userId}}get trackingData(){return{event_type:5,element:this.isOneTapSave?10599:void 0,view_type:this.viewType,component:this.isOneTapSave?0:7,view_parameter:this.isOneTapSave?3173:this.pinViewParameter,object_id_str:this.pinId,clientTrackingParams:this.clientTrackingParams,aux_data:{board_id:this.pinnedToBoardId,destination_board_id:this.boardId,is_profile_save:!this.boardId,pin_id:this.pinId,suggested_boards:this.suggestedBoardIds}}}_createRepin(){let e=null!==this.eventContext&&void 0!==this.eventContext?{...this.resourceOptions,eventContext:this.eventContext}:this.resourceOptions;return r.Z.create(x,{...e,disable_event_log_info:!0}).callCreate()}processRepin(e){return this._createRepin().then(t=>{this.onSuccess&&this.onSuccess();let i=t.resource_response.data,{board:s}=i,{isQuickSave:a,originalPinId:r,showNewUserSavetoProfileAnimation:d}=this,h=this._getNormalizedResponse(t);if(this.dispatch((0,c.XM)(x,this.resourceOptions,t,h)),this.savePinId(this.resourceOptions.pin_id,i.id),this.originalPinId&&this.originalPinId!==this.resourceOptions.pin_id){let e={...this.resourceOptions,pin_id:this.originalPinId};this.dispatch((0,c.XM)(x,e,t,h)),this.savePinId(this.originalPinId||"",i.id)}this.dispatch((0,v.M)(i.id,s.id,this.section?this.section.id:void 0,this.userId));let{showRepinToasts:_}=this;return _&&_(({hideToast:e})=>{if(a&&!d)return(0,p.jsx)(y,{boardId:i.board.id,hideToast:e,originalPinId:r,pinId:i.id});let{thumbnail:t}=g(s.id);return(0,p.jsx)(u.Z,{button:d&&(0,p.jsx)(l.oz,{children:e=>(0,p.jsx)(n.zx,{fullWidth:!0,onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),this.historyPush(`/pin/${i.id}/repin/?isEditingPin=true&pinBoardId=${s.id}&&isFromToast=true&&originalPinId=${r??""}`)},text:e.bt("Organiser", "Organize", "RepinRequest.OrganizeButton", undefined, true)})}),href:this.section?`${s.url}${this.section.slug??""}`:s.url,isRepinToExistingBoard:!0,onHide:e,text:(0,p.jsx)(P,{board:s,section:this.section}),thumbnail:t})}),this.dispatch((0,o.fO)({event_type:5,pin_id:this.originalPinId||this.pinId,new_pin_id:i.id,did_repin:!0})),e(this.trackingData),i})}}},92056:(e,t,i)=>{i.d(t,{Hn:()=>h,Jw:()=>m,L7:()=>s,Qc:()=>a,Tt:()=>y,UF:()=>d,UV:()=>r,W1:()=>n,Ws:()=>u,ZW:()=>l,cK:()=>f,cy:()=>g,k:()=>p,o4:()=>_,pK:()=>v,tr:()=>c,vF:()=>o});let s=1,a=2,n="female",r="male",o="unspecified",l="en-US",d="US",c=3,h="has_done_closeup",u="Gender",_="InterestPicker",p="UseCase",g="LoadingStep",m="AppInstall",f={NUX_GENDER_STEP_NAME:u,NUX_INTEREST_PICKER_STEP_NAME:_,NUX_USE_CASE_STEP_NAME:p,NUX_LOADING_STEP_NAME:g,NUX_APP_INSTALL_STEP_NAME:m},y=2500,v=3},708171:(e,t,i)=>{i.d(t,{Z:()=>T});var s=i(667294),a=i(376030),n=i(883119),r=i(140017),o=i(55202),l=i(494125),d=i(406893),c=i(785893);let h=`
@keyframes baseEduToastIconScale {
  0% {
    transform: scale(0)
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
}
`;function u({addedStyles:e,button:t,headerText:i,icon:a,iconOverride:r,minHeight:o,subHeaderText:l}){return(0,c.jsx)(n.xu,{display:"flex",justifyContent:"center",paddingX:2,width:"100vw",children:(0,c.jsxs)(n.xu,{alignContent:"center",alignItems:"center",bottom:!0,color:"default",dangerouslySetInlineStyle:{__style:{boxShadow:"0 3px 6px rgba(0,0,0,0.18)",transform:"translateY(-20px)",...e}},display:"flex",minHeight:o||75,padding:6,position:"relative",rounding:4,width:"100%",children:[(()=>{let e=r||(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(d.Z,{unsafeCSS:h}),(0,c.jsx)(n.xu,{alignItems:"center",color:"education",dangerouslySetInlineStyle:{__style:{animation:"baseEduToastIconScale 3s"}},"data-test-id":"pin-save-toast",direction:"column",display:"flex",height:60,justifyContent:"center",minHeight:60,minWidth:60,rounding:"circle",width:60,children:(0,c.jsx)(n.JO,{accessibilityLabel:a.accessibilityLabel,color:a.color,dangerouslySetSvgPath:a.dangerouslySetSvgPath,icon:a.icon,inline:a.inline,size:a.size})})]});return(0,c.jsx)(n.xu,{marginEnd:4,children:e})})(),(0,c.jsxs)(n.xu,{"data-test-id":"pin-save-toast-header",marginEnd:"auto",children:[(0,c.jsx)(n.xv,{color:"default",weight:"bold",children:i}),!!l&&(0,c.jsx)(n.xu,{paddingY:1,children:(0,c.jsx)(n.xv,{color:"default",size:"300",children:l})})]}),(0,c.jsx)(n.xu,{display:"flex",flex:"shrink",marginStart:2,children:t})]})})}var _=i(915163);function p(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let g="cubicBezier(0.25, 0.1, 0.25, 1)",m="encourageToastIconContainer",f="encourageToastIconRadiateBg",y="encourageToastIconRadiateRing",v={targets:`#${m}`,duration:300,scale:1.4,easing:g},b={targets:`#${m}`,duration:300,scale:1,easing:g,endDelay:1e3},x={targets:`#${m}`,duration:300,scale:.42,easing:g},P={targets:`#${f}`,duration:400,opacity:0,scale:1.6,easing:g},I={targets:`#${y}`,duration:650,opacity:0,scale:2,easing:g};class S extends s.PureComponent{constructor(...e){super(...e),p(this,"delayTimer",null),p(this,"requestAnimationFrameId",null),p(this,"playAnimation",()=>{this.requestAnimationFrameId=window.requestAnimationFrame(()=>{(0,a.Z)(P),(0,a.Z)(I),(0,a.Z)(v).finished.then(()=>{(0,a.Z)(b).finished.then(()=>{a.Z.set(`#${m}`,{transformOrigin:"top right"}),(0,a.Z)(x)})})})}),p(this,"getHeaderText",()=>{let{text:e}=this.props;return Array.isArray(e)?e[0]:e}),p(this,"getIconProps",()=>({accessibilityLabel:this.props.i18n.bt("Icône de coche", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30})),p(this,"getSubHeaderText",()=>{let{text:e}=this.props;return e instanceof Array&&e.length>1&&e[1]?e[1]:""}),p(this,"renderAnimatedIcon",()=>(0,c.jsxs)(n.xu,{height:68,position:"relative",width:68,children:[(0,c.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{left:"4px",top:"4px"}},"data-test-id":"pin-save-toast",height:60,overflow:"hidden",position:"absolute",rounding:4,width:60,children:this.props.thumbnail}),(0,c.jsxs)(n.xu,{dangerouslySetInlineStyle:{__style:{transform:"scale(0)"}},height:68,id:m,position:"absolute",width:68,children:[(0,c.jsx)(n.xu,{color:"infoBase",dangerouslySetInlineStyle:{__style:{left:"0px",top:"0px",transform:"scale(0)"}},height:68,id:f,position:"absolute",rounding:"circle",width:68}),(0,c.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{borderWidth:"2px",borderStyle:"solid",borderColor:"#0074e8",left:"1px",top:"1px",transform:"scale(0)"}},height:66,id:y,opacity:1,position:"absolute",rounding:"circle",width:66}),(0,c.jsx)(n.xu,{alignItems:"center",color:"infoBase",direction:"column",display:"flex",height:68,justifyContent:"center",minHeight:68,minWidth:68,position:"absolute",rounding:"circle",width:68,children:(0,c.jsx)(n.JO,{accessibilityLabel:this.props.i18n.bt("Icône de coche", "Check icon", "Label for check icon on toast shown after board create", undefined, true),color:"inverse",icon:"check",size:30})})]})]}))}componentDidMount(){this.delayTimer=setTimeout(this.playAnimation,700)}componentWillUnmount(){this.delayTimer&&clearTimeout(this.delayTimer),this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId)}render(){let{isRepinToExistingBoard:e,button:t}=this.props;return(0,c.jsx)(u,{button:t,headerText:this.getHeaderText(),icon:this.getIconProps(),iconOverride:e?void 0:this.renderAnimatedIcon(),subHeaderText:this.getSubHeaderText()})}}function T(e){let{duration:t,onHide:i}=e,a=(0,r.ZP)(),[d,h]=(0,s.useState)(!1),[u,p]=(0,s.useState)(!1),g=(0,s.useRef)(),m=()=>{h(!0),g.current=setTimeout(i,200)},f=()=>{g.current&&clearTimeout(g.current)},y=()=>{g.current=setTimeout(m,t||_.w)};(0,l.Z)(()=>(setTimeout(()=>p(!0),100),y(),f));let v=(0,c.jsx)(S,{...e,i18n:a});return e.href&&(v=(0,c.jsx)(n.rU,{href:e.href,onClick:m,rounding:"pill",tapStyle:"none",children:v})),(0,c.jsx)(o.Z,{children:(0,c.jsx)(n.mh,{children:(0,c.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{...function({hiding:e,visible:t}){return t?e?{opacity:0,transform:"scale(1.0)",transition:"opacity transform .2s"}:{opacity:1,transition:"all 0.7s cubic-bezier(.19, 1.15, .48, 1)"}:Object.freeze({})}({hiding:d,visible:u})}},display:"flex",justifyContent:"center",position:"fixed",width:"100%",zIndex:_.k,children:v})})})}},222910:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(545007),a=i(13848),n=i(92056),r=i(170568);function o(){let e=(0,s.I0)(),{showToast:t,showOneToast:i}=(0,a.F9)();return{showToast:t,showOneToast:i,showRepinConfirmation:(i,s)=>{s||e((0,r.WF)()),setTimeout(()=>{s||e((0,r.a5)()),t(i)},n.Tt)}}}},117512:(e,t,i)=>{i.d(t,{M:()=>l,i:()=>c});var s=i(782677),a=i(216167),n=i(827625),r=i(386129),o=i(539426);let l=(e,t,i,s)=>({type:"PIN_ADD",payload:{pinId:e,boardId:t,boardSectionId:i,pinnerId:s}}),d=(e,t)=>new Promise(i=>{e?(0,r.eR)(e).then(e=>{i(e)}):i(t)}),c=e=>t=>{let{method:i,guid:r,image_base64:c,image_url:h}=e;return d(c,h).then(d=>{let c={...e,method:"button"!==i||r?i:"button_external",image_url:d,image_base64:void 0},h="PinResource";return a.Z.create(h,c).callCreate().then(e=>{let i=(0,s.Fv)(e.resource_response.data,o.Z[h]);t((0,n.XM)(h,c,e,i));let a=e.resource_response.data,{board:{id:r},pinner:{id:d},section:u}=a,_=u&&u.id;return t(l(a.id,r,_,d)),e})})}},410391:(e,t,i)=>{i.d(t,{L:()=>o,q:()=>d});var s=i(216167),a=i(821419),n=i(64819),r=i(937310);function o(e){return t=>{let{inSelectAll:i,selectedPinIds:o,orbacSubjectId:l,source:{boardId:d,sectionId:c}}=e;return t((0,a.xQ)(d)),t((0,n.EX)({feedId:c||d,feedType:c?r.Z.BOARD_SECTION_PINS:r.Z.BOARDFEED,inverseSelection:i,itemIds:o,itemType:"pin"})),s.Z.create(i?"BulkEditSelectAllResource":"BulkEditResource",{board_id:d,section_id:c,pin_ids:o,orbac_subject_id:l}).callDelete()}}let l=(e,t,i,s)=>({type:"PIN_DELETE",payload:{pinId:e,boardId:t,boardSectionId:i,userId:s}}),d=({pinId:e,boardId:t,boardSectionId:i,clientTrackingParams:a})=>(n,r)=>{let o=s.Z.create("PinResource",{id:e,client_tracking_params:a}).callDelete(),{session:{userId:d}}=r();return n(l(e,t,i,d)),o}},984869:(e,t,i)=>{i.d(t,{w:()=>o});var s=i(237040),a=i(64819),n=i(97032),r=i(529081);let o=({pinId:e,boardId:t,checkExperiment:i,i18n:o,isQuickSave:l,logContextEvent:d,onSuccess:c,originalPinId:h,showNewUserSavetoProfileAnimation:u,showRepinConfirmation:_,showToast:p,section:g,trackingParams:m,isOneTapSave:f,viewType:y,historyPush:v,suggestedBoardIds:b,savePinId:x})=>(P,I)=>{let{pins:S,session:T,feeds:A}=I(),E=S[e];t&&((E?.shopping_flags??[])?.length>0||E?.rich_summary&&(E?.rich_summary?.products??[])?.length>0)&&(A[`board-shop-saved-preview:${t}`]&&P((0,a.Qv)(`board-shop-saved-preview:${t}`,[E],{isPrepend:!0})),A[`board-shop-saved:${t}`]&&P((0,a.Qv)(`board-shop-saved:${t}`,[E],{isPrepend:!0})));let w=new n.default({boardId:t,dispatch:P,i18n:o,isOneTapSave:f,isQuickSave:l,onSuccess:c,originalPinId:h,pinId:E.id,section:g,showNewUserSavetoProfileAnimation:u,showRepinToasts:e=>_?_(e):p?p(e):void 0,trackingParams:m,userId:T.userId,viewType:y,historyPush:v,suggestedBoardIds:b,savePinId:x,pinData:{trackingParams:E.tracking_params,viewParameter:(0,r.A)({hasRichMetadata:!!E.rich_metadata,hasRichMetadataProducts:!!E.rich_metadata?.products,hasRichMetadataArticle:!!E.rich_metadata?.article,hasRichMetadataRecipe:!!E.rich_metadata?.recipe}),pinnedToBoardId:E.pinned_to_board?.id}});return(0,s.ib)({checkExperiment:i,isAuthMweb:T.isAuthenticated&&(T.isMobile||T.isTablet)}),w.processRepin(d)}},170568:(e,t,i)=>{i.d(t,{Cp:()=>d,FK:()=>l,H5:()=>b,MI:()=>g,O0:()=>p,QZ:()=>o,W:()=>y,WF:()=>h,Wz:()=>x,a5:()=>u,dz:()=>f,e0:()=>_,e2:()=>r,iW:()=>v,n1:()=>n,rm:()=>c,xu:()=>m});var s=i(741983),a=i(389638);let n=()=>({type:"DISMISS_UNAUTH_SAVE"}),r=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),o=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),l=()=>({type:"HIDE_NAV_FOOTER"}),d=()=>({type:"SHOW_NAV_FOOTER"}),c=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),h=()=>({type:"SHOW_REPIN_ANIMATION"}),u=()=>({type:"HIDE_REPIN_ANIMATION"}),_=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),p=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),g=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),m=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),f=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),y=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),v=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},b=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),x=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,s.bo)(e)?"today":(0,s.dr)(e)?"ideas":t&&(0,s.dZ)(e,t)?"own_section":t&&(0,s.J)(e,t)?"own_board":(0,s.OJ)(e)?"section":(0,s.am)(e)?"board":(0,s.L6)(e)?"closeup":(0,s.C$)(e)?"home":(0,a.Z)(e)?"profile":(0,s.En)(e)?"search":(0,s.$V)(e)?"topic":"":""})},529081:(e,t,i)=>{i.d(t,{A:()=>s});let s=({hasRichMetadata:e,hasRichMetadataProducts:t,hasRichMetadataArticle:i,hasRichMetadataRecipe:s})=>e?t?144:i?141:s?145:139:140},256918:(e,t,i)=>{i.d(t,{M:()=>o,Q:()=>l});var s=i(667294),a=i(342513),n=i(785893);let{Provider:r,useMaybeHook:o}=(0,a.Z)("RepinContext");function l({children:e}){let[t,i]=(0,s.useState)(Object.freeze({})),a=(0,s.useMemo)(()=>({getSavedPinId:e=>t[e],isSaved:e=>!!t[e],save:(e,t)=>i(i=>({...i,[e]:t})),unsave:e=>i(t=>({...t,[e]:null}))}),[t]);return(0,n.jsx)(r,{value:a,children:e})}},81149:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(883119),a=i(761203),n=i(785893);function r({boardId:e}){let t=(0,a.gC)()(e),i=t?.images&&t.images["170x"]?t.images["170x"][0]:void 0;return e&&i?(0,n.jsx)(s.Ee,{alt:"Pin image",color:"#efefef",fit:"cover",naturalHeight:1,naturalWidth:1,src:i.url??""}):null}},915163:(e,t,i)=>{i.d(t,{k:()=>r,w:()=>n});var s=i(883119),a=i(425040);let n=2e3,r=new s.H3([a.Z])}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/29541.fr-f441708457f55f22.mjs.map