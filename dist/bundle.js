!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="dist/",t(t.s=1)}([function(n,e,t){},function(n,e,t){"use strict";t.r(e);t(0);$(function(){var n,e,t,o,r,i,c,u;$(".bar-container").on("click",function(n){var e=$(n.currentTarget),t=$(".navbar"),o=$("body");"none"===t.css("display")?t.slideDown(150):t.slideUp(150),e.toggleClass("change"),o.css("overflow",function(){return"hidden"===o.css("overflow")?"":"hidden"})}),n=$(".nav-link"),e=$(".bar-container"),n.on("click",function(n){e.trigger("click");var t=$(n.currentTarget).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},200)}),t=$("#top"),o=$("html, body"),r=0,i=!1,c=!1,u=null,$(window).on("scroll",function(){var n=$(window).scrollTop(),e=$("#summary").offset().top;(n>r||n<e)&&!c?(c=!0,t.fadeOut(400,function(){c=!1})):n>=e&&n<r&&!i&&(i=!0,window.clearTimeout(u),t.fadeIn(400,function(){i=!1,u=setTimeout(function(){t.fadeOut()},1500)})),r=n}),t.on("click",function(){o.animate({scrollTop:0},200)}),$(".expand").on("click",function(n){var e=$(n.currentTarget),t=$("#".concat(e.data("target-id"))),o=$(t),r="none"===o.css("display");r?o.slideDown(150):o.slideUp(150),e.text(r?"less -":"more +")})})}]);