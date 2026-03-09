(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const g={move:new Audio("/sounds/move.mp3"),select:new Audio("/sounds/select.mp3")};Object.values(g).forEach(e=>{e.volume=.4});function E(e){g[e]&&(g[e].currentTime=0,g[e].play())}function I(e){e.innerHTML=`
    <div id="boot">
      <div class="boot-lines">
        <p id="line1"></p>
        <p id="line2"></p>
        <p id="line3"></p>
        <p id="line4" class="success"></p>
      </div>

      <button id="boot-btn" class="boot-button">
        PRESS
        <svg class="keycap keycap-enter">
          <use href="#key-enter"></use>
        </svg>
      </button>
    </div>
  `;const t=()=>{E("select"),location.hash="#/menu",document.removeEventListener("keydown",i)},i=s=>{s.key==="Enter"&&t()};function a(s,o,y=30){return new Promise(f=>{let k=0;s.textContent="";function L(){k<o.length?(s.textContent+=o[k],k++,setTimeout(L,y)):f()}L()})}async function n(){location.hash="",await a(document.getElementById("line1"),"Initializing system..."),await a(document.getElementById("line2"),"Loading profile data..."),await a(document.getElementById("line3"),"Preparing experience..."),await a(document.getElementById("line4"),"System Ready."),document.getElementById("boot-btn").classList.add("show")}n(),document.addEventListener("keydown",i),document.getElementById("boot-btn").addEventListener("click",t)}const h={},c={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",CONFIRM:"confirm",BACK:"back"};function l(e,t){h[e]=t}function b(){Object.keys(h).forEach(e=>delete h[e])}function T(e){switch(e){case"ArrowUp":case"w":return c.UP;case"ArrowDown":case"s":return c.DOWN;case"ArrowLeft":case"a":return c.LEFT;case"ArrowRight":case"d":return c.RIGHT;case"Enter":return c.CONFIRM;case"Escape":return c.BACK}}document.addEventListener("keydown",e=>{const t=T(e.key);if(!t)return;const i=h[t];i&&i(e)});const u=["about","skills","projects","contact"];let p=0;function R(e){w(e),l(c.DOWN,()=>{p=(p+1)%u.length,w(e)}),l(c.UP,()=>{p=(p-1+u.length)%u.length,w(e)}),l(c.CONFIRM,()=>{location.hash=`#/${u[p]}`})}function w(e){e.innerHTML=`
    <div id="menu">
      ${u.map((t,i)=>`<p>${i===p?">":"&nbsp;"} ${t.toUpperCase()}</p>`).join("")}
    </div>
    <div class="navigation">
      <div class="nav-group">
        Navigation
        <svg class="keycap keycap-arrow"><use href="#key-up"></use></svg>
        <svg class="keycap keycap-arrow"><use href="#key-down"></use></svg>
      </div>

      <div class="nav-group">
        Select
        <svg class="keycap keycap-enter"><use href="#key-enter"></use></svg>
      </div>
    </div>
  `}function S(e){b(),e.innerHTML=`
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
      </div>

      <div class="navigation">
        Back to Menu
        <svg class="keycap keycap-esc">
          <use href="#key-esc"></use>
        </svg>
      </div>

    </section>
  `,l(c.BACK,()=>{location.hash="#/menu"})}const m=[{name:"Rental System",stack:["Laravel","Livewire","MySQL"]},{name:"Expense Tracker",stack:["Laravel","Tailwind"]},{name:"Inventory App",stack:["Laravel","Livewire"]},{name:"Rental System",stack:["Laravel","Livewire","MySQL"]},{name:"Expense Tracker",stack:["Laravel","Tailwind"]},{name:"Inventory App",stack:["Laravel","Livewire"]},{name:"Portfolio",stack:["Vite","JS"]}];let r=0;const d=2;function x(e){b(),e.innerHTML=`
    <div class="projects-screen">
      <h1 class="title">SELECT PROJECT</h1>

      <div class="projects-wrapper">
        <div class="projects-grid">
          ${m.map((s,o)=>`
            <div class="project-card ${o===r?"active":""}" data-index="${o}">
              <div class="project-icon">🖥</div>
              <div class="project-name">${s.name}</div>
              <div class="project-stack">${s.stack.join(" • ")}</div>
            </div>
          `).join("")}
        </div>

        <div class="scroll-indicator">
          <div class="scroll-thumb"></div>
        </div>
      </div>

      <div class="navigation">
        <div class="nav-group">
          Navigation
          <svg class="keycap keycap-arrow"><use href="#key-up"></use></svg>
          <svg class="keycap keycap-arrow"><use href="#key-down"></use></svg>
          <svg class="keycap keycap-arrow"><use href="#key-left"></use></svg>
          <svg class="keycap keycap-arrow"><use href="#key-right"></use></svg>
        </div>

        <div class="nav-group">
          Select
          <svg class="keycap keycap-enter"><use href="#key-enter"></use></svg>
        </div>

        <div class="nav-group">
          Back
          <svg class="keycap keycap-esc"><use href="#key-esc"></use></svg>
        </div>
      </div>
    </div>
  `;const t=e.querySelector(".projects-grid"),i=e.querySelector(".scroll-thumb"),a=i.parentElement;function n(){const s=t.clientHeight/t.scrollHeight,o=a.clientHeight*s;i.style.height=o+"px";const y=t.scrollTop/(t.scrollHeight-t.clientHeight),f=a.clientHeight-o;i.style.top=y*f+"px"}t.addEventListener("scroll",n),n(),O(e)}function O(e){l(c.RIGHT,()=>{(r+1)%d!==0&&r+1<m.length&&r++,v(e)}),l(c.LEFT,()=>{r%d!==0&&r--,v(e)}),l(c.DOWN,()=>{r+d<m.length&&(r+=d),v(e)}),l(c.UP,()=>{r-d>=0&&(r-=d),v(e)}),l(c.CONFIRM,P),l(c.BACK,()=>{location.hash="#/menu"})}function v(e){const t=e.querySelectorAll(".project-card");t.forEach(a=>a.classList.remove("active"));const i=t[r];i.classList.add("active"),i.scrollIntoView({block:"nearest",behavior:"smooth"})}function P(){const e=m[r];console.log("OPEN PROJECT:",e.name)}const j={about:S,projects:x};function M(e){const t=location.hash.replace("#/",""),i=j[t];i&&(e.innerHTML="",i(e))}function A(){const e=document.getElementById("app");I(e),window.addEventListener("hashchange",()=>{location.hash.replace("#/","")==="menu"?R(e):M(e)})}async function B(){const t=await(await fetch("/src/assets/icons/keycaps.svg")).text();document.getElementById("svg-sprite").innerHTML=t}A();B();
