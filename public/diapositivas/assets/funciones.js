(() => {
  'use strict';
  const ca = document.body.dataset.lang === 'ca';
  const traces = {
    'array-trace': [
      [ca ? 'Abans de cridar: només hi ha la variable de main.' : 'Antes de llamar: solo está la variable de main.', 'main: datos → [3, 7]'],
      [ca ? 'Es copia la referència: les dos variables accedixen al mateix array.' : 'Se copia la referencia: las dos variables acceden al mismo array.', 'main: datos → A [3, 7]\ncambiar: valores → A [3, 7]'],
      [ca ? 'valores[0] = 10 modifica l’array compartit.' : 'valores[0] = 10 modifica el array compartido.', 'main: datos → A [10, 7]\ncambiar: valores → A [10, 7]'],
      [ca ? 'Reassignar valores només canvia el paràmetre.' : 'Reasignar valores solo cambia el parámetro.', 'main: datos → A [10, 7]\ncambiar: valores → B [20, 30]'],
      [ca ? 'valores[1] = 40 modifica el nou array B.' : 'valores[1] = 40 modifica el nuevo array B.', 'main: datos → A [10, 7]\ncambiar: valores → B [20, 40]'],
      [ca ? 'Acaba la crida. main conserva la seua referència a A.' : 'Termina la llamada. main conserva su referencia a A.', 'main: datos → A [10, 7]\nSystem.out.println(datos[0]); // 10\nSystem.out.println(datos[1]); // 7']
    ],
    'factorial-trace': [
      [ca ? 'factorial(3) necessita factorial(2).' : 'factorial(3) necesita factorial(2).', 'factorial(3): 3 * factorial(2)'],
      [ca ? 'factorial(2) necessita factorial(1).' : 'factorial(2) necesita factorial(1).', 'factorial(3): 3 * ...\n  factorial(2): 2 * factorial(1)'],
      [ca ? 'factorial(1) necessita factorial(0).' : 'factorial(1) necesita factorial(0).', 'factorial(3): 3 * ...\n  factorial(2): 2 * ...\n    factorial(1): 1 * factorial(0)'],
      [ca ? 'Cas base: factorial(0) retorna 1.' : 'Caso base: factorial(0) devuelve 1.', 'factorial(3): 3 * ...\n  factorial(2): 2 * ...\n    factorial(1): 1 * ...\n      factorial(0) → 1'],
      [ca ? 'factorial(1) completa 1 * 1 i retorna 1.' : 'factorial(1) completa 1 * 1 y devuelve 1.', 'factorial(3): 3 * ...\n  factorial(2): 2 * ...\n    factorial(1) → 1'],
      [ca ? 'factorial(2) completa 2 * 1 i retorna 2.' : 'factorial(2) completa 2 * 1 y devuelve 2.', 'factorial(3): 3 * ...\n  factorial(2) → 2'],
      [ca ? 'factorial(3) completa 3 * 2 i retorna 6 a main.' : 'factorial(3) completa 3 * 2 y devuelve 6 a main.', 'factorial(3) → 6\nmain: resultado = 6;']
    ]
  };
  document.querySelectorAll('[data-trace]').forEach(panel => {
    const key = panel.dataset.trace;
    const steps = traces[key];
    const output = document.querySelector(`[data-state="${key}"]`);
    const back = panel.querySelector('[data-back]');
    const forward = panel.querySelector('[data-forward]');
    let step = 0;
    function render() {
      panel.querySelector('[data-step]').textContent = `${step + 1} / ${steps.length}. ${steps[step][0]}`;
      output.textContent = steps[step][1];
      back.disabled = step === 0;
      forward.disabled = step === steps.length - 1;
    }
    back.addEventListener('click', () => { step = Math.max(0, step - 1); render(); });
    forward.addEventListener('click', () => { step = Math.min(steps.length - 1, step + 1); render(); });
    panel.querySelector('[data-reset]').addEventListener('click', () => { step = 0; render(); });
    render();
  });
})();
