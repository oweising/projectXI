
(function(){
  const btn=document.querySelector('[data-nav-toggle]'); const nav=document.querySelector('[data-nav]');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('is-open'));}
  const io='IntersectionObserver' in window ? new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}})},{threshold:.13}) : null;
  document.querySelectorAll('[data-reveal]').forEach(el=>io?io.observe(el):el.classList.add('is-visible'));
  document.querySelectorAll('[data-counter]').forEach(el=>{el.dataset.final=el.textContent;});
})();
