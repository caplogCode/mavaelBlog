(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/yGZ":function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("MKJQ"),b=u("sZkV"),r=u("X+KH"),a=u("I5iV"),c=u("ZAI4");class h{constructor(n,l,u,t){this.userData=n,this.router=l,this.menu=u,this.afAuth=t,this.counter=0}ngAfterViewInit(){this.menu.enable(!1),new a.auth.AuthUI(c.b.auth()).start("#firebaseui-auth-container",c.c)}onChangeIndex(){return this.counter++,this.counter}changeMethodIcon(){return"Login"===this.onChangeTitle()?"person-add":"log-out"}onChangeTitle(){return!0===this.onChangeAuthMethod()?"Login":"Registrieren"}onChangeAuthMethod(){return this.onChangeIndex()%2==0}onSignup(){this.router.navigateByUrl("/signup")}}var s=u("iInd"),g=u("VRCc"),p=t.ob({encapsulation:0,styles:[[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function d(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,11,"ion-header",[],null,null,null,i.wb,i.v)),t.pb(1,49152,null,0,b.C,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.bc,i.ab)),t.pb(3,49152,null,0,b.Ab,[t.h,t.k,t.x],null,null),(n()(),t.qb(4,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,i.gb,i.f)),t.pb(5,49152,null,0,b.m,[t.h,t.k,t.x],null,null),(n()(),t.qb(6,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.onChangeIndex()&&t),t}),i.fb,i.e)),t.pb(7,49152,null,0,b.l,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Jb(8,0,[" ",""])),(n()(),t.qb(9,0,null,0,2,"ion-title",[],null,null,null,i.Zb,i.Y)),t.pb(10,49152,null,0,b.yb,[t.h,t.k,t.x],null,null),(n()(),t.Jb(11,0,["",""])),(n()(),t.qb(12,0,null,null,4,"ion-content",[],null,null,null,i.pb,i.o)),t.pb(13,49152,null,0,b.v,[t.h,t.k,t.x],null,null),(n()(),t.qb(14,0,null,0,2,"ion-card",[["class","ion-padding"]],null,null,null,i.lb,i.g)),t.pb(15,49152,null,0,b.n,[t.h,t.k,t.x],null,null),(n()(),t.qb(16,0,null,0,0,"div",[["id","firebaseui-auth-container"]],null,null,null,null,null))],(function(n,l){n(l,7,0,"primary")}),(function(n,l){var u=l.component;n(l,8,0,u.onChangeTitle()),n(l,11,0,u.onChangeTitle())}))}var A=t.mb("page-login",h,(function(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"page-login",[],null,null,null,d,p)),t.pb(1,4243456,null,0,h,[r.a,s.m,b.Eb,g.a],null,null)],null,null)}),{},{},[]),C=u("SVse"),k=u("s7LF");class m{}u.d(l,"LoginModuleNgFactory",(function(){return x}));var x=t.nb(o,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[e.a,A]],[3,t.j],t.v]),t.Ab(4608,C.l,C.k,[t.s,[2,C.v]]),t.Ab(4608,k.l,k.l,[]),t.Ab(4608,b.c,b.c,[t.x,t.g]),t.Ab(4608,b.Fb,b.Fb,[b.c,t.j,t.p]),t.Ab(4608,b.Jb,b.Jb,[b.c,t.j,t.p]),t.Ab(1073742336,C.b,C.b,[]),t.Ab(1073742336,k.k,k.k,[]),t.Ab(1073742336,k.b,k.b,[]),t.Ab(1073742336,b.Cb,b.Cb,[]),t.Ab(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t.Ab(1073742336,m,m,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,s.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);