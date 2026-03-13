(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const h={move:new Audio("/sounds/move.mp3"),select:new Audio("/sounds/select.mp3")};Object.values(h).forEach(e=>{e.volume=.4});function E(e){h[e]&&(h[e].currentTime=0,h[e].play())}function I(e){let t=!1;e.innerHTML=`
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
  `;const s=()=>{t&&(E("select"),location.hash="#/menu",document.removeEventListener("keydown",o))},o=r=>{r.key==="Enter"&&s()};function a(r,d,b=30){return new Promise(w=>{let k=0;r.textContent="";function S(){k<d.length?(r.textContent+=d[k],k++,setTimeout(S,b)):w()}S()})}async function n(){location.hash="",await a(document.getElementById("line1"),"Initializing system..."),await a(document.getElementById("line2"),"Loading profile data..."),await a(document.getElementById("line3"),"Preparing experience..."),await a(document.getElementById("line4"),"System Ready."),t=!0,document.getElementById("boot-btn").classList.add("show")}n(),document.addEventListener("keydown",o),document.getElementById("boot-btn").addEventListener("click",s)}const f={},i={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",CONFIRM:"confirm",BACK:"back"};function l(e,t){f[e]=t}function y(){Object.keys(f).forEach(e=>delete f[e])}function T(e){switch(e){case"ArrowUp":case"w":return i.UP;case"ArrowDown":case"s":return i.DOWN;case"ArrowLeft":case"a":return i.LEFT;case"ArrowRight":case"d":return i.RIGHT;case"Enter":return i.CONFIRM;case"Escape":return i.BACK}}document.addEventListener("keydown",e=>{const t=T(e.key);if(!t)return;const s=f[t];s&&((t===i.UP||t===i.DOWN||t===i.LEFT||t===i.RIGHT)&&E("move"),t===i.CONFIRM&&E("select"),s(e))});const u=["about","skills","projects","contact"];let p=0;function R(e){y(),L(e),l(i.DOWN,()=>{p=(p+1)%u.length,L(e)}),l(i.UP,()=>{p=(p-1+u.length)%u.length,L(e)}),l(i.CONFIRM,()=>{location.hash=`#/${u[p]}`})}function L(e){e.innerHTML=`
    <div class="menu">
      ${u.map((t,s)=>`<p>${s===p?'<span class="menu-pointer">></span>':'<span class="menu-pointer empty">&nbsp;</span>'} ${t.toUpperCase()}</p>`).join("")}
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
  `}function O(e){y(),e.innerHTML=`
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
  `,l(i.BACK,()=>{location.hash="#/menu"})}const v=[{id:"ncms-bsi",name:"Corporate Cash Management System - NCMS BSI",tagline:"Enterprise cash management platform for Bank Syariah Indonesia.",icon:"🏦",period:"Jan 2023 - Present",status:"IN PROGRESS",overview:"NCMS BSI is a corporate cash management platform used by Bank Syariah Indonesia to manage enterprise financial transactions and services. The system provides corporate banking capabilities such as payment processing, automated billing, and financial integrations.",features:["Developed enterprise banking features including Bill Payment, Auto Debit, Virtual Account Billing, etc.","Designed and implemented RESTful Open API services for financial transaction processing integrated with the system authentication infrastructure.","Contributed to Risk Management and Fraud Detection modules.","Collaborated with analysts and QA teams while supporting deployment processes."],stack:["Laravel","ZF1","MySQL","REST API"]},{id:"portfolio",name:"Retro Portfolio",tagline:"A retro-inspired portfolio website built with Vite and JavaScript.",icon:"👾",period:"Mar 2026",status:"COMPLETED",overview:"This project is a personal portfolio website designed with a retro aesthetic, reminiscent of classic computer interfaces. It was built using Vite for fast development and JavaScript for interactivity.",features:["Designed and developed a personal portfolio website with a retro aesthetic using Vite and JavaScript.","Created an interactive project showcase with keyboard navigation, allowing users to browse through projects and view details seamlessly."],stack:["Vite","JavaScript","CSS"]},{id:"barbershop",name:"Barbershop POS Management System",tagline:"A comprehensive point-of-sale management system for barbershops, built with Laravel and Livewire.",icon:"💈",period:"Jul 2025 - Dec 2025",status:"COMPLETED",overview:"This project is a point-of-sale management system specifically designed for barbershops. It was developed using Laravel for the backend and Livewire for dynamic frontend interactions.",features:["Developed a POS management system tailored for barbershops, utilizing Laravel for backend development and Livewire for dynamic frontend interactions.","Implemented features such as appointment scheduling, inventory management, and sales tracking to streamline barbershop operations."],stack:["Laravel","Livewire","MySQL"]},{id:"kosman",name:"Kosman - Boarding House Management System",tagline:"A boarding house management system built with Laravel Filament.",icon:"🏠",period:"Feb 2025 - May 2025",status:"COMPLETED",overview:"Kosman is a boarding house management system designed to streamline the operations of boarding houses. It provides features for tenant management, room allocation, and email notifications.",features:["Developed a comprehensive boarding house management system using Laravel Filament.","Implemented tenant registration, profile management features, and email notifications.","Created room allocation and availability tracking functionalities."],stack:["Laravel","Filament","MySQL","Scheduling"]},{name:"Rental System",stack:["Laravel","Livewire","MySQL"],icon:"🚗",status:"COMPLETED"},{name:"Expense Tracker",stack:["Laravel","Tailwind"],icon:"💰",status:"IN PROGRESS"},{name:"Inventory App",stack:["Laravel","Livewire"],icon:"📦",status:"COMPLETED"},{name:"Rental System",stack:["Laravel","Livewire","MySQL"],icon:"🚗",status:"COMPLETED"},{name:"Expense Tracker",stack:["Laravel","Tailwind"],icon:"💰",status:"IN PROGRESS"},{name:"Inventory App",stack:["Laravel","Livewire"],icon:"📦",status:"COMPLETED"},{name:"Portfolio",stack:["Vite","JS"],icon:"💻",status:"IN PROGRESS"}];let c=0;const m=3;function M(e){y(),e.innerHTML=`
    <div class="projects-screen">
      <h1>SELECT PROJECT</h1>

      <div class="projects-wrapper">
        <div class="projects-grid">
          ${v.map((n,r)=>`
            <div class="project-card ${r===c?"active":""}" data-index="${r}">
              <div class="project-preview">
                <div class="project-status status-${n.status.toLowerCase().replace(" ","-")}">
                  ${n.status}
                </div>
                <div class="project-icon">${n.icon||"🖥"}</div>
              </div>
              <div>
                <div class="project-name">${n.name}</div>
                <div class="project-tags">
                  ${n.stack.map(d=>`<span class="tag">${d}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="scroll-indicator">
          <div class="scroll-thumb"></div>
        </div>
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
  `;const t=e.querySelector(".projects-grid"),s=e.querySelector(".scroll-thumb"),o=s.parentElement;function a(){const n=t.scrollHeight>t.clientHeight;if(o.style.display=n?"block":"none",!n)return;const r=t.clientHeight/t.scrollHeight,d=o.clientHeight*r;s.style.height=d+"px";const b=t.scrollTop/(t.scrollHeight-t.clientHeight),w=o.clientHeight-d;s.style.top=b*w+"px"}t.addEventListener("scroll",a),a(),P(e)}function P(e){l(i.RIGHT,()=>{c+1<v.length&&c++,g(e)}),l(i.LEFT,()=>{c>0&&c--,g(e)}),l(i.DOWN,()=>{c+m<v.length?c+=m:c=v.length-1,g(e)}),l(i.UP,()=>{c-m>=0&&(c-=m),g(e)}),l(i.CONFIRM,C),l(i.BACK,()=>{location.hash="#/menu"})}function g(e){const t=e.querySelectorAll(".project-card");t.forEach(o=>o.classList.remove("active"));const s=t[c];s.classList.add("active"),s.scrollIntoView({block:"nearest",behavior:"smooth"})}function C(){const e=v[c];location.hash="#/projects/"+e.id}function j(e,t){y();const s=v.find(o=>o.id===t);e.innerHTML=`
    <div class="project-detail">

      <div class="project-header">
        <h1>${s.name}</h1>
        <p class="tagline">${s.tagline}</p>
      </div>

      <div class="project-info">
        <div>
          <h3>PROJECT INFO</h3>
          <p><span>PERIOD</span> : ${s.period}</p>
          <p><span>STATUS</span> : ${s.status}</p>
        </div>
        <div class="project-tags">
          ${s.stack.map(o=>`<span class="tag">${o}</span>`).join("")}
        </div>
        
      </div>

      <div class="project-overview">
        <h3>OVERVIEW</h3>
        <p>${s.overview}</p>
      </div>

      <div class="project-features">
        <h3>KEY CONTRIBUTIONS</h3>
        <ul>
          ${s.features.map(o=>`<li>${o}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="navigation">
      <div class="nav-group">
        Back
        <svg class="keycap keycap-esc"><use href="#key-esc"></use></svg>
      </div>
    </div>
  `,l(i.BACK,()=>{location.hash="#/projects"})}const B={about:O,projects:M};function D(e){const s=location.hash.replace("#/","").split("/"),o=s[0],a=s[1];if(o==="projects"&&a){e.innerHTML="",j(e,a);return}const n=B[o];n&&(e.innerHTML="",n(e))}function A(){const e=document.getElementById("app");I(e),window.addEventListener("hashchange",()=>{location.hash.replace("#/","")==="menu"?R(e):D(e)})}async function N(){const t=await(await fetch("/icons/keycaps.svg")).text();document.getElementById("svg-sprite").innerHTML=t}A();N();
