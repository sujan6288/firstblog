const root=document.documentElement;
const savedTheme=localStorage.getItem('sujan-notes-theme');
if(savedTheme==='dark')document.body.classList.add('dark');
document.querySelector('.theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('sujan-notes-theme',document.body.classList.contains('dark')?'dark':'light');});
const progress=document.querySelector('.progress i');
addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=`${h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100}%`;},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.09});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
