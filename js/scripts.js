(function(){
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.from(document.querySelectorAll(s))}
  document.addEventListener('DOMContentLoaded',function(){
    var btn=q('.nav-toggle'), nav=q('.nav'); if(btn) btn.addEventListener('click',function(){nav.classList.toggle('open')});
    var traj=document.querySelector('.traj'); var core=document.querySelector('.shuttle-core');
    if(traj){traj.style.transition='stroke-dashoffset 1.2s cubic-bezier(.2,.9,.2,1)'; setTimeout(function(){traj.style.strokeDashoffset='0'},220)}
    if(core){core.style.transition='transform 1.2s cubic-bezier(.2,.9,.2,1)'; setTimeout(function(){core.style.transform='scale(1) rotate(10deg)'},200)}
    var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}})},{threshold:0.15});
    qa('.fade-in, .card, .thumb, .panel h2, .hero-text').forEach(function(el){el.classList.add('fade-in'); obs.observe(el)});
    qa('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth',block:'start'})})});
  });
})();
