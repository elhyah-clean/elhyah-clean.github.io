(function(){
var PHONE='966582775813',$=function(s,c){return(c||document).querySelectorAll(s)};
$('[data-wa]').forEach(function(a){a.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent('السلام عليكم، '+a.getAttribute('data-wa'));a.target='_blank';a.rel='noopener noreferrer';});
var b=document.getElementById('burger'),n=document.getElementById('nav'),h=document.querySelector('.hdr'),p=document.getElementById('progress');
function tog(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);}
b.addEventListener('click',function(){tog(!n.classList.contains('open'));});
$('a',n).forEach(function(a){a.addEventListener('click',function(){tog(false);});});
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false);});
function onScroll(){var m=document.documentElement.scrollHeight-innerHeight;h.classList.toggle('sc',scrollY>30);p.style.transform='scaleX('+(m>0?scrollY/m:0)+')';}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function count(c){if(rm)return;var to=+c.dataset.to,s=null;(function f(t){s=s||t;var k=Math.min((t-s)/1100,1);c.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f);})(performance.now());}
var els=$('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);var c=e.target.querySelector('.count');if(c)count(c);}});},{threshold:.12});
els.forEach(function(el,i){el.style.transitionDelay=(i%3)*90+'ms';io.observe(el);});}else{els.forEach(function(el){el.classList.add('in');});}
if(!rm&&matchMedia('(hover:hover)').matches){$('.tilt').forEach(function(el){
  el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    el.style.setProperty('--mx',x+'px');el.style.setProperty('--my',y+'px');
    el.style.transform='perspective(900px) rotateX('+((y/r.height-.5)*-6)+'deg) rotateY('+((x/r.width-.5)*6)+'deg) translateY(-6px)';});
  el.addEventListener('mouseleave',function(){el.style.transform='';});});}
})();
