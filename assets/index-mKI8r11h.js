(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const y={move:new Audio("/sounds/move.mp3"),select:new Audio("/sounds/select.mp3")};Object.values(y).forEach(e=>{e.volume=.4});function w(e){y[e]&&(y[e].currentTime=0,y[e].play())}function I(e){e.innerHTML=`
    <div class="boot">
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
  `;const s=()=>{w("select"),location.hash="#/menu",document.removeEventListener("keydown",a)},a=t=>{t.key==="Enter"&&s()};function c(t,r,d=30){return new Promise(k=>{let u=0;t.textContent="";function E(){u<r.length?(t.textContent+=r[u],u++,setTimeout(E,d)):k()}E()})}async function i(){location.hash="",await c(document.getElementById("line1"),"Initializing system..."),await c(document.getElementById("line2"),"Loading profile data..."),await c(document.getElementById("line3"),"Preparing experience..."),await c(document.getElementById("line4"),"System Ready."),document.getElementById("boot-btn").classList.add("show")}i(),document.addEventListener("keydown",a),document.getElementById("boot-btn").addEventListener("click",s)}const f={},n={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",CONFIRM:"confirm",BACK:"back"};function l(e,s){f[e]=s}function b(){Object.keys(f).forEach(e=>delete f[e])}function R(e){switch(e){case"ArrowUp":case"w":return n.UP;case"ArrowDown":case"s":return n.DOWN;case"ArrowLeft":case"a":return n.LEFT;case"ArrowRight":case"d":return n.RIGHT;case"Enter":return n.CONFIRM;case"Escape":return n.BACK}}document.addEventListener("keydown",e=>{const s=R(e.key);if(!s)return;const a=f[s];a&&((s===n.UP||s===n.DOWN||s===n.LEFT||s===n.RIGHT)&&w("move"),s===n.CONFIRM&&w("select"),a(e))});const v=["about","skills","projects","contact"];let p=0;function T(e){L(e),l(n.DOWN,()=>{p=(p+1)%v.length,L(e)}),l(n.UP,()=>{p=(p-1+v.length)%v.length,L(e)}),l(n.CONFIRM,()=>{location.hash=`#/${v[p]}`})}function L(e){e.innerHTML=`
    <div class="menu">
      ${v.map((s,a)=>`<p>${a===p?">":"&nbsp;"} ${s.toUpperCase()}</p>`).join("")}
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
  `}function O(e){b(),e.innerHTML=`
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
    </section>
    <div class="navigation">
      <div class="nav-group">
        Back to Menu
        <svg class="keycap keycap-esc"> <use href="#key-esc"></use></svg>
      </div>
    </div>
  `,l(n.BACK,()=>{location.hash="#/menu"})}const g=[{name:"Rental System",stack:["Laravel","Livewire","MySQL"],icon:"🚗",status:"COMPLETED"},{name:"Expense Tracker",stack:["Laravel","Tailwind"],icon:"💰",status:"IN PROGRESS"},{name:"Inventory App",stack:["Laravel","Livewire"],icon:"📦",status:"COMPLETED"},{name:"Rental System",stack:["Laravel","Livewire","MySQL"],icon:"🚗",status:"COMPLETED"},{name:"Expense Tracker",stack:["Laravel","Tailwind"],icon:"💰",status:"IN PROGRESS"},{name:"Inventory App",stack:["Laravel","Livewire"],icon:"📦",status:"COMPLETED"},{name:"Portfolio",stack:["Vite","JS"],icon:"💻",status:"IN PROGRESS"}];let o=0;const h=3;function S(e){b(),e.innerHTML=`
    <div class="projects-screen">
      <h1>SELECT PROJECT</h1>

      <div class="projects-wrapper">
        <div class="projects-grid">
          ${g.map((t,r)=>`
            <div class="project-card ${r===o?"active":""}" data-index="${r}">
              <div class="project-preview">
                <div class="project-status status-${t.status.toLowerCase().replace(" ","-")}">
                  ${t.status}
                </div>
                <div class="project-icon">${t.icon||"🖥"}</div>
              </div>
              <div class="project-info">
                <div class="project-name">${t.name}</div>
                <div class="project-tags">
                  ${t.stack.map(d=>`<span class="tag">${d}</span>`).join("")}
                </div>
              </div>
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
  `;const s=e.querySelector(".projects-grid"),a=e.querySelector(".scroll-thumb"),c=a.parentElement;function i(){const t=s.scrollHeight>s.clientHeight;if(c.style.display=t?"block":"none",!t)return;const r=s.clientHeight/s.scrollHeight,d=c.clientHeight*r;a.style.height=d+"px";const k=s.scrollTop/(s.scrollHeight-s.clientHeight),u=c.clientHeight-d;a.style.top=k*u+"px"}s.addEventListener("scroll",i),i(),P(e)}function P(e){l(n.RIGHT,()=>{o+1<g.length&&o++,m(e)}),l(n.LEFT,()=>{o>0&&o--,m(e)}),l(n.DOWN,()=>{o+h<g.length?o+=h:o=g.length-1,m(e)}),l(n.UP,()=>{o-h>=0&&(o-=h),m(e)}),l(n.CONFIRM,C),l(n.BACK,()=>{location.hash="#/menu"})}function m(e){const s=e.querySelectorAll(".project-card");s.forEach(c=>c.classList.remove("active"));const a=s[o];a.classList.add("active"),a.scrollIntoView({block:"nearest",behavior:"smooth"})}function C(){const e=g[o];console.log("OPEN PROJECT:",e.name)}const M={about:O,projects:S};function x(e){const s=location.hash.replace("#/",""),a=M[s];a&&(e.innerHTML="",a(e))}function N(){const e=document.getElementById("app");I(e),window.addEventListener("hashchange",()=>{location.hash.replace("#/","")==="menu"?T(e):x(e)})}async function H(){const s=await(await fetch("/icons/keycaps.svg")).text();document.getElementById("svg-sprite").innerHTML=s}N();H();
