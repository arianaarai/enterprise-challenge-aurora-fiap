/**
 * Aurora Landing Page — Integrante 3
 * Tabs hero, calculadora ROI, FAQ, formulário, menu mobile, scroll suave
 */

const PERSONA_COPY = {
  rh: {
    headline:
      'Decisões sobre pessoas guiadas por dados. Insights que geram resultados.',
    subheadline:
      'A Aurora cruza dados de performance, cultura e engajamento para gerar insights que ajudam a liderança da sua empresa a decidir melhor.',
  },
  ceo: {
    headline:
      'Reduza o custo do turnover com decisões baseadas em dados — não em intuição.',
    subheadline:
      'Visibilidade financeira de desligamentos e retenção para sua empresa tomar decisões estratégicas com segurança.',
  },
  gestor: {
    headline:
      'Saiba quem performa, quem precisa de apoio e como desenvolver seu time.',
    subheadline:
      'Direcionamento individualizado para líderes com dados de performance e engajamento em um só lugar.',
  },
};

const TURNOVER_MULTIPLIER = 1.5;

function initHeroTabs() {
  const tablist = document.querySelector('.hero-tabs');
  const headlineEl = document.getElementById('hero-headline');
  const subheadlineEl = document.getElementById('hero-subheadline');

  if (!tablist || !headlineEl) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');

  function activateTab(tab) {
    const persona = tab.dataset.persona;
    const copy = PERSONA_COPY[persona];
    if (!copy) return;

    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
    });

    headlineEl.textContent = copy.headline;
    if (subheadlineEl) subheadlineEl.textContent = copy.subheadline;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', (event) => {
      const index = Array.from(tabs).indexOf(tab);
      let nextIndex = index;

      if (event.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    });
  });
}

function initCalculator() {
  const btn = document.getElementById('calc-btn');
  const colaboradoresInput = document.getElementById('calc-colaboradores');
  const salarioInput = document.getElementById('calc-salario');
  const turnoverInput = document.getElementById('calc-turnover');
  const resultadoEl = document.getElementById('calc-resultado');

  if (!btn || !colaboradoresInput || !salarioInput || !turnoverInput || !resultadoEl) {
    return;
  }

  function calcular() {
    const colaboradores = Number(colaboradoresInput.value);
    const salario = Number(salarioInput.value);
    const turnover = Number(turnoverInput.value);

    if (
      !Number.isFinite(colaboradores) ||
      colaboradores <= 0 ||
      !Number.isFinite(salario) ||
      salario <= 0 ||
      !Number.isFinite(turnover) ||
      turnover <= 0 ||
      turnover > 100
    ) {
      resultadoEl.textContent =
        'Preencha valores válidos: colaboradores e salário maiores que zero, turnover entre 0 e 100.';
      return;
    }

    const custoAnual =
      colaboradores * salario * (turnover / 100) * TURNOVER_MULTIPLIER;

    resultadoEl.textContent = `Custo estimado de turnover: ${custoAnual.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    })}/ano`;
  }

  btn.addEventListener('click', calcular);
}

function initFaq() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') === 'true';
      const panelId = question.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      question.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
}

function showFieldError(input, message) {
  const errorId = `${input.id}-error`;
  let errorEl = document.getElementById(errorId);

  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.id = errorId;
    errorEl.className = 'field-error';
    errorEl.setAttribute('role', 'alert');
    input.after(errorEl);
  }

  errorEl.textContent = message;
  input.setAttribute('aria-describedby', errorId);
  input.classList.add('input-error');
}

function clearFieldError(input) {
  const errorId = `${input.id}-error`;
  const errorEl = document.getElementById(errorId);

  if (errorEl) errorEl.textContent = '';
  input.removeAttribute('aria-describedby');
  input.classList.remove('input-error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initFormValidation() {
  const form = document.getElementById('lead-form');
  const successEl = document.getElementById('form-success');

  if (!form || !successEl) return;

  const requiredFields = ['nome', 'cargo', 'area', 'email'];

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;

    requiredFields.forEach((name) => {
      const input = form.elements.namedItem(name);
      if (!(input instanceof HTMLInputElement || input instanceof HTMLSelectElement)) {
        return;
      }

      clearFieldError(input);

      if (!input.value.trim()) {
        showFieldError(input, 'Campo obrigatório.');
        valid = false;
      }
    });

    const emailInput = form.elements.namedItem('email');
    if (emailInput instanceof HTMLInputElement && emailInput.value.trim()) {
      if (!isValidEmail(emailInput.value.trim())) {
        showFieldError(emailInput, 'Informe um e-mail válido.');
        valid = false;
      }
    }

    const lgpd = form.elements.namedItem('lgpd');
    if (lgpd instanceof HTMLInputElement && !lgpd.checked) {
      valid = false;
      const lgpdLabel = form.querySelector('label[for="lgpd"]');
      if (lgpdLabel) lgpdLabel.classList.add('input-error');
    } else {
      const lgpdLabel = form.querySelector('label[for="lgpd"]');
      if (lgpdLabel) lgpdLabel.classList.remove('input-error');
    }

    if (!valid) return;

    form.hidden = true;
    successEl.hidden = false;
  });
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  if (!banner || !acceptBtn) return;

  if (localStorage.getItem('aurora-cookies') === 'accepted') {
    banner.hidden = true;
    return;
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('aurora-cookies', 'accepted');
    banner.hidden = true;
  });

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      banner.hidden = true;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroTabs();
  initCalculator();
  initFaq();
  initFormValidation();
  initMobileNav();
  initSmoothScroll();
  initCookieBanner();
});
