$((function(){var n=Math.round(new Date("4/17/2019 00:00:00").getTime()/1e3);$("#runtime").flipcountdown({size:"xs",tick:function(){var t=function(n){return n>9?n:"0"+n},e=Math.abs(Math.round((new Date).getTime()/1e3)-n),r=86400,a=3600,i=parseInt(e/r),u=parseInt(e%r/a),o=parseInt(e%r%a/60),s=e%r%a%60;return t(i)+" "+t(u)+" "+t(o)+" "+t(s)}})}));