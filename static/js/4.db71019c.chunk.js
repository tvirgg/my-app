(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{333:function(t,e,a){t.exports={profile_img:"Profile_profile_img__2wbR_",profile_name:"Profile_profile_name__3jX19",status:"Profile_status__2XSNt"}},334:function(t,e,a){t.exports={loading:"Profile-cont_loading__1mDL2"}},338:function(t,e,a){"use strict";a.r(e);var n=a(45),s=a(46),r=a(48),u=a(49),l=a(0),i=a.n(l),o=(a(26),a(333)),p=a.n(o),c=a(152),m=a(327),f=a(334),h=a.n(f),d=a(145),g=a.n(d),E=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{className:h.a.loading,src:g.a}))},_=a(147),b=a(325),j=(i.a.Component,a(153)),S=function(t){var e=Object(l.useState)(!1),a=Object(j.a)(e,2),n=a[0],s=a[1],r=Object(l.useState)(t.status),u=Object(j.a)(r,2),o=u[0],p=u[1];Object(l.useEffect)((function(){p(t.status)}),[t.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(o)},value:o})))},O=function(t){return t.profile?i.a.createElement(m.a,null,i.a.createElement(b.a,null,i.a.createElement(_.a,{md:4},i.a.createElement("h2",{className:p.a.profile_name},t.profile.fullName),i.a.createElement("img",{className:p.a.profile_img,src:null!=t.profile.photos.large?t.profile.photos.large:"https://pbs.twimg.com/profile_images/1081531670656962561/J9QiHhLT_400x400.jpg"})),i.a.createElement(_.a,{md:8},i.a.createElement("h3",{className:p.a.status},i.a.createElement(S,{status:t.status,updateStatus:t.updateStatus}))))):i.a.createElement(E,null)},v=function(t){return i.a.createElement(m.a,null,i.a.createElement(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(c.a,null))},P=a(14),y=a(149),D=a(36),N=a(11),k=function(t){Object(u.a)(a,t);var e=Object(r.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.myuserid)||this.props.history.push("/login"),this.props.setProfilePage(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(i.a.Component);e.default=Object(N.d)(Object(P.b)((function(t){return{profile:t.ProfileData.profile,status:t.ProfileData.status,myuserid:t.AuthData.id,isAuth:t.AuthData.isAuth}}),{setProfilePage:y.c,getStatus:y.b,updateStatus:y.d}),D.f)(k)}}]);
//# sourceMappingURL=4.db71019c.chunk.js.map