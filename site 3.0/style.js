
// Comportamento das abas
const tabs = document.querySelectorAll('[role="tab"]');
const tabContents = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    tabContents.forEach(tc => {
      tc.setAttribute('hidden', '');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');

    const panelId = tab.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    panel.removeAttribute('hidden');
    panel.focus();
  });
});

// Dados dos planos
const planos = [
  {
    titulo: 'Internet Base',
    descricao: 'Ideal para residências. Conexão estável com suporte humanizado.'
  },
  {
    titulo: 'Internet Empresarial',
    descricao: 'Soluções dedicadas com performance e garantia de uptime para negócios.'
  },
  {
    titulo: 'Internet Rural',
    descricao: 'Cobertura ampla para áreas rurais, conectividade até nos confins da galáxia.'
  }
];

// Renderizar planos dinamicamente
const cardsContainer = document.querySelector(".cards");
if (cardsContainer) {
  planos.forEach(plano => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${plano.titulo}</h3><p>${plano.descricao}</p>`;
    cardsContainer.appendChild(div);
  });
}

// Validação do formulário
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });
    if (valid) {
      const alert = document.createElement("div");
      alert.className = "alert alert-success mt-3";
      alert.innerText = "Mensagem enviada com sucesso!";
      form.appendChild(alert);
      form.reset();
    }
  });
}
