import { INPUT, onInput, clearInputs } from "../core/input"

export function renderSkills(root) {

  clearInputs()

  root.innerHTML = `
    <section class="skills-screen">
      <h2 class="skills-title">SKILL TREE</h2>
      <div class="skill-tree">
        <!-- Backend -->
        <div class="branch">
          <div class="node root">Backend</div>

          <div class="node">PHP</div>
          <div class="node">Laravel</div>
          <div class="node">Livewire</div>
          <div class="node">REST API</div>
          <div class="node">Zend</div>
        </div>

        <!-- Frontend -->
        <div class="branch">
          <div class="node root">Frontend</div>

          <div class="node">JavaScript</div>
          <div class="node">Alpine.js</div>
          <div class="node">Vue</div>
          <div class="node">jQuery</div>
        </div>

        <!-- Database -->
        <div class="branch">
          <div class="node root">Database</div>

          <div class="node">MySQL</div>
          <div class="node">MSSQL</div>
          <div class="node">Oracle</div>
          <div class="node">SQLite</div>
          <div class="node">Redis</div>
          <div class="node">RabbitMQ</div>
        </div>

        <!-- DevOps -->
        <div class="branch">
          <div class="node root">DevOps</div>

          <div class="node">Linux</div>
          <div class="node">Docker</div>
          <div class="node">CRON</div>
          <div class="node">Supervisor</div>
          <div class="node">Nginx</div>
          <div class="node">Apache</div>
          <div class="node">GCP</div>
        </div>

        <!-- Tools -->
        <div class="branch">
          <div class="node root">Tools</div>

          <div class="node">Git</div>
          <div class="node">GitLab</div>
          <div class="node">CI/CD</div>
          <div class="node">Burp Suite</div>
        </div>
      </div>
    </section>
    `
}