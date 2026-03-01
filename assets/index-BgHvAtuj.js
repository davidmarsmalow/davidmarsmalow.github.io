(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const d={move:new Audio("/sounds/move.mp3"),select:new Audio("/sounds/select.mp3")};Object.values(d).forEach(e=>{e.volume=.4});function l(e){d[e]&&(d[e].currentTime=0,d[e].play())}function g(e){e.innerHTML=`
    <div id="boot">
      <div class="boot-lines">
        <p id="line1"></p>
        <p id="line2"></p>
        <p id="line3"></p>
        <p id="line4" class="success"></p>
      </div>

      <button id="boot-btn" class="boot-button">
        ▶ PRESS ENTER
      </button>
    </div>
  `;const t=()=>{l("select"),location.hash="#/menu",document.removeEventListener("keydown",s)},s=i=>{i.key==="Enter"&&t()};function o(i,c,v=30){return new Promise(f=>{let p=0;i.textContent="";function m(){p<c.length?(i.textContent+=c[p],p++,setTimeout(m,v)):f()}m()})}async function n(){location.hash="",await o(document.getElementById("line1"),"Initializing system..."),await o(document.getElementById("line2"),"Loading profile data..."),await o(document.getElementById("line3"),"Preparing experience..."),await o(document.getElementById("line4"),"System Ready."),document.getElementById("boot-btn").classList.add("show")}n(),document.addEventListener("keydown",s),document.getElementById("boot-btn").addEventListener("click",t)}const r=["about","skills","projects","contact"];let a=0;function h(e){u(e);function t(s){s.key==="ArrowDown"&&(a=(a+1)%r.length,l("move"),u(e)),s.key==="ArrowUp"&&(a=(a-1+r.length)%r.length,l("move"),u(e)),s.key==="Enter"&&(l("select"),location.hash=`#/${r[a]}`,document.removeEventListener("keydown",t))}document.addEventListener("keydown",t)}function u(e){e.innerHTML=`
    <div id="menu">
      ${r.map((t,s)=>`<p>${s===a?">":"&nbsp;"} ${t.toUpperCase()}</p>`).join("")}
    </div>
  `}function y(e){e.innerHTML=`
    <section class="retro-about">

      <div class="portrait-box">
        <img src="/images/portrait.png" alt="Pixel David">
      </div>

      <div class="info-box">
        <h1>KRISTOFORUS DAVID RENALDY</h1>
        <p class="role">Software Engineer</p>
        <p class="sub-role"> Web Developer - Backend Developer</p>

        <div class="description">
          <p>> Building modern web applications</p>
          <p>> Clean architecture enthusiast</p>
          <p>> Loves reactive systems</p>
        </div>

        <div class="techstack">
          <div class="tech">
            <img src="/icons/laravel-pixelated.png" alt="Laravel">
            <span>Laravel</span>
          </div>
          <div class="tech">
            <img src="/icons/livewire-pixelated.png" alt="Livewire">
            <span>Livewire</span>
          </div>
          <div class="tech">
            <img src="/icons/tailwind-pixelated.png" alt="Tailwind">
            <span>Tailwind</span>
          </div>
          <div class="tech">
            <img src="/icons/rabbitmq-pixelated.png" alt="RabbitMQ">
            <span>RabbitMQ</span>
          </div>
          <div class="tech">
            <img src="/icons/redis-pixelated.png" alt="Redis">
            <span>Redis</span>
          </div>
          <div class="tech">
            <img src="/icons/mysql-pixelated.png" alt="MySQL">
            <span>MySQL</span>
          </div>
          <div class="tech">
            <img src="/icons/vite-pixelated.png" alt="Vite">
            <span>Vite</span>
          </div>
          <div class="tech">
            <img src="/icons/vue-pixelated.png" alt="Vue">
            <span>Vue.js</span>
          </div>
        </div>

        <p class="back-hint">Press ESC to go back</p>
      </div>

    </section>
  `;const t=s=>{s.key==="Escape"&&(location.hash="#/menu",document.removeEventListener("keydown",t))};document.addEventListener("keydown",t)}const b={about:y};function w(e){const t=location.hash.replace("#/",""),s=b[t];s&&(e.innerHTML="",s(e))}function L(){const e=document.getElementById("app");g(e),window.addEventListener("hashchange",()=>{location.hash.replace("#/","")==="menu"?h(e):w(e)})}L();
