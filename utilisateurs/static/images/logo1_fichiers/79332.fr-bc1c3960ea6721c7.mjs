"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[79332,31076],{442279:(e,t)=>{function n(e,t){return e===t}t.P1=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=0,l=r.pop(),a=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e}))throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t.map(function(e){return typeof e}).join(", ")+"]");return t}(r),s=e.apply(void 0,[function(){return o++,l.apply(void 0,arguments)}].concat(n)),c=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=a.map(function(n){return n.apply(void 0,[e,t].concat(r))});return s.apply(void 0,function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}(o))};return c.resultFunc=l,c.recomputations=function(){return o},c.resetRecomputations=function(){return o=0},c}}(function(e){var t=arguments.length<=1||void 0===arguments[1]?n:arguments[1],r=null,i=null;return function(){for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return null!==r&&r.length===o.length&&o.every(function(e,n){return t(e,r[n])})||(i=e.apply(void 0,o)),r=o,i}})},251448:(e,t,n)=>{n.d(t,{CB:()=>_,y9:()=>p});var r=n(667294),i=n(342513),o=n(883119),l=n(372085),a=n(930837),s=n(140017),c=n(785893);let d=({onConfirm:e})=>{let t=(0,s.ZP)(),[n,i]=(0,r.useState)(!1),d=()=>{i(!0),(0,l.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,c.jsx)(a.ZP,{accessibilityModalLabel:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,c.jsxs)(o.kC,{gap:{row:2,column:0},justifyContent:"end",children:[n?(0,c.jsx)(o.zx,{color:"gray",disabled:n,fullWidth:!0,onClick:d,size:"lg",text:t.bt("E-mail envoyé", "Email sent", "Button text for verification email being sent", undefined, true)}):(0,c.jsx)(o.zx,{color:"gray",disabled:n,fullWidth:!0,onClick:d,size:"lg",text:t.bt("Renvoyer l’e-mail", "Resend email", "Button text for resending email verification email", undefined, true)}),(0,c.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:e,size:"lg",text:t.bt("Compris !", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true)})]}),heading:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,role:"alertdialog",children:(0,c.jsx)(o.xu,{padding:8,children:(0,c.jsx)(o.xv,{align:"center",size:"300",children:t.bt("Sécurisez votre compte en vérifiant votre adresse e-mail. Vérifiez dans la boîte de réception associée à ce compte si vous avez reçu un e-mail de notre part pour continuer à utiliser Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})},{Provider:u,useHook:p}=(0,i.Z)("EmailVerificationReminderModal");function _({children:e}){let[t,n]=(0,r.useState)(!1),i=(0,r.useMemo)(()=>({showEmailVerificationReminderModal:()=>{n(!0)}}),[]);return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(u,{value:i,children:e}),t&&(0,c.jsx)(d,{onConfirm:()=>{n(!1)}})]})}},704666:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(934378),i=n(88682),o=n(238299);let l={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},a=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},s=e=>{let{campaignId:t,objectiveType:n,partialCreate:r,catalogsFeedId:o,managedClientId:l,catalogId:a,productGroupId:s,resumeLastDraft:c}=e,d={};return t&&r&&(d.campaignId=t),n&&(d.objectiveType=n),"CATALOG_SALES"===n&&o&&(d.catalogsFeedId=o),a&&(d.catalogId=a),s&&(d.productGroupId=s),l&&(d.managedClientId=l),c&&(d.resumeLastDraft=!0),(0,i.Z)("/ads/create/",d)},c=e=>{let{campaignToolPreference:t,...n}=e;return(0,i.Z)("/automated/ads/create/",n)},d={overview:()=>"/",reporting:e=>{let t=e.objectiveType||null;delete e.objectiveType;let n={...e,...a(t)};return(0,i.Z)("/reporting/campaigns/",n)},reportingAdGroup:e=>{let{campaignId:t,objectiveType:n,showAllEntities:r,adGroupId:o,message:s}=e,c={campaignIds:[t],...r?l:{},...a(n),...o?{adGroupIds:[o]}:{},message:s};return(0,i.Z)("/reporting/adgroups/",c)},campaign:e=>{let{id:t,objectiveType:n}=e;return(0,i.Z)("/reporting/adgroups/",{campaignIds:[t],...a(n)})},editCampaign:e=>e.isAutomatedCampaign?d.editAutomated({campaignId:e.id,view:"campaign"}):d.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{let{id:t,objectiveType:n,showAllEntities:r,pinPromotionId:o,campaignId:s}=e;return"TEMPORARY_SHOPPING"===n||"CATALOG_SALES"===n?(0,i.Z)("/reporting/productgroups/",{adGroupIds:[t],...a(n)}):(0,i.Z)("/reporting/ads/",{adGroupIds:[t],...a(n),...r?l:{},...o?{pinPromotionIds:[o]}:{},...s?{campaignIds:[s]}:{}})},editAdGroup:e=>e.isAutomatedCampaign?d.editAutomated({campaignId:e.id,view:"campaign"}):d.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{let{id:t,adFilter:n}=e;return(0,i.Z)("/reporting/ads/",{pinPromotionIds:[t],...n?{adFilter:n}:{}})},editPinPromotion:e=>{let t=e.isCreatingPins?{isCreatingPins:!0}:{},n=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return d.editV2({adGroupId:e.adGroupId,view:"ad",...n,...t})},productGroup:e=>{let{id:t,name:n}=e;return(0,i.Z)("/reporting/productgroups/",{productGroupIds:[t],name:n})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",bulkEdit:e=>{let{entity_level:t,ids:n}=e;return(0,i.Z)("/ads/bulk_edit/",{entity_level:t,ids:n})},productgroups:()=>"/reporting/productgroups/",productitems:()=>"/reporting/productitems/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>d.pinPromotion(e),createPreferred:e=>{switch(e.campaignToolPreference){case o.km.ADS_MANAGER:return s(e);case o.km.AUTOMATED_CAMPAIGN:return c(e);default:return(0,i.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0)}},campaignMode:e=>(0,i.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:s,createAutomated:c,editV2:e=>(0,i.Z)("/ads/edit/",e),editAutomated:e=>(0,i.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,i.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,i.Z)("/ads/duplicate/",e),audiences:e=>(0,i.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{let{page:t,subSection:n,nextStepUrl:o}=e;switch(t){case r.kM.BILLING_HISTORY:return"/billing/history/";case r.kM.ORDER_LINES:return"/billing/order_lines/";case r.kM.PROMOTIONS:return"/billing/promotions/";case r.kM.DOCUMENTS:return"/billing/documents/";case r.kM.TAX_DOCUMENTS:return"/billing/tax_documents/";case r.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:let l={};return n&&(l.section=n),o&&(l.next_step_link_url=o),(0,i.Z)("/billing/",l)}},bulk:e=>{let{subSection:t,page:n,jobStarted:o}=e||{};switch(n){case r.fm.UPLOAD_TEMPLATE:return(0,i.Z)("/bulk_editor/upload_template/",{section:t});case r.fm.DOWNLOAD_TEMPLATE:return(0,i.Z)("/bulk_editor/download_template/",{section:t});case r.fm.HISTORY:return(0,i.Z)("/bulk_editor/history/",{section:t,job_started:o});case r.fm.BULK_ID_LIBRARY:return(0,i.Z)("/bulk_editor/bulk_id_library/",{section:t});case r.fm.RESOURCES:return(0,i.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},history:e=>(0,i.Z)("/history/",e),shopping:e=>d.reporting(a("TEMPORARY_SHOPPING")),pinterest_tag:e=>{let{page:t,subSection:n,platform:o,source:l,origin:a}=e;switch(t){case r.qp.PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:return"/conversions/events-overview/";case r.qp.PINTEREST_EVENT_HISTORY:if(l)return(0,i.Z)("/conversions/event-history/",{source:l});return"/conversions/event-history/";case r.qp.CONVERSION_HEALTH:return"/conversions/health/";case r.qp.PINTEREST_TEST_EVENTS:return(0,i.Z)("/conversions/test-events/",{subPage:n,platform:o});case r.qp.PINTEREST_TAG:return(0,i.Z)("/conversions/tag/",{subPage:n,platform:o});case r.qp.PINTEREST_TAG_MANUAL_SETUP_FLOW:let s=(0,i.Z)("/conversions/tag_manual_setup/",{origin:a});if(o)return(0,i.Z)(s,{platform:o,source:l});return s;case r.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case r.qp.CONVERSION_UPLOAD:return(0,i.Z)("/conversions/upload/",{subPage:n});case r.qp.UPLOAD_HISTORY:return(0,i.Z)("/conversions/history/",{subPage:n});case r.qp.PCA_UPLOAD_HISTORY:return(0,i.Z)("/conversions/pca_history/",{subPage:n});case r.qp.PCA_UPLOAD:return(0,i.Z)("/conversions/pca_upload/",{subPage:n});case r.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:if(l||a)return(0,i.Z)("/conversions/api_manual_setup/",{source:l,origin:a});return"/conversions/api_manual_setup/";case r.qp.CONVERSIONS_API_PARTNER_SETUP_FLOW:if(l||a)return(0,i.Z)("/conversions/api_partner_setup/",{source:l,origin:a});return"/conversions/api_partner_setup/";case r.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case r.qp.PINTEREST_SETUP_API:return"/conversions/setup-api/";case r.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";case r.qp.PAYLOAD_HELPER:return"/conversions/payload-helper/";case r.qp.CONVERSIONS:return"/conversions/";case r.qp.NOCODE_CONVERSIONS_API_SETUP_FLOW:return"/conversions/pinterest_capi_connect/";case r.qp.PINTEREST_EVENT_HISTORY_CAPI_TAB:return"/conversions/event-history/#conversionsAPI";case r.qp.PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:return"/conversions/events-overview/#conversionsAPI";default:return"/conversions/tag/"}},"pin-builder":e=>(0,i.Z)("/pin-builder/",e),purchases:()=>d.reporting(a("PURCHASE")),awareness_reserved:()=>d.reporting(a("IMPRESSION")),engagement:()=>d.reporting(a("BILLABLE_ENGAGEMENT")),videos:()=>d.reporting(a("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>d.reporting(a("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>d.reporting(a("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>d.reporting(a("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,i.Z)("/reporting/preferences/",e),report_builder:e=>(0,i.Z)("/report-center/builder/",e),report_history:e=>(0,i.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,i.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,i.Z)("/report-center/download/",e),awareness:()=>d.reporting(a("AWARENESS")),traffic:()=>d.reporting(a("TRAFFIC")),app_installs:()=>d.reporting(a("APP_INSTALL")),catalog_sales:()=>d.reporting(a("CATALOG_SALES")),web_conversion:()=>d.reporting(a("WEB_CONVERSION")),video_view:()=>d.reporting(a("VIDEO_VIEW")),quick_promote:e=>(0,i.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,i.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source",campaign_insights:e=>`/campaign-insights/${e.campaignId}/`,product_group_reporting:e=>`/campaign-insights/${e.campaignId}/product-group/${e.productGroupId}`,media_planner:e=>(0,i.Z)("/media_planner/",e),ad_spend_optimizer:e=>(0,i.Z)("/msot-optimizer/",e)},u=d},831076:(e,t,n)=>{n.d(t,{default:()=>l});var r=n(704666),i=n(702497),o=n(885896);function l(e,t,n){var l;let a;if(!r.Z[e])throw Error(`unknown url key: ${e}`);n||(n={});let s=r.Z[e](n),c=(a=null,(l=n)&&(a=l.advertiserId||null),!a&&t&&(a=t.id),a),d=!!n.absolutify;return"string"==typeof c&&(s="/advertiser/"+c+s),d&&(s=(0,o.Z)(s,void 0,i.KUo)),s}},86785:(e,t,n)=>{n.d(t,{G6:()=>o,i7:()=>l,oi:()=>r,u$:()=>i,un:()=>s,vU:()=>a,w1:()=>c});let r=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),i=e=>e?e.includes("Chrome")?r.CHROME:e.includes("Safari")?r.SAFARI:e.includes("Firefox")?r.FIREFOX:e.includes("Opera")?r.OPERA:e.includes("IE")?r.IE:e.includes("Edge")?r.EDGE:r.OTHER:r.OTHER;function o(e){return i(e)===r.SAFARI}function l(e){return i(e)===r.CHROME}function a(e){return i(e)===r.FIREFOX}function s(e){return i(e)===r.EDGE}function c(e){return i(e)===r.IE}},419075:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){let t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return n+":"+(r<10?"0":"")+r}},405459:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(167912),i=n(244311),o=n(698681),l=n(200309),a=n(226618);function s(e){return e.reduce((e,t)=>("ScalarField"===t.kind&&"__typename"===t.name?e[0].push(t.alias??t.name):e[1].push(t),e),[[],[]])}let c=function({strategy:e,query:t,variables:n,options:c,transformGraphQL:d,useGetLegacyData:u,useGetLegacyResource:p,useGetLegacyPaginatedResource:_,useGetLegacyData__EXPERIMENTAL:h,rootFieldName:g,type1:f,type2:m,connectionName:v}){if("GRAPHQL"===e){let e=(0,i.getRequest)(t);return null!=d?d((0,r.useLazyLoadQuery)(e,n,c)):(0,r.useLazyLoadQuery)(e,n,c)}if(null!=u&&null!=p&&null!=_&&null!=h)throw Error("Only pass one of those calls from the list: \n[useGetLegacyData, useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData__EXPERIMENTAL]\nto useLazyLoadQueryOrLegacy");if(null!=h){let e=h(n);if(!e)return null;let{selections:r}=(0,i.getRequest)(t).fragment;return function e(t,n,r=null){let i={};return!function t(n,r,i,o){let c=function(e,t=null){let[n,r]=e.reduce((e,t)=>("InlineFragment"===t.kind?e[0].push(t):e[1].push(t),e),[[],[]]);if(1===n.length){let[e,i]=s(r);if(0===i.length){let[r,i]=s(n[0].selections),o=[...e,...r];return 0===o.length?{kind:"Uncategorized"}:{kind:"InlineFragmentWithTypename",typenameAliases:o,selections:i,concreteType:n[0].type,remainingPathCount:t}}}else if(1===e.length&&"LinkedField"===e[0].kind){let n=e[0],r=n.concreteType??null;if(n.plural&&1!==t)return{kind:"Uncategorized"};if(null==r)return{kind:"OnlyLinkedFieldAndTypename",selections:n.selections,name:n.name,concreteTypeAndAliases:null,remainingPathCount:null==t?null:t-1};let[i,o]=s(n.selections);if(1===t){let t=e[0],n=t.alias??t.name,{pageInfoSelection:r,edgeSelection:l}=function(e){if(0===e.length||e.length>2||e.some(e=>"LinkedField"!==e.kind))throw Error("Unexpected selections");let t=e.reduce((e,t)=>{if("pageInfo"===t.name){if(null!==e.pageInfoSelection)throw Error("Expected only one pageInfo selection");e.pageInfoSelection=t}else{if(null!==e.edgeSelection)throw Error("Expected only one edge selection");e.edgeSelection=t}return e},{pageInfoSelection:null,edgeSelection:null});if(t.edgeSelection&&!t.edgeSelection.selections.find(e=>"node"===e.name))throw Error("Expected to find a node field inside of edges");return{pageInfoSelection:t.pageInfoSelection,edgeSelection:t.edgeSelection}}(o);if(null===l)throw Error("No edges found in connection field");let a=l.alias??l.name,{concreteType:s}=t;if(null==s)throw Error("No concrete type found in connection field");return{kind:"ConnectionFieldAndTypename",selections:l.selections.filter(e=>!("ScalarField"===e.kind&&"cursor"===e.name)),concreteTypeAndAliases:{concreteType:s,typenameAliases:i},pageInfoSelection:r,nameOrAliasOfEdgesField:a,nameOrAliasOfConnectionField:n,edgeSelection:l}}return{kind:"OnlyLinkedFieldAndTypename",selections:o,name:n.name,concreteTypeAndAliases:{concreteType:r,typenameAliases:i},remainingPathCount:null==t?null:t-1}}else if(e.length>0&&e.every(e=>"FragmentSpread"===e.kind))return{kind:"OnlyFragmentSpread"};return{kind:"Uncategorized"}}(n,o);switch(c.kind){case"InlineFragmentWithTypename":{let{concreteType:e,typenameAliases:n,selections:o,remainingPathCount:l}=c;n.forEach(t=>r[t]=e),t(o,r,i,l);break}case"OnlyFragmentSpread":(0,a.I9)(r,i);break;case"OnlyLinkedFieldAndTypename":{let{name:e,selections:n,concreteTypeAndAliases:o,remainingPathCount:l}=c,a={};if(r[e]=a,o&&o.typenameAliases.length>0){let{concreteType:e,typenameAliases:t}=o;for(let n of t)a[n]=e}t(n,a,i,l);break}case"ConnectionFieldAndTypename":{let{nameOrAliasOfEdgesField:t,nameOrAliasOfConnectionField:n,edgeSelection:o,pageInfoSelection:l}=c;if("PluralLegacyData"!==i.kind)throw Error("Error, expected a PluralLegacyData kind for this query");let a={[t]:i.pluralLegacyData.map(t=>e(o.selections,{kind:"LegacyData",refetchInfo:i.refetchInfo,paginationInfo:i.paginationInfo,singularLegacyData:t}))};l&&(a[l.alias??l.name]=l),r[n]=a;break}case"Uncategorized":throw Error("The query passed to useLazyLoadQueryOrLegacy contained unsupported/uncategorized elements. Please simplify the query.");default:(0,l.Z)(c,"Unexpected category")}}(t,i,n,r),i}(r,{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null})}if(null!=u){let e=u(n);return e?(0,a.I9)({},{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null}):null}if(null!=p){let{data:e,refresh:t}=p(n);return null==e?null:(0,a.I9)({},{kind:"LegacyData",singularLegacyData:e,refetchInfo:{refetch:t},paginationInfo:null})}if(null!=_){let{data:e,refresh:t,isFetching:r,isAtEnd:l,fetchMore:s}=_(n);if(null==e)return null;if(null==g||null==f||null==m||null==v)throw Error("Unexpected null param");return(0,a.I9)({},{kind:"LegacyData",singularLegacyData:{id:i.ROOT_ID,[(0,o.Cs)(g)]:{type:f,data:{type:m,[(0,o.Cs)(`__${v}_connection`)]:{edges:e.map(e=>({node:e}))}}}},refetchInfo:{refetch:t},paginationInfo:{isLoadingNext:r,hasNext:!l,loadNext:s}})}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},564855:(e,t,n)=>{n.d(t,{ZP:()=>i,mP:()=>r});let r="…";function i(e,t=80,n=r,o=!1){let l;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||o)l=e.substring(0,t);else{let n=e.lastIndexOf(" ",t);l=e.substring(0,n)}return(l=l.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+n}},998449:(e,t,n)=>{n.d(t,{Z:()=>o});let r=(e,t)=>0===e.lastIndexOf(t,0);var i=n(885896);let o=({url:e})=>{let t=(0,i.Z)("/");return r(e,t)?e.substr(t.length-1):e}},238299:(e,t,n)=>{var r;n.d(t,{TT:()=>o,UM:()=>l,km:()=>i});let i=((r={}).ADS_MANAGER="ADS_MANAGER",r.AUTOMATED_CAMPAIGN="AUTOMATED_CAMPAIGN",r),o=e=>Object.values(i).includes(e),l=(e,t)=>{let n=e.checkExperiment("adv_growth_campaign_tool_preference",{dangerouslySkipActivation:t?.skipActivation||!1});return"prod"===n.group||"enabled"===n.group||"employees"===n.group}},172560:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(667294),i=n(883119),o=n(205841),l=n(388769),a=n(140017),s=n(72461),c=n(339001),d=n(340523),u=n(5859),p=n(873955),_=n(564855),h=n(968946),g=n(477458),f=n(923368),m=n(519925),v=n(784300),y=n(785893);let P=function(e){let t=(0,a.ZP)(),{locale:n,isAuthenticated:P}=(0,u.B)(),x=(0,s.Z)(),{checkExperiment:A}=(0,d.F)(),{isCloseupRelatedPinsAboveTheFoldEnabled:w}=(0,f.x4)(),{aggregatedSaves:E,boardName:b,boardUrl:I,followerCount:T,fullName:S,isVerifiedIdentity:C,imageUrl:k,isPromoted:O,isVerifiedMerchant:j,profileUrl:N,sponsorName:L,sponsorshipStatus:R,sponsorUsername:z="",verified:Z,color:F="default",onAvatarClick:D,onNavigateClick:M,onNavigateSponsorClick:U,openNewTab:G,isLeadPin:V=!1}=e,B=(0,d.F)().checkExperiment("mweb_web_android_ios_backend_clbc_display_controls").anyEnabled,q=!P&&(A("ff_show_aggregate_saves").anyEnabled||A("unauth_show_aggregate_saves").anyEnabled),H=(0,p.Z)(t.bt("Lien vers l’avatar de {{ fullName }}", "{{ fullName }} avatar link", "creatorCardProfile.avatar.accessibilityLabel", undefined, true),{fullName:S??""}),W=(0,y.jsx)(g.q,{children:({active:e,focused:t,hovered:n,onBlur:r,onFocus:l,onMouseEnter:a,onMouseLeave:s})=>(0,y.jsx)(i.xu,{onBlur:r,onFocus:l,onMouseDown:()=>{D&&D()},onMouseEnter:a,onMouseLeave:s,children:(0,y.jsx)(i.zd,{rounding:"circle",wash:n||e||t,children:(0,y.jsx)(o.qE,{accessibilityLabel:H,name:S??"",size:w?"xs":"md",src:k??"",verified:Z})})})}),K=(0,_.ZP)(S,70),X=(0,y.jsxs)(r.Fragment,{children:[O&&(0,y.jsx)(i.xv,{lineClamp:1,size:"200",weight:"bold",children:t.bt("Sponsorisée par", "Promoted by", "indicating the username of the person who promoted the pin", undefined, true)}),(0,y.jsx)(i.xu,{"data-test-id":"creator-profile-name",children:(0,y.jsx)(i.xu,{maxWidth:270,children:(0,y.jsx)(i.xv,{color:F,size:"200",weight:V||w?"normal":"bold",children:C||j?(0,y.jsx)(i.xu,{"data-test-id":"verified-name",children:(0,y.jsx)(v.Z,{badgeSize:"xs",badgeSpacing:2,fullName:K,isVerifiedIdentity:C,isVerifiedMerchant:j})}):S})})})]}),Y=z&&L||m.j.includes(R)&&B,$=`/${z??""}/`,Q=(0,y.jsx)(i.xu,{paddingX:1,children:(0,y.jsx)(i.xv,{size:"300",children:E&&(0,c.nk)(t.bt("{{ saveCount }} membres ont enregistré des Épingles similaires", "{{ saveCount }} people saved Pins like this", "closeup.pinAttribution.aggregateSaveCount", undefined, true),{saveCount:x(n,E,{shortform:!0,shortform_maximum_fraction_digits:0})})})}),J=b&&I&&q?(0,y.jsx)(i.xu,{marginTop:1,children:(0,y.jsx)(i.xv,{inline:!0,size:"200",children:(0,c.XB)({text:t.bt("<a id=\"1\">{{pinnerName}}</a> a enregistré dans <a id=\"2\">{{boardName}}</a>", "<a id=\"1\">{{pinnerName}}</a> saved to <a id=\"2\">{{boardName}}</a>", "unauth.userAttribution.board", undefined, true),markers:{pinnerName:K.toString(),boardName:b.toString()},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,y.jsx)(i.rU,{display:"inline",href:N??"",underline:"none",children:(0,y.jsx)(i.xv,{inline:!0,size:"200",weight:"bold",children:C||j?(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{display:"inline"}},"data-test-id":"verified-name",children:(0,y.jsx)(v.Z,{badgeSize:"xs",badgeSpacing:q?0:2,fullName:K,isVerifiedIdentity:C,isVerifiedMerchant:j})}):e})},"pinner-name-attribution"),2:({innerHtmlStrings:e})=>(0,y.jsx)(i.rU,{display:"inline",href:I?.toLowerCase(),underline:"none",children:(0,y.jsx)(i.xv,{inline:!0,size:"200",weight:"bold",children:e})},"board-name-attribution")}})})}):N&&(0,y.jsx)(i.rU,{dataTestId:"creator-profile-link",href:N,onClick:M,rel:(0,h.Z)(N)?"none":"nofollow",target:G?"blank":null,underline:"none",children:X});return(0,y.jsxs)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},"data-test-id":"creator-card-profile",display:"flex",marginEnd:-1,marginStart:-1,children:[(0,y.jsx)(i.xu,{"data-test-id":"creator-avatar",flex:"none",paddingX:1,children:N?(0,y.jsx)(i.Tg,{dataTestId:"creator-avatar-link",href:N,onTap:M,rel:(0,h.Z)(N)?"none":"nofollow",target:G?"blank":null,children:W}):W}),(0,y.jsxs)(i.xu,{children:[q&&E&&E>1&&Q,(0,y.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:N?J:X}),Y?(0,y.jsx)(i.xu,{"data-test-id":"sponsor-title",display:"flex",paddingX:1,children:(0,y.jsx)(m.Z,{href:$,isPromoted:O,onNavigateSponsorClick:U,sponsorName:L,sponsorshipStatus:R,sponsorUsername:z})}):!!T&&!q&&!w&&(0,y.jsx)(i.xu,{"data-test-id":"follower-count",display:"flex",paddingX:1,children:(0,y.jsx)(i.xv,{color:F,size:"200",children:(0,c.nk)(t.nbt(["{{ followerCount }} abonné", "{{ followerCount }} abonnés"], T, "closeup.creator.followerCount", true),{followerCount:(0,y.jsx)(l.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:T},T)})})})]})]})}},599874:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(667294),i=n(545007),o=n(883119),l=n(224796),a=n(214877),s=n(847160),c=n(515278),d=n(251448),u=n(976731),p=n(140017),_=n(339001),h=n(96452),g=n(731714),f=n(13848),m=n(494125),v=n(388769),y=n(785893);let P=({followText:e,followerCount:t,userFollowed:n})=>{let r=(0,p.ZP)();return(0,_.nk)(r.bt("{{ followCount }} {{ followText }}", "{{ followCount }} {{ followText }}", " - ", undefined, true),{followCount:(0,y.jsx)(o.xu,{"data-test-id":"followCount",opacity:n?void 0:.8,paddingX:1,children:(0,y.jsx)(o.xv,{color:n?"subtle":"inverse",children:(0,y.jsx)(v.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,y.jsx)(o.xu,{"data-test-id":"followText",paddingX:1,children:(0,y.jsx)(o.xv,{color:n?"default":"inverse",weight:"bold",children:e})},"followText")})};var x=n(324186),A=n(70982),w=n(386008),E=n(155087);function b(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class I extends r.PureComponent{constructor(...e){super(...e),b(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:n,userFollowed:r}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,s.N4)({i18n:n,toFollow:!r})});return}let{shouldStopEventPropagation:i,loggingData:o}=this.props;i&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...o||Object.freeze({})}),this.toggleFollowUnfollow()}),b(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),b(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:n,userFollowed:r,viewType:i,viewParameter:o,clientTrackingParams:l}=this.props;r?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:i,view_parameter:o,aux_data:{pin_id:t},clientTrackingParams:l,...n||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:i,view_parameter:o,aux_data:{pin_id:t},clientTrackingParams:l,...n||Object.freeze({})}),this.follow())}),b(this,"follow",()=>{let{follow:e,id:t,onUserFollow:n,mostRecentPinId:r,setMostRecentPinId:i,inviteCode:o,handleFollowSuccessFromInvite:l,loggingData:a,viewType:s,viewParameter:c}=this.props;e(t,r,()=>{o?(l?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:s,view_parameter:c,...a||Object.freeze({})})):this.showConfirmation()},this.showError),n&&n(!0),i(null)}),b(this,"showToast",e=>{let{id:t,imageUrl:n,profileUrl:r,toastManagerContext:i,suppressToasts:o}=this.props;o||i.showOneToast(({hideToast:i})=>(0,y.jsx)(E.Z,{handleHide:i,href:r,imageUrl:n,text:e,userId:t}))}),b(this,"showConfirmation",()=>{let e=(0,y.jsx)(o.xv,{children:this.props.i18n.bt("Abonné(e) ! Ses épingles créées apparaîtront désormais sur votre page d’accueil !", "Following! Their created Pins will show up in your home feed!", "userFollowButton.informationalToastText2", undefined, true)});this.showToast(e)}),b(this,"showError",e=>{let{fullName:t,userFollowed:n,showEmailVerificationReminderModal:r,loggingData:i,inviteCode:l,id:a,viewParameter:s,viewType:c}=this.props,d=n?this.props.i18n.bt("Erreur lors du désabonnement à {{ usernameComponent }}.", "Error unfollowing {{ usernameComponent }}.", "UserFollowButton.error.unfollowing", undefined, true):this.props.i18n.bt("Erreur lors de l’abonnement à {{ usernameComponent }}.", "Error following {{ usernameComponent }}.", "UserFollowButton.error.following", undefined, true);if((0,u.Z)(e,"api_error_code")===h.H9){r();return}let p=(0,y.jsx)(o.xv,{children:(0,_.nk)(d,{usernameComponent:(0,y.jsx)(o.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(p),!n&&l&&this.props.logContextEvent({event_type:14859,object_id_str:a,view_type:c,view_parameter:s,...i||Object.freeze({})})}),b(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:n,mostRecentPinId:r,setMostRecentPinId:i}=this.props;n(e,r,()=>{},this.showError),t&&t(!1),i(null)})}renderButton(){let{button:e,followerCount:t,inline:n=!1,isOwnProfile:r,invertButtonColor:i,isSecondaryButton:l,size:a,showFollowerCount:s,userFollowed:c}=this.props,d=c?this.props.i18n.bt("Abonné(e)", "Following", "User follow button", undefined, true):this.props.i18n.bt("S’abonner", "Follow", "User follow button", undefined, true);if(e)return e({followText:d,onClick:this.handleButtonClick,userFollowed:c});if(r)return(0,y.jsx)(o.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n.bt("Votre profil", "This is you", "Button label to note that this is your Profile", undefined, true)});if(!s)return(0,y.jsx)(o.xu,{"data-test-id":`user-${c?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,y.jsx)(o.zx,{accessibilityLabel:c?this.props.i18n.bt("Se désabonner", "Unfollow", "userUnfollowButton.button.accessibilityLabel", undefined, true):this.props.i18n.bt("S’abonner", "Follow", "userFollowButton.button.accessibilityLabel", undefined, true),color:l||c?"gray":"red",fullWidth:n,onClick:this.handleButtonClick,selected:i?!c:!!c,size:a??void 0,text:d})});{let e="number"==typeof t?(0,y.jsx)(P,{followerCount:t,followText:d,userFollowed:c}):d;return(0,y.jsx)(o.iP,{onTap:this.handleClick,children:(0,y.jsx)(o.xu,{color:c?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,y.jsx)(o.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,y.jsxs)(o.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,y.jsx)(o.iP,{onTap:this.handleClick,children:(0,y.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,y.jsx)(o.o3,{paused:t||!1})})})]})}}function T(e){let{logContextEvent:t}=(0,a.v)(),n=(0,p.ZP)(),{id:r,setMostRecentPinId:o}=(0,x.f)(),s=(0,c.Z)(),u=(0,i.I0)(),{showEmailVerificationReminderModal:_}=(0,d.y9)(),h=(0,w.mN)()(e.id),v=h?.follower_count,P=h?h.explicitly_followed_by_me:e.userFollowed;return(0,m.Z)(()=>{let{id:t}=e,n=g.Z.getItem(l.AG)||"";n&&n===t&&(g.Z.removeItem(l.AG),u((0,A.ZN)(n,e.clientTrackingParams)))}),(0,y.jsx)(I,{...e,follow:(t,n,r,i)=>{u((0,A.yA)(t,n,e.clientTrackingParams,e.inviteCode)).then(r).catch(e=>{i(e)})},followerCount:v,i18n:n,logContextEvent:t,mostRecentPinId:r,requireAuth:s,setMostRecentPinId:o,showEmailVerificationReminderModal:_,toastManagerContext:(0,f.F9)(),unfollow:(t,n,r,i)=>{u((0,A.KF)(t,n,e.clientTrackingParams)).then(r,i)},userFollowed:P})}},324186:(e,t,n)=>{n.d(t,{C:()=>s,f:()=>a});var r=n(667294),i=n(342513),o=n(785893);let{Provider:l,useHook:a}=(0,i.Z)("MostRecentPin");function s({children:e}){let[t,n]=(0,r.useState)(),[i,a]=(0,r.useState)(),s=(0,r.useCallback)(e=>{a([e].concat((i?i.slice(0,10):[]).filter(t=>t!==e)))},[i]),c=(0,r.useMemo)(()=>({id:t,plpImageSignatures:i,setMostRecentPinId:n,setMostRecentPinImage:s}),[t,i,s]);return(0,o.jsx)(l,{value:c,children:e})}},519925:(e,t,n)=>{n.d(t,{Z:()=>c,j:()=>s});var r=n(883119),i=n(140017),o=n(339001),l=n(340523),a=n(785893);let s=[0,2,3];function c({hasAffiliateProducts:e,href:t,isPromoted:n,onNavigateSponsorClick:c,sponsorName:d,sponsorUsername:u,sponsorshipStatus:p,textWeight:_="bold"}){let h;let g=(0,i.ZP)(),f=(0,l.F)().checkExperiment("mweb_web_android_ios_clbc_eu_ad_string").anyEnabled,m=(0,l.F)().checkExperiment("web_remove_paid_partnership_in_rejected_state").anyEnabled,v=t||(u?`/${u}/`:null),y=v&&d?(0,a.jsx)(r.rU,{dataTestId:"sponsorship-text-link",href:v,onClick:c,children:(0,a.jsx)(r.xv,{size:"200",weight:_,children:d})},d):void 0;return n?h=(0,o.nk)(g.bt("Sponsorisée par {{ name }}", "Promoted by {{ name }}", "sponsorship.sponsorshipText.promotedByBrand", undefined, true),{name:y}):p||0===p?d&&!s.includes(p)?h=(0,o.nk)(g.bt("Partenariat rémunéré avec {{ name }}", "Paid partnership with {{ name }}", "closeup.creator.sponsoredPinTitle", undefined, true),{name:y}):m&&2===p||(h=g.bt("Partenariat rémunéré", "Paid partnership", "closeup.creator.sponsoredPinTitle", undefined, true)):e&&(h=g.bt("Comprend des produits sponsorisés", "Includes sponsored products", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true)),(0,a.jsxs)(r.xv,{inline:!0,lineClamp:2,size:"200",children:[f&&!n&&"Ad • "||"",h]})}},784300:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),i=n(883119),o=n(572345),l=n(785893);let a=function({badgeSize:e,badgeSpacing:t,fullName:n,isVerifiedIdentity:a,isVerifiedMerchant:s,truncate:c=!1}){let d=n.split(" "),u=d.slice(0,d.length-1).join(" "),p=" ".concat(d[d.length-1]);return c?(0,l.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,l.jsx)(i.xv,{lineClamp:1,weight:"bold",children:n}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{top:t}},flex:"none",paddingX:1,position:"relative",children:(0,l.jsx)(o.Z,{isVerifiedIdentity:a,isVerifiedMerchant:s,size:e})})]}):(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)("span",{children:u}),(0,l.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[p," ",(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{top:t}},display:"inlineBlock",flex:"none",position:"relative",children:(0,l.jsx)(o.Z,{isVerifiedIdentity:a,isVerifiedMerchant:s,size:e})})]})]})}},70982:(e,t,n)=>{n.d(t,{KF:()=>d,ZN:()=>a,fv:()=>c,kE:()=>p,yA:()=>s});var r=n(216167),i=n(372085),o=n(386129);function l(e,t,n,i){return r.Z.create("UserFollowResource",{user_id:e,invite_code:i||void 0,aux_data:t?{pin_id:t}:void 0,client_tracking_params:n})}function a(e,t=null,n,r){return i=>{l(e,t,n,r).callCreate().catch(()=>i((0,o.P_)(e,!1))),i((0,o.P_)(e,!0))}}function s(e,t=null,n,r){return async i=>{i((0,o.P_)(e,!0)),await l(e,t,n,r).callCreate().catch(t=>{throw i((0,o.P_)(e,!1)),t})}}function c(e,t=null,n){return r=>{l(e,t,n).callDelete().catch(()=>r((0,o.P_)(e,!0))),r((0,o.P_)(e,!1))}}function d(e,t=null,n){return async r=>{r((0,o.P_)(e,!1)),await l(e,t,n).callDelete().catch(t=>{throw r((0,o.P_)(e,!0)),t})}}let u=(e,t)=>({type:"USER_BULK_FOLLOW",payload:{ids:e,value:t}}),p=e=>t=>{e.length>0&&((0,i.Z)({url:"/v3/users/follow/",method:"PUT",data:{followee_ids:e.join(",")}}).catch(()=>t(u(e,!1))),t(u(e,!0)))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/79332.fr-bc1c3960ea6721c7.mjs.map