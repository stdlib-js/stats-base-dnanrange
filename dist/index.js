"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(B,d){
var c=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r,i,s){var v,u,t,a,n;if(e<=0)return NaN;if(e===1||i===0)return c(r[s])?r[s]:0;for(t=s,n=0;n<e&&(a=r[t],a!==a);n++)t+=i;if(n===e)return NaN;for(u=a,v=u,n+=1,n;n<e;n++)t+=i,a=r[t],!c(a)&&(a<u?u=a:a>v&&(v=a));return v-u}d.exports=x
});var p=f(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function b(e,r,i){return _(e,r,i,R(e,i))}m.exports=b
});var j=f(function(D,g){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),E=o();k(y,"ndarray",E);g.exports=y
});var O=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),q,l=h(O(__dirname,"./native.js"));w(l)?q=z:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
