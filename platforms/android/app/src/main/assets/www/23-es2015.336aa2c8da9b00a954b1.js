(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4cNi":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var s=u("pMnS"),e=u("MKJQ"),o=u("sZkV"),a=u("iInd"),b=u("SVse"),r=u("b+hB"),c=u("jmUF"),p=u("VRCc"),h=t.ob({encapsulation:2,styles:[],data:{}});function g(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"div",[["id","firebaseui-auth-container"]],null,null,null,null,null))],null,null)}var d=u("mrSG"),m=u("X+KH"),k=u("6loG");class f{constructor(l,n,u,t,i,s,e){this.router=l,this.userData=n,this.firebaseAuthentication=u,this.loadingCtrl=t,this.toastr=i,this.afAuth=s,this.menu=e,this.signup={email:"",password:""},this.submitted=!1}ngOnInit(){this.menu.enable(!1)}onRegister(l){return d.a(this,void 0,void 0,(function*(){const n=yield this.loadingCtrl.create({message:"Post wird verarbeitet...",spinner:"crescent",showBackdrop:!0});try{this.firebaseAuthentication.createUserWithEmailAndPassword(this.signup.email,this.signup.password),this.submitted=!0,l.valid&&(this.userData.signup(this.signup.email),this.router.navigateByUrl("/app/tabs/schedule"),n.dismiss(),this.toast("Willkommen"+this.signup.email+" !","success"))}catch(u){n.dismiss(),this.toast("Etwas ist fehlgeschlagen! ","danger"),n.dismiss()}}))}routeToLogin(){this.router.navigateByUrl("./app/tabs/login")}toast(l,n){return d.a(this,void 0,void 0,(function*(){(yield this.toastr.create({message:l,position:"bottom",color:n,duration:2e3})).present()}))}onSignup(l){this.submitted=!0,l.valid&&(this.userData.signup(this.signup.email),this.router.navigateByUrl("/app/tabs/schedule"))}}var v=t.ob({encapsulation:0,styles:[[".signup-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function A(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,17,"ion-header",[],null,null,null,e.wb,e.v)),t.pb(1,49152,null,0,o.C,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,15,"ion-toolbar",[],null,null,null,e.bc,e.ab)),t.pb(3,49152,null,0,o.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,e.gb,e.f)),t.pb(5,49152,null,0,o.m,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-label",[],null,null,null,e.Db,e.C)),t.pb(7,49152,null,0,o.O,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Login"])),(l()(),t.qb(9,0,null,0,5,"ion-button",[["color","primary"],["routerLink","/login"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,11).onClick()&&i),"click"===n&&(i=!1!==t.Cb(l,12).onClick(u)&&i),i}),e.fb,e.e)),t.pb(10,49152,null,0,o.l,[t.h,t.k,t.x],{color:[0,"color"]},null),t.pb(11,16384,null,0,a.n,[a.m,a.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.pb(12,737280,null,0,o.Kb,[b.h,o.Gb,t.k,a.m,[2,a.n]],null,null),(l()(),t.qb(13,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,e.xb,e.w)),t.pb(14,49152,null,0,o.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(15,0,null,0,2,"ion-title",[],null,null,null,e.Zb,e.Y)),t.pb(16,49152,null,0,o.yb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Registrieren"])),(l()(),t.qb(18,0,null,null,5,"ion-content",[],null,null,null,e.pb,e.o)),t.pb(19,49152,null,0,o.v,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,3,"ion-card",[["class","ion-padding"],["stlye","top: 50%; left: 50%"]],null,null,null,e.lb,e.g)),t.pb(21,49152,null,0,o.n,[t.h,t.k,t.x],null,null),(l()(),t.qb(22,0,null,0,1,"firebase-ui",[],null,null,null,g,h)),t.pb(23,245760,null,0,r.b,[p.a,"firebaseUIAuthConfig","firebaseUIAuthConfigFeature",t.x,r.c],null,null)],(function(l,n){l(n,10,0,"primary"),l(n,11,0,"/login"),l(n,12,0),l(n,14,0,"log-out"),l(n,23,0)}),null)}function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"page-signup",[],null,null,null,A,v)),t.pb(1,114688,null,0,f,[a.m,m.a,k.a,o.Db,o.Nb,p.a,o.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.mb("page-signup",f,x,{},{},[]),w=u("s7LF");class q{}u.d(n,"SignUpModuleNgFactory",(function(){return y}));var y=t.nb(i,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[s.a,C]],[3,t.j],t.v]),t.Ab(4608,b.l,b.k,[t.s,[2,b.v]]),t.Ab(4608,w.l,w.l,[]),t.Ab(4608,o.c,o.c,[t.x,t.g]),t.Ab(4608,o.Fb,o.Fb,[o.c,t.j,t.p]),t.Ab(4608,o.Jb,o.Jb,[o.c,t.j,t.p]),t.Ab(4608,r.c,r.c,[c.c,[2,c.b],[2,p.g],t.x]),t.Ab(1073742336,b.b,b.b,[]),t.Ab(1073742336,w.k,w.k,[]),t.Ab(1073742336,w.b,w.b,[]),t.Ab(1073742336,o.Cb,o.Cb,[]),t.Ab(1073742336,a.q,a.q,[[2,a.v],[2,a.m]]),t.Ab(1073742336,q,q,[]),t.Ab(1073742336,r.a,r.a,[]),t.Ab(1073742336,i,i,[]),t.Ab(1024,a.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);