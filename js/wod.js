// ══════════════════════════════════════════
//  BASE DE DATOS DE MOVIMIENTOS
// ══════════════════════════════════════════
const MOVIMIENTOS = {
  cardio: [
    { nombre: 'Rowing', unidad: 'cal', cat: 'Cardio', rx: { m: '18 cal', f: '14 cal' }, scaled: { m: '14 cal', f: '10 cal' } },
    { nombre: 'Ski Erg', unidad: 'cal', cat: 'Cardio', rx: { m: '18 cal', f: '14 cal' }, scaled: { m: '12 cal', f: '9 cal' } },
    { nombre: 'Bike Erg', unidad: 'cal', cat: 'Cardio', rx: { m: '20 cal', f: '16 cal' }, scaled: { m: '15 cal', f: '12 cal' } },
    { nombre: 'Box Jump', unidad: 'reps', cat: 'Cardio', rx: { m: '60 cm', f: '50 cm' }, scaled: { m: '50 cm', f: '40 cm' } },
    { nombre: 'Double Under', unidad: 'reps', cat: 'Cardio', rx: { m: '50 reps', f: '50 reps' }, scaled: { m: '100 singles', f: '100 singles' } },
    { nombre: 'Burpee', unidad: 'reps', cat: 'Cardio', rx: { m: 'full', f: 'full' }, scaled: { m: 'step-out', f: 'step-out' } },
    { nombre: 'Burpee Box Jump Over', unidad: 'reps', cat: 'Cardio', rx: { m: '60 cm', f: '50 cm' }, scaled: { m: '50 cm', f: '40 cm' } },
    { nombre: 'Wall Ball', unidad: 'reps', cat: 'Cardio', rx: { m: '9 kg / 3 m', f: '6 kg / 2.7 m' }, scaled: { m: '6 kg', f: '4 kg' } },
    { nombre: 'Run 400m', unidad: 'ronda', cat: 'Cardio', rx: { m: '400 m', f: '400 m' }, scaled: { m: '200 m', f: '200 m' } },
  ],
  gym: [
    { nombre: 'Pull Up', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'strict', f: 'strict' }, scaled: { m: 'band', f: 'ring row' } },
    { nombre: 'Chest to Bar', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'C2B', f: 'C2B' }, scaled: { m: 'pull up', f: 'pull up' } },
    { nombre: 'Bar Muscle Up', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'strict', f: 'strict' }, scaled: { m: 'C2B', f: 'C2B' } },
    { nombre: 'Ring Muscle Up', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'full', f: 'full' }, scaled: { m: 'ring dip+pull', f: 'ring dip+pull' } },
    { nombre: 'Handstand Push Up', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'kipping', f: 'kipping' }, scaled: { m: 'pike HSPU', f: 'pike HSPU' } },
    { nombre: 'Toes to Bar', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'full', f: 'full' }, scaled: { m: 'knee raise', f: 'knee raise' } },
    { nombre: 'Ring Dip', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'strict', f: 'strict' }, scaled: { m: 'box dip', f: 'box dip' } },
    { nombre: 'Pistol Squat', unidad: 'reps', cat: 'Gimnasia', rx: { m: 'alternating', f: 'alternating' }, scaled: { m: 'assisted', f: 'assisted' } },
    { nombre: 'Rope Climb', unidad: 'reps', cat: 'Gimnasia', rx: { m: '4.5 m', f: '4.5 m' }, scaled: { m: 'legless', f: 'rope pull' } },
  ],
  peso: [
    { nombre: 'Deadlift', unidad: 'reps', cat: 'Halterofilia', rx: { m: '100 kg', f: '70 kg' }, scaled: { m: '80 kg', f: '57.5 kg' } },
    { nombre: 'Thruster', unidad: 'reps', cat: 'Halterofilia', rx: { m: '43 kg', f: '30 kg' }, scaled: { m: '35 kg', f: '20 kg' } },
    { nombre: 'Push Press', unidad: 'reps', cat: 'Halterofilia', rx: { m: '52 kg', f: '35 kg' }, scaled: { m: '43 kg', f: '25 kg' } },
    { nombre: 'Back Squat', unidad: 'reps', cat: 'Halterofilia', rx: { m: '60 kg', f: '43 kg' }, scaled: { m: '43 kg', f: '30 kg' } },
    { nombre: 'Front Squat', unidad: 'reps', cat: 'Halterofilia', rx: { m: '52 kg', f: '35 kg' }, scaled: { m: '43 kg', f: '25 kg' } },
    { nombre: 'Overhead Squat', unidad: 'reps', cat: 'Halterofilia', rx: { m: '43 kg', f: '30 kg' }, scaled: { m: '35 kg', f: '20 kg' } },
    { nombre: 'Bench Press', unidad: 'reps', cat: 'Halterofilia', rx: { m: '60 kg', f: '43 kg' }, scaled: { m: '43 kg', f: '30 kg' } },
    { nombre: 'Barbell Row', unidad: 'reps', cat: 'Halterofilia', rx: { m: '52 kg', f: '35 kg' }, scaled: { m: '43 kg', f: '25 kg' } },
    { nombre: 'Romanian DL', unidad: 'reps', cat: 'Halterofilia', rx: { m: '82.5 kg', f: '57.5 kg' }, scaled: { m: '60 kg', f: '43 kg' } },
    { nombre: 'Kettlebell Swing', unidad: 'reps', cat: 'Halterofilia', rx: { m: '32 kg', f: '24 kg' }, scaled: { m: '24 kg', f: '16 kg' } },
  ],
  core: [
    { nombre: 'GHD Sit Up', unidad: 'reps', cat: 'Core', rx: { m: 'full', f: 'full' }, scaled: { m: 'abmat', f: 'abmat' } },
    { nombre: 'Sit Up', unidad: 'reps', cat: 'Core', rx: { m: 'abmat', f: 'abmat' }, scaled: { m: 'anchored', f: 'anchored' } },
    { nombre: 'V-Up', unidad: 'reps', cat: 'Core', rx: { m: 'full', f: 'full' }, scaled: { m: 'tuck', f: 'tuck' } },
    { nombre: 'Flutter Kick', unidad: 'reps', cat: 'Core', rx: { m: '4ct', f: '4ct' }, scaled: { m: '4ct', f: '4ct' } },
    { nombre: 'L-Sit Hold', unidad: 'seg', cat: 'Core', rx: { m: '20 seg', f: '20 seg' }, scaled: { m: '10 seg', f: '10 seg' } },
    { nombre: 'Hollow Rock', unidad: 'reps', cat: 'Core', rx: { m: 'full', f: 'full' }, scaled: { m: 'hollow hold', f: 'hollow hold' } },
  ],
  oly: [
    { nombre: 'Snatch', unidad: 'reps', cat: 'Olímpico', rx: { m: '60 kg', f: '43 kg' }, scaled: { m: '43 kg', f: '30 kg' } },
    { nombre: 'Clean & Jerk', unidad: 'reps', cat: 'Olímpico', rx: { m: '82.5 kg', f: '57.5 kg' }, scaled: { m: '60 kg', f: '43 kg' } },
    { nombre: 'Power Clean', unidad: 'reps', cat: 'Olímpico', rx: { m: '70 kg', f: '47.5 kg' }, scaled: { m: '52 kg', f: '35 kg' } },
    { nombre: 'Power Snatch', unidad: 'reps', cat: 'Olímpico', rx: { m: '52 kg', f: '35 kg' }, scaled: { m: '43 kg', f: '25 kg' } },
    { nombre: 'Hang Clean', unidad: 'reps', cat: 'Olímpico', rx: { m: '70 kg', f: '47.5 kg' }, scaled: { m: '52 kg', f: '35 kg' } },
    { nombre: 'Squat Clean', unidad: 'reps', cat: 'Olímpico', rx: { m: '82.5 kg', f: '57.5 kg' }, scaled: { m: '60 kg', f: '43 kg' } },
  ],
  odd: [
    { nombre: 'Sled Push', unidad: 'ronda', cat: 'Odd Object', rx: { m: '80 kg', f: '60 kg' }, scaled: { m: '60 kg', f: '40 kg' } },
    { nombre: 'Sandbag Carry', unidad: 'reps', cat: 'Odd Object', rx: { m: '70 kg', f: '45 kg' }, scaled: { m: '45 kg', f: '30 kg' } },
    { nombre: 'Farmers Carry', unidad: 'ronda', cat: 'Odd Object', rx: { m: '2×32 kg', f: '2×24 kg' }, scaled: { m: '2×24 kg', f: '2×16 kg' } },
    { nombre: 'Tire Flip', unidad: 'reps', cat: 'Odd Object', rx: { m: 'pesado', f: 'medio' }, scaled: { m: 'liviano', f: 'liviano' } },
    { nombre: 'Medball Clean', unidad: 'reps', cat: 'Odd Object', rx: { m: '14 kg', f: '9 kg' }, scaled: { m: '9 kg', f: '6 kg' } },
  ],
};

const REPS_POOL = {
  amrap:   [5, 8, 10, 12, 15, 20, 21, 30],
  fortime: [10, 15, 20, 21, 25, 30],
  emom:    [5, 6, 8, 10, 12],
  chipper: [15, 20, 25, 30, 40, 50],
  tabata:  [20],
  rft:     [5, 8, 10, 12, 15],
};

const NAMES_POOL = [
  'INFERNO', 'TITAN', 'VENOM', 'STORM', 'BLAZE', 'IRON', 'FURY', 'APEX',
  'DELTA', 'BRAVO', 'SIGMA', 'NOVA', 'RAZOR', 'MAVERICK', 'COBRA', 'HAWK',
  'PHANTOM', 'REAPER', 'THUNDER', 'CHAOS', 'BEAST', 'GRIND', 'FORGE', 'CRUSH',
];

// ══════════════════════════════════════════
//  ESTADO
// ══════════════════════════════════════════
let modoActual = 'individual';
let historial = [];

function setMode(modo) {
  modoActual = modo;
  document.getElementById('btn-individual').classList.toggle('active', modo === 'individual');
  document.getElementById('btn-equipo').classList.toggle('active', modo === 'equipo');
  document.getElementById('team-config').classList.toggle('visible', modo === 'equipo');
  document.getElementById('team-style-config').classList.toggle('visible', modo === 'equipo');
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// ══════════════════════════════════════════
//  GENERADOR PRINCIPAL
// ══════════════════════════════════════════
function generarWOD() {
  const formato = (() => {
    const f = document.getElementById('formato').value;
    if (f === 'random') return rand(['amrap', 'fortime', 'emom', 'chipper', 'rft', 'tabata']);
    return f;
  })();
  const nivel    = document.getElementById('nivel').value;
  const duracion = parseInt(document.getElementById('duracion').value);
  const movMin   = parseInt(document.getElementById('mov-min').value);
  const movMax   = parseInt(document.getElementById('mov-max').value);
  const modo     = modoActual;

  const cats = [];
  if (document.getElementById('cat-cardio').checked) cats.push('cardio');
  if (document.getElementById('cat-gym').checked)    cats.push('gym');
  if (document.getElementById('cat-peso').checked)   cats.push('peso');
  if (document.getElementById('cat-core').checked)   cats.push('core');
  if (document.getElementById('cat-oly').checked)    cats.push('oly');
  if (document.getElementById('cat-odd').checked)    cats.push('odd');

  if (cats.length === 0) {
    alert('Seleccioná al menos una categoría de movimientos.');
    return;
  }

  let pool = [];
  cats.forEach(c => pool = pool.concat(MOVIMIENTOS[c]));

  const nMov = randInt(Math.min(movMin, pool.length), Math.min(movMax, pool.length));
  const seleccionados = [];
  const usado = new Set();
  while (seleccionados.length < nMov && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    const mov = pool[idx];
    if (!usado.has(mov.nombre)) {
      usado.add(mov.nombre);
      seleccionados.push(mov);
    }
    if (usado.size >= pool.length) break;
  }

  const repsPool = REPS_POOL[formato] || REPS_POOL.amrap;
  const movConReps = seleccionados.map(m => ({ ...m, reps: rand(repsPool) }));

  const nombre    = rand(NAMES_POOL);
  const teamSize  = modo === 'equipo' ? parseInt(document.getElementById('team-size').value) : null;
  const teamStyle = modo === 'equipo' ? document.getElementById('team-style').value : null;
  const rounds    = formato === 'emom' ? duracion : formato === 'rft' ? randInt(3, 6) : null;

  const wod = { nombre, formato, nivel, duracion, modo, teamSize, teamStyle, movimientos: movConReps, rounds };

  historial.unshift(wod);
  renderWOD(wod);
  renderHistorial();
}

// ══════════════════════════════════════════
//  RENDER WOD
// ══════════════════════════════════════════
function renderWOD(wod) {
  document.getElementById('wod-empty').style.display = 'none';
  const out = document.getElementById('wod-output');
  out.style.display = 'block';
  out.innerHTML = buildWODHtml(wod);
}

function buildWODHtml(wod) {
  const formatLabel = {
    amrap: 'AMRAP', fortime: 'For Time', emom: 'EMOM',
    chipper: 'Chipper', tabata: 'Tabata', rft: 'Rounds For Time',
  }[wod.formato] || wod.formato.toUpperCase();

  const today = new Date().toLocaleDateString('es-AR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  let descripcion = '';
  let scoreLabel  = '';
  let scoreValue  = '';
  switch (wod.formato) {
    case 'amrap':
      descripcion = `En ${wod.duracion} minutos, completar la mayor cantidad de rondas + reps posibles de los siguientes movimientos.`;
      scoreLabel = 'Score';
      scoreValue = 'Mayor cantidad de rondas + reps (anotar como Rondas + Reps)';
      break;
    case 'fortime':
      descripcion = `Completar todos los movimientos en el menor tiempo posible. Time cap: ${wod.duracion} minutos.`;
      scoreLabel = 'Score';
      scoreValue = `Tiempo en completar (time cap ${wod.duracion} min)`;
      break;
    case 'emom':
      descripcion = `Cada minuto al inicio del minuto (EMOM), por ${wod.duracion} minutos. Completar los reps indicados antes de que arranque el siguiente minuto.`;
      scoreLabel = 'Estructura';
      scoreValue = `${wod.duracion} rounds · 1 minuto por round`;
      break;
    case 'chipper':
      descripcion = `Completar cada movimiento en su totalidad antes de pasar al siguiente. Todos los reps de un ejercicio, luego el siguiente.`;
      scoreLabel = 'Score';
      scoreValue = `Tiempo total (time cap ${wod.duracion} min)`;
      break;
    case 'tabata':
      descripcion = `20 segundos de trabajo / 10 segundos de descanso, 8 rondas por movimiento. Alternar movimientos o completar en secuencia.`;
      scoreLabel = 'Estructura';
      scoreValue = '8 × (20" trabajo / 10" descanso) por movimiento';
      break;
    case 'rft':
      descripcion = `Completar ${wod.rounds} rondas del siguiente circuito en el menor tiempo posible. Time cap: ${wod.duracion} minutos.`;
      scoreLabel = 'Rondas';
      scoreValue = `${wod.rounds} rondas · time cap ${wod.duracion} min`;
      break;
  }

  let teamHtml = '';
  if (wod.modo === 'equipo') {
    const styleDesc = {
      relay:     'Solo trabaja un atleta a la vez. Mientras uno trabaja, el resto descansa.',
      sync:      'Todos los atletas trabajan al mismo tiempo y de forma sincronizada.',
      partition: 'El equipo puede dividir los reps libremente entre sus miembros.',
      mixed:     'Combinar estilos: algunos movimientos en relay, otros sincronizados.',
    }[wod.teamStyle] || '';

    const notes = [
      `Equipo de ${wod.teamSize} atletas`,
      styleDesc,
      wod.teamStyle === 'relay'     ? 'Cada atleta completa sus reps antes de pasar el turno.' : null,
      wod.teamStyle === 'partition' ? 'Dividir reps estratégicamente según fortalezas del equipo.' : null,
      'Los atletas no pueden trabajar antes de que sea su turno (relay) o deben sincronizar (sync).',
    ].filter(Boolean);

    teamHtml = `
      <div class="team-notes">
        <div class="team-notes-title">Reglas de equipo — ${wod.teamSize} atletas</div>
        <ul>${notes.map(n => `<li>${n}</li>`).join('')}</ul>
      </div>`;
  }

  const movHtml = wod.movimientos.map((m, i) => {
    const peso    = (wod.nivel === 'principiante' || wod.nivel === 'intermedio') ? m.scaled : m.rx;
    const pesoStr = peso ? `${peso.m} (H) / ${peso.f} (M)` : '';
    return `
      <div class="movement-item">
        <div class="movement-left">
          <span class="movement-num">${i + 1}</span>
          <div>
            <div class="movement-name">${m.nombre}</div>
            <div class="movement-cat">${m.cat}</div>
          </div>
        </div>
        <div class="movement-right">
          <div class="movement-reps">${m.reps}</div>
          <div class="movement-weight">${pesoStr}</div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="wod-card">
      <div class="wod-header">
        <div>
          <div class="wod-date-badge">${today}</div>
          <div class="wod-title-row">
            <span class="wod-format-badge">${formatLabel}</span>
            <span class="wod-name">${wod.nombre}</span>
          </div>
          <div class="wod-meta">
            <span class="meta-pill highlight">${wod.duracion} MIN</span>
            <span class="meta-pill">${wod.nivel.toUpperCase()}</span>
            <span class="meta-pill">${wod.movimientos.length} MOVIMIENTOS</span>
            ${wod.rounds ? `<span class="meta-pill">${wod.rounds} ROUNDS</span>` : ''}
          </div>
        </div>
        <span class="wod-type-badge ${wod.modo === 'equipo' ? 'type-equipo' : 'type-individual'}">
          ${wod.modo === 'equipo' ? `EQUIPO ×${wod.teamSize}` : 'INDIVIDUAL'}
        </span>
      </div>

      <div class="wod-body">
        <div class="section-label">Descripción</div>
        <div class="wod-description">${descripcion}</div>

        ${teamHtml}

        <div class="section-label">Movimientos</div>
        <div class="movements-list">${movHtml}</div>

        <div class="wod-score-box">
          <span class="score-icon">🎯</span>
          <div>
            <div class="score-label">${scoreLabel}</div>
            <div class="score-value">${scoreValue}</div>
          </div>
        </div>

        <div class="scaling-section">
          <div class="section-label">Escalado / Pesos de referencia</div>
          <div class="scaling-grid">
            <div class="scaling-card scaling-rx">
              <div class="scaling-title">RX</div>
              <div class="scaling-items">
                ${wod.movimientos.map(m => `<b>${m.nombre}:</b> ${m.rx.m} H / ${m.rx.f} M`).join('<br>')}
              </div>
            </div>
            <div class="scaling-card scaling-scaled">
              <div class="scaling-title">Scaled</div>
              <div class="scaling-items">
                ${wod.movimientos.map(m => `<b>${m.nombre}:</b> ${m.scaled.m} H / ${m.scaled.f} M`).join('<br>')}
              </div>
            </div>
            <div class="scaling-card scaling-beginner">
              <div class="scaling-title">Principiante</div>
              <div class="scaling-items">
                ${wod.movimientos.map(m => `<b>${m.nombre}:</b> ${m.scaled.m} / reducir reps 50%`).join('<br>')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wod-actions">
        <button class="btn-action btn-secondary" onclick="window.print()">Imprimir</button>
        <button class="btn-action btn-secondary" onclick="copiarWOD()">Copiar texto</button>
        <button class="btn-action btn-primary" onclick="generarWOD()">Nuevo WOD</button>
      </div>
    </div>`;
}

// ══════════════════════════════════════════
//  HISTORIAL
// ══════════════════════════════════════════
function renderHistorial() {
  const section = document.getElementById('history-section');
  const list    = document.getElementById('history-list');
  if (historial.length <= 1) { section.style.display = 'none'; return; }
  section.style.display = 'block';

  const formatLabel = {
    amrap: 'AMRAP', fortime: 'For Time', emom: 'EMOM',
    chipper: 'Chipper', tabata: 'Tabata', rft: 'RFT',
  };

  list.innerHTML = historial.slice(1, 6).map((w, i) => `
    <div class="history-item" onclick="verHistorial(${i + 1})">
      <span class="history-item-format">${formatLabel[w.formato] || w.formato}</span>
      <span class="history-item-name">${w.nombre}</span>
      <span class="history-item-meta">${w.modo === 'equipo' ? '× ' + w.teamSize : '1'} · ${w.duracion} min · ${w.movimientos.length} mov</span>
    </div>`).join('');
}

function verHistorial(idx) {
  renderWOD(historial[idx]);
}

// ══════════════════════════════════════════
//  COPIAR TEXTO
// ══════════════════════════════════════════
function copiarWOD() {
  if (!historial.length) return;
  const w = historial[0];
  const formatLabel = {
    amrap: 'AMRAP', fortime: 'For Time', emom: 'EMOM',
    chipper: 'Chipper', tabata: 'Tabata', rft: 'Rounds For Time',
  };

  let txt = `WOD — ${w.nombre}\n`;
  txt += `Formato: ${formatLabel[w.formato] || w.formato} · ${w.duracion} min\n`;
  txt += `Modalidad: ${w.modo === 'equipo' ? 'Equipo ×' + w.teamSize : 'Individual'} · Nivel: ${w.nivel}\n\n`;
  txt += 'MOVIMIENTOS:\n';
  w.movimientos.forEach((m, i) => {
    const peso = (w.nivel === 'principiante' || w.nivel === 'intermedio') ? m.scaled : m.rx;
    txt += `${i + 1}. ${m.reps} ${m.nombre}  [${peso.m} H / ${peso.f} M]\n`;
  });

  navigator.clipboard.writeText(txt)
    .then(() => alert('WOD copiado al portapapeles'))
    .catch(() => alert('No se pudo copiar. Usá el botón imprimir.'));
}
