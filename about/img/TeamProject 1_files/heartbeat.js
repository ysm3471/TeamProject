(function(g){var window=this;'use strict';var Bhb=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.JUa)("0",Math.max(0,b-c))+a},Chb=function(){return{G:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},W:[{G:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},Dhb=function(){return{G:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},W:[{G:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},Fhb=function(a){"number"===typeof a?(this.date=Ehb(a,0,1),p6(this,1)):g.Pa(a)?(this.date=Ehb(a.getFullYear(),a.getMonth(),a.getDate()),p6(this,a.getDate())):(this.date=new Date(g.Va()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),p6(this,a))},Ehb=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},p6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},q6=function(a,b){g.IS.call(this,a,{G:"div",
N:"ytp-reminder-menu",X:{role:"menu",tabindex:"-1"},W:[{G:"div",N:"ytp-reminder-menu-contents",W:[{G:"div",N:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.Da("ytp-reminder-menu-items");this.hide()},Hhb=function(a){var b=Ghb(a),c=0,d={};
for(c=0;c<b.length;d={DI:d.DI},c++){var e=a.j[c];e||(e=new g.V({G:"div",N:"ytp-reminder-menu-item",X:{role:"menuitem",tabindex:"0"},W:[{G:"div",N:"ytp-reminder-menu-item-icon",ra:"{{icon}}"},{G:"div",N:"ytp-reminder-menu-item-label",ra:"{{text}}"}]}),d.DI=c,e.Ra("click",function(l){return function(){var m=l.DI;a.Fb();m=Ghb(a)[m];a.ma("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ea(a.items),a.j[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=Chb();break;case "NOTIFICATIONS_NONE":h=Dhb();break;case "NOTIFICATIONS_ACTIVE":h=g.jQ()}f=f.text?g.bE(f.text):"";e.update({icon:h,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.Fb():a.md(a.buttonElement)},Ghb=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},r6=function(a){g.V.call(this,{G:"div",
W:[{G:"button",Ia:["ytp-offline-slate-button","ytp-button"],W:[{G:"div",N:"ytp-offline-slate-button-icon",ra:"{{icon}}"},{G:"div",N:"ytp-offline-slate-button-text",ra:"{{text}}"}]}]});this.F=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.j=null;(this.buttonElement=this.Da("ytp-offline-slate-button"))&&this.S(this.buttonElement,"click",this.D);this.hide()},Jhb=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&g.S(c,Ihb)?a.upcomingEventReminderButtonRenderer=g.S(c,Ihb):c&&g.S(c,Ihb)||(a.upcomingEventReminderButtonRenderer=null);s6(a)},s6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.bE(b.toggledText):"";a.update({text:c,icon:Khb(b.toggledIcon)})}else c=b.defaultText?g.bE(b.defaultText):"",a.update({text:c,icon:Khb(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=Lhb(a))?(c=b.text?g.bE(b.text):"",a.update({text:c,icon:Khb(b.icon)}),a.show()):a.hide():a.hide()},Nhb=function(a,b,c){a.C||(a.C=new g.dC(a.F.V().Pk));
var d={context:g.AB(a.C.config_||g.zB())};g.AE()&&(d.context.clientScreenNonce=g.AE());d.params=c;g.eC(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){Mhb(a)},
onTimeout:function(){Mhb(a)}})},Mhb=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,s6(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,s6(a))},Khb=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return Chb();case "NOTIFICATIONS_NONE":return Dhb();case "NOTIFICATIONS_ACTIVE":return g.jQ();default:return null}},Lhb=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.v(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=g.S(c.value,Ohb))&&c.state===b&&c.button&&g.S(c.button,g.hM))return g.S(c.button,g.hM);return null},Phb=function(a){g.V.call(this,{G:"div",
N:"ytp-offline-slate",W:[{G:"div",N:"ytp-offline-slate-background"},{G:"div",N:"ytp-offline-slate-bar",W:[{G:"span",N:"ytp-offline-slate-icon",W:[{G:"svg",X:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},W:[{G:"path",X:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{G:"circle",X:{cx:"12",cy:"12",r:"3"}}]}]},{G:"span",N:"ytp-offline-slate-messages",W:[{G:"div",N:"ytp-offline-slate-main-text",X:{"aria-label":"{{label}}"},ra:"{{mainText}}"},{G:"div",N:"ytp-offline-slate-subtitle-text",ra:"{{subtitleText}}"}]},{G:"span",N:"ytp-offline-slate-buttons"}]},{G:"button",Ia:["ytp-offline-slate-close-button","ytp-button"],W:[g.eQ()]},{G:"button",Ia:["ytp-offline-slate-open-button","ytp-button"],W:[g.dQ()]}]});var b=this;this.api=a;this.j=this.u=null;this.background=this.Da("ytp-offline-slate-background");
this.B=this.Da("ytp-offline-slate-bar");this.D=new g.Cp(function(){g.Kp(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.Cp(function(){g.Kp(b.element,"ytp-offline-slate-collapsed")},15E3);
g.I(this,this.C);g.I(this,this.D);this.countdownTimer=new g.Cp(this.FY,1E3,this);this.S(a,"presentingplayerstatechange",this.JY);this.S(a,"livestatedata",this.Qa);a=this.Da("ytp-offline-slate-close-button");this.S(a,"click",function(){g.Kp(b.element,"ytp-offline-slate-collapsed")});
a=this.Da("ytp-offline-slate-open-button");this.S(a,"click",function(){g.Mp(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Qa(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().rl;var c=8===this.api.getPresentingPlayerType();g.Op(this.element,"ytp-offline-slate-premiere-trailer",a);g.Op(this.element,"ytp-offline-slate-hide-background",c)},Qhb=function(a,b,c){if(b){var d=null!=b.subtitleText?g.bE(b.subtitleText):"";
c=c?c:null!=b.mainText?g.bE(b.mainText):"";var e,f,h,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(h=f.accessibilityData)?void 0:h.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.Op(a.element,"ytp-offline-slate-single-text-line",!d);g.Op(a.B,"ytp-offline-slate-bar-hidden",!c&&!d)}},t6=function(a,b){var c=(0,g.EA)();
this.module="heartbeat";this.trigger=a;this.j=b;this.B=c},Yhb=function(a){g.vT.call(this,a);
var b=this;this.J=!1;this.T=0;this.D=!1;this.u=new g.Cp(function(){var e=b.player.V(),f=b.getVideoData();u6(b)&&(Rhb(b)?Shb(b,e,f):(Thb(b),Uhb(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.C=!1;this.I=new g.wi(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.Z=new g.dC(void 0);this.ea=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new Fhb).getTimezoneOffset();this.B=new g.NH(this);g.I(this,this.u);g.I(this,this.B);Thb(this);Vhb(this);this.B.S(a,"heartbeatparams",this.bD);this.B.S(a,"presentingplayerstatechange",this.g_);this.B.S(a,"videoplayerreset",this.h_);this.B.S(a,g.UD("heartbeat"),this.onCueRangeEnter);this.C&&this.j&&
Whb(this,this.j);var c=new g.SD(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.SD(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.ye([c,d]);Xhb(this)},Xhb=function(a){var b=a.getVideoData();
b.nm&&(b=b.botguardData)&&g.IJa(b,a.player.V())},Thb=function(a){var b=a.getVideoData();
if(b.nm&&(b=new g.EJa(b),g.ZR.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.pk){var d=g.FJa(b);if(d){c={};var e={};d=d.split("&");d=g.v(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=Zhb[Number(e.r1c)]);c.challenge=b.videoData.pk}}a.attestationResponse=c||void 0}},Rhb=function(a){var b=a.getVideoData();
if(!g.vM(a.getVideoData())||b.kT)return!1;if(b.useInnertubeDrmService()&&b.J){a="playready"===b.J.flavor&&b.K("html5_innertube_heartbeats_for_playready");var c="widevine"===b.J.flavor&&b.K("html5_innertube_heartbeats_for_widevine");b=g.$I(b.J)&&b.K("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},$hb=function(a){if(Rhb(a))return!!a.heartbeatParams;
var b=a.getVideoData();return g.vM(a.getVideoData())&&b.useInnertubeDrmService()&&!b.hm&&!b.MJ?!1:!!b.heartbeatToken},v6=function(a,b){if(!a.u.isActive()&&a.J){var c=a.getVideoData();
if($hb(a)||c.isLivePlayback){if(void 0===b)if(a.D)if(a.C)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().pS||6E4}else b=1E3;a.u.start(b)}}},dib=function(a,b,c){b.Qn&&(c=g.Ui(c,{internalipoverride:b.Qn}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Sb&&(d.kpt=b.Sb);c=g.Ui(c,d);g.By(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&u6(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=aib(e);if(f){a.player.Na("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(bib))?"0"===h[1]?0:1:-1;cib(a,f,e,h)}},
onError:function(e){u6(a)&&w6(a,!0,"net-"+e.status)},
onTimeout:function(){u6(a)&&w6(a,!0,"timeout")},
withCredentials:!0})},Shb=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.Ui(a.heartbeatParams.url,{request_id:g.Csa()});c.ya&&(e=g.Ui(e,{vvt:c.ya}),c.mdxEnvironment&&(e=g.Ui(e,{mdx_environment:c.mdxEnvironment})));g.IK(b,c.oauthToken).then(function(f){f&&(e=g.Ui(e,{access_token:f}));dib(a,c,e)})}},u6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.MN(a.player.Cb(a.getPlayerType()),4)?!1:$hb(a)||b.isLivePlayback?!0:(x6(a),!1)},Uhb=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.oa)?d:c.heartbeatServerData};a.ea=a.attestationResponse;c.nm&&(e.attestationResponse=a.ea);var f=g.cS(c),h;d=null!=(h=f.client)?h:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=h;h={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.AK(b)){h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=eib(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.wb())?void 0:g.JT(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});h.unpluggedParams=d}e.heartbeatRequestParams=
h;c.isLivePlayback&&(l=eib(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l}));a.player.ma("heartbeatRequest",e);var n={timeout:3E4,onSuccess:function(p){if(!a.u.isActive()&&u6(a)){var q=a.getVideoData(),t=q.nm&&null==a.ea,x;q.nm=!(null==(x=p.heartbeatAttestationConfig)||!x.requiresAttestation)||t;t=p.playabilityStatus;x=JSON.stringify(t)||"{}";p.authenticationMismatch&&a.player.xa("authshear",{});var z=-1;var D=p.playabilityStatus;D&&(a.player.Na("onHeartbeat",
D),"OK"===D.status?z=p.stopHeartbeat?2:0:"UNPLAYABLE"===D.status?z=1:"LIVE_STREAM_OFFLINE"===D.status&&(z=0));a.sequenceNumber&&-1===z||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.oa=p.heartbeatServerData);q.PJ=p;p.playerCueRanges&&0<p.playerCueRanges.length&&(q.cueRanges=p.playerCueRanges,q.ma("dataupdated"));var G,O;(null==(G=p.progressBarConfig)?0:G.progressBarStartPosition)&&(null==(O=p.progressBarConfig)?0:O.progressBarEndPosition)&&(q.progressBarStartPosition=p.progressBarConfig.progressBarStartPosition,
q.progressBarEndPosition=p.progressBarConfig.progressBarEndPosition);cib(a,t,x,z)}},
onError:function(p){u6(a)&&w6(a,!0,"net-"+p.status)},
onTimeout:function(){u6(a)&&w6(a,!0,"timeout")}};
g.IK(b,g.QM(c)).then(function(p){p&&(n.BS="Bearer "+p);g.eC(a.Z,"player/heartbeat",e,n)})},cib=function(a,b,c,d){-1===d?(b="decode "+g.bg(c,3),w6(a,!1,b)):2===d?(x6(a),a.D=!0):(a.T=0,a.u.stop(),1===d?(a.D=!1,a.player.Mg("heartbeat.stop",2,a.yf(c)),g.lA("heartbeatActionPlayerHalted",fib(b))):(a.D=!0,c=0,a.C&&b&&(c=Whb(a,b),a.player.ma("livestatedata",b)),c?v6(a,c):v6(a)))},Whb=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!(c.switchStreamsImmediately||
c.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===c.transitionTiming)),e=gib(c),f=a.getVideoData(),h=a.player.Cb(a.getPlayerType()),l=h.Zc()&&!g.BM(f)&&!a.player.isAtLiveHead(a.getPlayerType());
if(f.V().Rd()){var m,n=(null==(m=a.player.qe())?void 0:m.kc())||{};n.status=b.status||"";n.dvr=""+ +l;n["switch"]=""+ +d;n.ended=""+ +!(!c||!c.displayEndscreen);a.player.xa("heartbeat",n)}if(l&&!d)return e;d=c&&c.streamTransitionEndpoint&&g.S(c.streamTransitionEndpoint,g.jM);if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(c&&c.transitionTiming))a.getVideoData().transitionEndpointAtEndOfStream=d;else{if(l=d)(l=d&&d.videoId)?(a.player.Kn(l,{autonav:"1"},void 0,!0,!0,d,g.QM(a.getVideoData())),a.EG("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
"HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",b),l=!0):l=!1;if(l)return e}if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;l=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;m=d!==l&&null!=d;if(!f.hlsvp&&!f.sb||m){var p={video_id:f.videoId};f.XJ&&(p.is_live_destination="1");a.player.K("web_player_heartbeat_request_watch_next")||(p.disable_watch_next=!0,p.raw_watch_next_response=f.hd);
p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;p.force_gvi=f.Pn;p.Rl=f.Rl;f.T&&(p.vss_credentials_token=f.T,p.vss_credentials_token_type=f.ek);f.ya&&(p.vvt=f.ya);c=void 0;f.hlsvp||f.sb?m&&(c=new t6("broadcastIdChanged",l+","+d),a.EG("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(d&&(c=new t6("formatsReceived",""+d)),a.EG("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b));a.player.loadVideoByPlayerVars(p,
void 0,void 0,void 0,c);return e}a.player.hg("heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.yb&&a.api.Vz()):g.PO(h)&&(f=(null==(p=a.player.qe())?void 0:p.kc())||{},a.player.xa("hbse",f,!0),a.player.Vz(),a.player.Na("onLiveMediaEnded",b)));return e},gib=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},w6=function(a,b,c){var d=a.player.V();
if(!a.u.isActive()){a.u.stop();a.T++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.GS||b&&!g.vM(a.getVideoData())&&!$hb(a)&&f.isLivePlayback)f=!1;else{var h,l;(null==(l=a.heartbeatParams)?0:l.Lz)?h=a.heartbeatParams.Lz:h=f.qS||5;f=a.T>=h}f?(g.lA("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:fib()),(b=a.getVideoData())&&b.isLivePlayback?a.player.Mg(e,1,"\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\uc774 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
c):a.player.Mg(e,1,"\ub3d9\uc601\uc0c1\uc5d0 \ub77c\uc774\uc120\uc2a4\ub97c \ubd80\uc5ec\ud558\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",c)):(d.K("html5_report_non_fatal_heartbeat_error")&&a.player.Vq(e,{msg:c}),v6(a,a.I.getValue()),g.Gi(a.I))}},fib=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},x6=function(a){a.T=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},Vhb=function(a){var b=a.getVideoData(),c=a.player.V();
if(b.isLivePlayback)if(g.qJ(c.D)){a.C=!0;a.J=!0;if(!g.oK(c)||g.AK(c))a.offlineSlate=new Phb(a.player),g.I(a,a.offlineSlate),g.GS(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;"UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)&&(a.j?(d=gib(a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?v6(a,d):v6(a,7500):v6(a,1E3))}else a.player.Mg("html5.unsupportedlive",2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else g.wb(b.Ja,
"heartbeat")&&a.player.hg("heartbeat",a.getPlayerType())},eib=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},aib=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},Zhb=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],hib={EZ:["BC","AD"],DZ:["Before Christ","Anno Domini"],e1:"JFMAMJJASOND".split(""),A1:"JFMAMJJASOND".split(""),Z0:"January February March April May June July August September October November December".split(" "),z1:"January February March April May June July August September October November December".split(" "),s1:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
C1:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),S1:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),E1:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),u1:"Sun Mon Tue Wed Thu Fri Sat".split(" "),D1:"Sun Mon Tue Wed Thu Fri Sat".split(" "),f1:"SMTWTFS".split(""),B1:"SMTWTFS".split(""),t1:["Q1","Q2","Q3","Q4"],m1:["1st quarter","2nd quarter","3rd quarter","4th quarter"],hZ:["AM","PM"],vZ:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],I1:["h:mm:ss\u202fa zzzz",
"h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],wZ:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],xQ:6,T1:[5,6],yQ:5};
hib={EZ:["BC","AD"],DZ:["\uae30\uc6d0\uc804","\uc11c\uae30"],e1:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),A1:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),Z0:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),z1:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
s1:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),C1:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),S1:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),E1:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
u1:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),D1:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),f1:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),B1:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),t1:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"],m1:["\uc81c 1/4\ubd84\uae30","\uc81c 2/4\ubd84\uae30","\uc81c 3/4\ubd84\uae30","\uc81c 4/4\ubd84\uae30"],hZ:["\uc624\uc804","\uc624\ud6c4"],vZ:["y\ub144 M\uc6d4 d\uc77c EEEE","y\ub144 M\uc6d4 d\uc77c",
"y. M. d.","yy. M. d."],I1:["a h\uc2dc m\ubd84 s\ucd08 zzzz","a h\uc2dc m\ubd84 s\ucd08 z","a h:mm:ss","a h:mm"],wZ:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],xQ:6,T1:[5,6],yQ:5};g.k=Fhb.prototype;g.k.yT=hib.xQ;g.k.AT=hib.yQ;g.k.clone=function(){var a=new Fhb(this.date);a.yT=this.yT;a.AT=this.AT;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.u||a.j){var b=this.getMonth()+a.j+12*a.u,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),p6(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+Bhb(Math.abs(a),b?6:4),Bhb(this.getMonth()+1,2),Bhb(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var iib=new g.tr("addUpcomingEventReminderEndpoint");var jib=new g.tr("removeUpcomingEventReminderEndpoint");var kib=new g.tr("updateUpcomingEventReminderButtonStateCommand");var Ihb=new g.tr("upcomingEventReminderButtonRenderer"),Ohb=new g.tr("upcomingEventReminderButtonStateRenderer");g.w(q6,g.IS);q6.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.IS.prototype.hide.call(this)};
q6.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.IS.prototype.show.call(this)};
q6.prototype.qa=function(){g.kb(this.j);g.IS.prototype.qa.call(this)};g.w(r6,g.V);
r6.prototype.D=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;s6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.yb)this.j.Fb();else{var b=Lhb(this);b&&this.B(b.serviceEndpoint||b.command);b=(null==(a=g.S(null==b?void 0:b.command,g.UQ))?void 0:a.commands)||[];a:{a=g.v(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=null==(b=g.S(c.value,
g.mab))?void 0:null==(d=b.popup)?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new q6(this.F,this.buttonElement),this.j.Ea(this.element),g.I(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.B,this));b=this.j;b.menuPopupRenderer=a;Hhb(b)}};
r6.prototype.B=function(a){var b=g.S(a,iib),c=g.S(a,jib);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(Nhb(this,e,d.params),a=g.v(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.S(b,kib)){this.u=g.S(b,kib).state;s6(this);break}}};g.w(Phb,g.V);g.k=Phb.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Qa=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.u=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.FY():Qhb(this,b);var e,f,h,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(h=f.offlineSlate)?void 0:null==(l=h.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new r6(this.api),this.j.Ea(this.Da("ytp-offline-slate-buttons")),g.I(this,this.j)),Jhb(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&Jhb(this.j,null,null);this.u=a}else this.u=null;this.JY()};
g.k.JY=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.Cb(),d=this.getVideoData();b=d.isLivePlayback&&(g.PO(c)||g.MN(c,2)||g.MN(c,64));var e=2===d.autonavState&&g.MN(c,2);c=c.Zc()&&!g.BM(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.yb?(null==a?0:g.UN(a,2))&&!this.getVideoData().rl&&(g.Mp(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.Mp(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.ma("offlineslatestatechange"),
this.I&&this.api.Vz()):this.yb&&(this.hide(),this.api.ma("offlineslatestatechange"))};
g.k.FY=function(){var a,b,c,d,e=null==(a=this.u)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Va()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(Qhb(this,e),this.countdownTimer.stop()):(Qhb(this,e,g.aR(b-a)),g.Dp(this.countdownTimer)))};
g.k.qa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.V.prototype.qa.call(this)};t6.prototype.u=function(a){return this.trigger&&a.trigger?this.module===a.module&&this.trigger===a.trigger&&this.j===a.j:!1};
t6.prototype.isExpired=function(){return 6E4<(0,g.EA)()-this.B};
t6.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.j};g.w(Yhb,g.vT);g.k=Yhb.prototype;g.k.qa=function(){x6(this);this.player.gf("heartbeat");g.vT.prototype.qa.call(this)};
g.k.onCueRangeEnter=function(){this.J=!0;v6(this,2E3)};
g.k.bD=function(a){this.heartbeatParams=a;v6(this,2E3)};
g.k.g_=function(a){var b;8!==this.player.getPresentingPlayerType()&&"UNPLAYABLE"!==(null==(b=this.j)?void 0:b.status)&&(g.MN(a.state,2)||g.MN(a.state,64)?(x6(this),this.C&&(this.J=!0,v6(this,1E3))):(g.MN(a.state,1)||g.MN(a.state,8))&&v6(this,2E3))};
g.k.h_=function(){3!==this.player.getPresentingPlayerType()&&v6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Tk=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.EG=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.lA("heartbeatActionPlayerTransitioned",a)};
g.k.yf=function(a){var b="LICENSE",c=aib(a);if(c)return c.reason||g.VT[b]||"";(a=a.match(bib))&&(a=Number(a[1]))&&(b=g.wCa(a));return g.VT[b]||""};
g.k.AC=function(){return!!this.offlineSlate&&this.offlineSlate.yb};
var bib=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.uT("heartbeat",Yhb);})(_yt_player);