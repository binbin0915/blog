(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{751:function(e,t,n){"use strict";n.r(t);n(722);var a=n(720),r=n(92),c=n(69),s=n(70),i=n(73),o=n(71),u=n(72),l=n(1),d=n.n(l),m=n(293),p=n.n(m),f=(n(710),n(708)),h=n(74),b=n(733),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.dispatchDelUser;return d.a.createElement(l.Fragment,null,d.a.createElement(f.a,{onConfirm:function(){n({id:t})},title:"\u786e\u8ba4\u5220\u9664\u6b64\u7528\u6237\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},d.a.createElement("span",{style:{cursor:"pointer",color:"#1890ff"}},"\u5220\u9664")))}}]),t}(l.Component),y=Object(h.b)(null,function(e){return{dispatchDelUser:function(t){return e(Object(b.b)(t))}}})(g),O=[{key:"username",title:"\u7528\u6237\u540d",dataIndex:"username",render:function(e){return d.a.createElement("span",{style:{color:"#096dd9"}},e)}},{key:"createdAt",title:"\u6ce8\u518c\u65f6\u95f4",dataIndex:"createdAt",defaultSortOrder:"descend",sorter:function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()},render:function(e){return d.a.createElement("span",null,p()(e).format("YYYY-MM-DD HH:mm:ss"))}},{key:"id",title:"\u64cd\u4f5c",dataIndex:"id",render:function(e){return d.a.createElement(y,{id:e})}}],j=(n(108),n(31)),v=(n(687),n(688)),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).changeKeyword=function(e){var t=e.target.value;n.setState(function(){return{keyword:t}})},n.submit=function(){(0,n.props.getUsers)({keyword:n.state.keyword})},n.state={keyword:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.keyword;return d.a.createElement("div",{className:"article-filter"},d.a.createElement("div",{className:"item"},"\u7528\u6237\u540d\uff1a",d.a.createElement(v.a,{value:e,onChange:this.changeKeyword,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u5173\u952e\u5b57",className:"keyword"})),d.a.createElement("div",{className:"item"},d.a.createElement(j.a,{type:"primary",onClick:this.submit},"\u67e5\u627e")))}}]),t}(l.Component),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).getUsers=function(e){var t=n.props.dispatchGetUserList,a=Object(r.a)({},n.state.params,e);n.setState(function(){return{params:a}}),t(a)},n.onChange=function(e){n.getUsers({currentPage:e})},n.state={params:{}},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.getUsers({})}},{key:"render",value:function(){var e=this.props,t=e.userList,n=e.pager,r=n.currentPage,c=n.pageSize,s=n.total;return d.a.createElement("div",{className:"user-list-container",style:{padding:"12px 33px 45px"}},d.a.createElement(k,{getUsers:this.getUsers}),d.a.createElement(a.a,{rowKey:"id",bordered:!0,className:"user-list",columns:O,dataSource:t,pagination:{current:r,pageSize:c,total:s,onChange:this.onChange},locale:{emptyText:"\u6682\u65e0\u6570\u636e"}}))}}]),t}(l.Component);t.default=Object(h.b)(function(e){var t=e.user.userListData;return{userList:t.userList,pager:t.pager,loading:e.common.loading}},function(e){return{dispatchGetUserList:function(t){return e(Object(b.c)(t))}}})(w)}}]);