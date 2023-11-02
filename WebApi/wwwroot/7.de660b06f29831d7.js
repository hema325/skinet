"use strict";(self.webpackChunkClient=self.webpackChunkClient||[]).push([[7],{6007:(x,c,i)=>{i.r(c),i.d(c,{AccountModule:()=>U});var m=i(6814),a=i(2999),n=i(95),t=i(4769),p=i(6448),g=i(2425),d=i(4377);let f=(()=>{class e{constructor(o,r,s,l,w){this.accountService=o,this.fb=r,this.activatedRouter=s,this.router=l,this.toastrService=w,this.loginForm=this.fb.group({email:["",[n.kI.required,n.kI.email]],password:["",n.kI.required]})}login(){this.accountService.login(this.loginForm.value).subscribe({next:o=>{let r=this.activatedRouter.snapshot.queryParamMap.get("returnUrl");console.log(r),r||(r="/home"),this.router.navigateByUrl(r),this.toastrService.success("logged in successfully")}})}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(p.B),t.Y36(n.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g._W))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:8,vars:4,consts:[[1,"container","display-flex","justify-content-center","mt-3","col","col-sm-5","col-mg-4"],[1,"text-center"],[1,"mb-3"],[3,"formGroup","ngSubmit"],["label","Email","type","text",3,"control"],["label","Password","type","password",3,"control"],["type","submit","value","Login",1,"btn","btn-primary","w-100","py-2",3,"disabled"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Login"),t.qZA()(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return s.login()}),t._UZ(5,"app-form-input",4)(6,"app-form-input",5)(7,"input",6),t.qZA()()),2&r&&(t.xp6(4),t.Q6J("formGroup",s.loginForm),t.xp6(1),t.Q6J("control",s.loginForm.controls.email),t.xp6(1),t.Q6J("control",s.loginForm.controls.password),t.xp6(1),t.Q6J("disabled",s.loginForm.invalid))},dependencies:[n._Y,n.JL,n.sg,d.s]})}return e})();function v(e,u){return o=>{const r=o,s=o.parent?.get(e);return r?.value?r.value==s?.value?null:{compareTo:{targetName:u||e}}:null}}var y=i(3620),F=i(8180),b=i(4664),C=i(7398),J=i(4716);function S(e,u){if(1&e&&(t.TgZ(0,"ul",9)(1,"li"),t._uU(2),t.qZA()()),2&e){const o=u.$implicit;t.xp6(2),t.Oqu(o)}}const Z=[{path:"login",component:f},{path:"register",component:(()=>{class e{constructor(o,r,s,l){this.fb=o,this.accountService=r,this.router=s,this.toastrService=l,this.errors=[],this.passwordPattern="(?=(.*[0-9]))(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}",this.registerForm=this.fb.group({name:["",[n.kI.required,n.kI.maxLength(100)]],email:["",[n.kI.required,n.kI.email],[this.emailUnique()]],password:["",[n.kI.required,n.kI.minLength(6),e=>e.value?/(?=(.*[0-9]))(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/.test(e.value)?null:{password:{actualValue:e.value}}:null]],confirmPassword:["",[n.kI.required,v("password")]]})}register(){this.accountService.register(this.registerForm.value).subscribe({error:o=>this.errors=o.errors,complete:()=>{this.router.navigateByUrl("/home"),this.toastrService.success("registered successfully")}})}emailUnique(){return o=>o.valueChanges.pipe((0,y.b)(500),(0,F.q)(1),(0,b.w)(()=>this.accountService.isEmailUnique(o.value).pipe((0,C.U)(r=>r?null:{emailUnique:"false"}),(0,J.x)(()=>o.markAsTouched()))))}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(n.qu),t.Y36(p.B),t.Y36(a.F0),t.Y36(g._W))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:11,vars:7,consts:[[1,"container","display-flex","justify-content-center","mt-3","col","col-sm-5","col-mg-4"],["class","text-danger",4,"ngFor","ngForOf"],[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],["type","text","label","Name",3,"control"],["type","text","label","Email",3,"control"],["type","password","label","Password",3,"control"],["type","password","label","Confirm Password",3,"control"],["type","submit","value","Register",1,"btn","btn-primary","w-100","py-2",3,"disabled"],[1,"text-danger"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0),t.YNc(1,S,3,1,"ul",1),t.TgZ(2,"div",2)(3,"h1"),t._uU(4,"Register"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return s.register()}),t._UZ(6,"app-form-input",4)(7,"app-form-input",5)(8,"app-form-input",6)(9,"app-form-input",7)(10,"input",8),t.qZA()()),2&r&&(t.xp6(1),t.Q6J("ngForOf",s.errors),t.xp6(4),t.Q6J("formGroup",s.registerForm),t.xp6(1),t.Q6J("control",s.registerForm.controls.name),t.xp6(1),t.Q6J("control",s.registerForm.controls.email),t.xp6(1),t.Q6J("control",s.registerForm.controls.password),t.xp6(1),t.Q6J("control",s.registerForm.controls.confirmPassword),t.xp6(1),t.Q6J("disabled",s.registerForm.invalid))},dependencies:[m.sg,n._Y,n.JL,n.sg,d.s]})}return e})()}];let A=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(Z),a.Bz]})}return e})();var T=i(6208);let U=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[m.ez,A,n.UX,T.m]})}return e})()}}]);