"use strict";var o=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var m=o(function(z,c){
var q=require('@stdlib/math-base-assert-is-nan/dist');function d(a,i,v){var t,u,n,e,r;if(a<=0)return NaN;if(a===1||v===0)return q(i[0])?NaN:0;for(v<0?n=(1-a)*v:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=v;if(r===a)return NaN;for(u=e,t=u,r+=1,r;r<a;r++)n+=v,e=i[n],!q(e)&&(e<u?u=e:e>t&&(t=e));return t-u}c.exports=d
});var g=o(function(A,p){
var l=require('@stdlib/math-base-assert-is-nan/dist');function k(a,i,v,t){var u,n,e,r,f;if(a<=0)return NaN;if(a===1||v===0)return l(i[t])?i[t]:0;for(e=t,f=0;f<a&&(r=i[e],r!==r);f++)e+=v;if(f===a)return NaN;for(n=r,u=n,f+=1,f;f<a;f++)e+=v,r=i[e],!l(r)&&(r<n?n=r:r>u&&(u=r));return u-n}p.exports=k
});var x=o(function(B,j){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),_=g();R(y,"ndarray",_);j.exports=y
});var E=require("path").join,N=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),h=x(),s,b=N(E(__dirname,"./native.js"));O(b)?s=h:s=b;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
