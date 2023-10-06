"use strict";var c=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var h=c(function(G,f){
var o=require('@stdlib/utils-define-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),m=require('@stdlib/assert-is-positive-number/dist').isPrimitive,g=require('@stdlib/assert-is-number/dist').isPrimitive,p=require('@stdlib/assert-is-nan/dist'),v=require('@stdlib/stats-base-dists-normal-entropy/dist'),l=require('@stdlib/stats-base-dists-normal-kurtosis/dist'),q=require('@stdlib/stats-base-dists-normal-mean/dist'),y=require('@stdlib/stats-base-dists-normal-median/dist'),d=require('@stdlib/stats-base-dists-normal-mode/dist'),b=require('@stdlib/stats-base-dists-normal-skewness/dist'),w=require('@stdlib/stats-base-dists-normal-stdev/dist'),P=require('@stdlib/stats-base-dists-normal-variance/dist'),F=require('@stdlib/stats-base-dists-normal-cdf/dist'),k=require('@stdlib/stats-base-dists-normal-logcdf/dist'),D=require('@stdlib/stats-base-dists-normal-logpdf/dist'),E=require('@stdlib/stats-base-dists-normal-mgf/dist'),T=require('@stdlib/stats-base-dists-normal-pdf/dist'),V=require('@stdlib/stats-base-dists-normal-quantile/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function L(r){return F(r,this.mu,this.sigma)}function M(r){return k(r,this.mu,this.sigma)}function x(r){return D(r,this.mu,this.sigma)}function C(r){return E(r,this.mu,this.sigma)}function N(r){return T(r,this.mu,this.sigma)}function O(r){return V(r,this.mu,this.sigma)}function e(){var r,t;if(!(this instanceof e))return arguments.length===0?new e:new e(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[0],r=arguments[1],!g(t)||p(t))throw new TypeError(s('1618p',t));if(!m(r))throw new TypeError(s('1617c',r))}else t=0,r=1;return o(this,"mu",{configurable:!1,enumerable:!0,get:function(){return t},set:function(i){if(!g(i)||p(i))throw new TypeError(s('1618d',i));t=i}}),o(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(i){if(!m(i))throw new TypeError(s('1618k',i));r=i}}),this;}n(e.prototype,"entropy",function(){return v(this.mu,this.sigma)});n(e.prototype,"kurtosis",function(){return l(this.mu,this.sigma)});n(e.prototype,"mean",function(){return q(this.mu,this.sigma)});n(e.prototype,"median",function(){return y(this.mu,this.sigma)});n(e.prototype,"mode",function(){return d(this.mu,this.sigma)});n(e.prototype,"skewness",function(){return b(this.mu,this.sigma)});n(e.prototype,"stdev",function(){return w(this.mu,this.sigma)});n(e.prototype,"variance",function(){return P(this.mu,this.sigma)});u(e.prototype,"cdf",L);u(e.prototype,"logcdf",M);u(e.prototype,"logpdf",x);u(e.prototype,"mgf",C);u(e.prototype,"pdf",N);u(e.prototype,"quantile",O);f.exports=e
});var R=h();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
