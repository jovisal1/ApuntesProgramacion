(() => {
  'use strict';
  const ca = document.body.dataset.lang === 'ca';
  const topic = Number(document.body.dataset.topic);
  const slides = [...document.querySelectorAll('[data-slide]')];
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const progress = document.querySelector('#progress');
  let current = 0;
  function show(index, save = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    progress.textContent = `${current + 1} / ${slides.length}`;
    if (save) { history.replaceState(null, '', `#${current + 1}`); window.scrollTo(0, 0); }
  }
  const hash = Number(location.hash.slice(1));
  show(Number.isInteger(hash) && hash > 0 ? hash - 1 : 0, false);
  document.querySelector('.navigation').hidden = false;
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  window.addEventListener('hashchange', () => {
    const n = Number(location.hash.slice(1));
    if (Number.isInteger(n) && n > 0) show(n - 1, false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.target.closest('input, textarea, select, button, summary, a') || event.ctrlKey || event.altKey || event.metaKey) return;
    const actions = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: slides.length - 1 };
    if (event.key in actions) { event.preventDefault(); show(actions[event.key]); }
  });
  const fullscreen = document.querySelector('#fullscreen');
  if (!document.documentElement.requestFullscreen) fullscreen.hidden = true;
  fullscreen.addEventListener('click', async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
    catch { progress.textContent = ca ? 'Pantalla completa no disponible' : 'Pantalla completa no disponible'; }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? (ca ? 'Eixir de pantalla completa' : 'Salir de pantalla completa') : 'Pantalla completa';
  });
  document.querySelectorAll('.choice').forEach(button => button.addEventListener('click', () => {
    const slide = button.closest('[data-slide]');
    const correct = button.dataset.answer === slide.dataset.correct;
    slide.querySelectorAll('.choice').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    const feedback = slide.querySelector('.feedback');
    feedback.dataset.state = correct ? 'correct' : 'wrong';
    feedback.textContent = (correct ? (ca ? 'Correcte. ' : 'Correcto. ') : (ca ? 'Revisa el raonament. ' : 'Revisa el razonamiento. ')) + slide.querySelector('details p').textContent;
  }));
  // Funciones utiliza trazas propias y comparte navegación y preguntas.
  if (topic === 3) return;
  const code = document.querySelector('#lab-code');
  const feedback = document.querySelector('.lab-feedback');
  const invalid = ca ? 'Introduïx enters entre −100 i 100.' : 'Introduce enteros entre −100 y 100.';
  const smallInt = input => input.value !== '' && Number.isInteger(input.valueAsNumber) && Math.abs(input.valueAsNumber) <= 100;
  if (topic === 0) {
    const initial = document.querySelector('#initial'); let value = 3; let trace = 'int unidades = 3;';
    const render = () => { code.textContent = `${trace}\n\nSystem.out.println(unidades);\n// ${value}`; feedback.textContent = (ca ? 'Valor actual: ' : 'Valor actual: ') + value; };
    const reset = () => { if (!smallInt(initial)) { feedback.textContent = invalid; return; } value = initial.valueAsNumber; trace = `int unidades = ${value};`; render(); };
    initial.addEventListener('input', reset);
    document.querySelector('#assign').addEventListener('click', () => { value = 5; trace += '\nunidades = 5;'; render(); });
    document.querySelector('#increment').addEventListener('click', () => { value++; trace += '\nunidades++;'; render(); });
    document.querySelector('#reset-lab').addEventListener('click', reset);
    render();
  } else if (topic === 1) {
    const a = document.querySelector('#dividend'), b = document.querySelector('#divisor'), decimal = document.querySelector('#decimal');
    function render() {
      if (!smallInt(a) || !smallInt(b)) { feedback.textContent = invalid; code.textContent = ''; return; }
      const x=a.valueAsNumber, y=b.valueAsNumber;
      const divisor = decimal.checked ? `(${y}.0)` : `(${y})`;
      let result;
      if (y === 0) result = decimal.checked ? (x === 0 ? 'NaN' : x < 0 ? '-Infinity' : 'Infinity') : 'ArithmeticException';
      else { const n = decimal.checked ? x/y : Math.trunc(x/y); result = decimal.checked && Object.is(n, -0) ? '-0.0' : decimal.checked && Number.isInteger(n) ? `${n}.0` : String(n); }
      code.textContent = `System.out.println(${x} / ${divisor});\n// ${result}`;
      feedback.textContent = y === 0 ? (ca ? 'La divisió entera per zero falla. Amb double es pot obtindre Infinity, -Infinity o NaN.' : 'La división entera por cero falla. Con double se puede obtener Infinity, -Infinity o NaN.') : decimal.checked ? (ca ? 'Un operand double produïx una divisió decimal.' : 'Un operando double produce una división decimal.') : (ca ? 'La divisió entera descarta la part decimal, cap a zero.' : 'La división entera descarta la parte decimal, hacia cero.');
    }
    [a,b,decimal].forEach(input=>input.addEventListener('input',render)); render();
  } else {
    const input = document.querySelector('#parse-text');
    function render() {
      const text = input.value, literal = JSON.stringify(text);
      const value = Number(text);
      const valid = /^[+-]?[0-9]+$/.test(text) && Number.isInteger(value) && value >= -2147483648 && value <= 2147483647;
      code.textContent = `String texto = ${literal};\nSystem.out.println(texto + 3);\n// ${JSON.stringify(text+'3')}\n\nint numero = Integer.parseInt(texto);\n` + (valid ? `System.out.println(numero + 3);\n// ${(value+3)|0}` : '// NumberFormatException');
      feedback.textContent = valid ? (ca ? 'Concatenar unix text; convertir permet sumar nombres.' : 'Concatenar une texto; convertir permite sumar números.') : (ca ? 'El text no té un format enter vàlid o queda fora del rang d’int.' : 'El texto no tiene un formato entero válido o queda fuera del rango de int.');
    }
    input.addEventListener('input',render);
    document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.preset;render();}));render();
  }
})();
