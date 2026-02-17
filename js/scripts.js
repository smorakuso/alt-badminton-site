// small nav toggle + smooth scroll + reveal on load
document.addEventListener('DOMContentLoaded', function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.nav');
  if(btn) btn.addEventListener('click', function(){ nav.classList.toggle('open'); });
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ e.preventDefault(); var t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth',block:'start'}); }); });
  // simple stagger reveal for panels
  var els=document.querySelectorAll('.panel .container > *');
  els.forEach(function(el,i){ el.style.opacity=0; el.style.transform='translateY(10px)'; setTimeout(function(){ el.style.transition='opacity .6s,transform .6s'; el.style.opacity=1; el.style.transform='none'; }, 100 + i*120); });
});
