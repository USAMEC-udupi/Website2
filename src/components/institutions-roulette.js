// Vanilla JS roulette wheel for institutions
// Usage: mountInstitutionsRoulette(mountEl, institutions)

export function mountInstitutionsRoulette(mountEl, institutions) {
  if (!mountEl) return;
  if (!Array.isArray(institutions) || institutions.length === 0) {
    mountEl.innerHTML = '<div class="text-center text-gray-400">No institutions to display.</div>';
    return;
  }

  const center = 160;
  const radius = 140;
  const strokeWidth = 28;
  const anglePer = 360 / institutions.length;

  function polar(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(x, y, r, start, end) {
    const s = polar(x, y, r, end);
    const e = polar(x, y, r, start);
    const large = end - start <= 180 ? '0' : '1';
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 0 ${e.x} ${e.y}`;
  }

  mountEl.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col lg:flex-row gap-10 items-center';

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', '320');
  svg.setAttribute('height', '320');
  svg.setAttribute('viewBox', `0 0 ${center * 2} ${center * 2}`);

  const defs = document.createElementNS(svgNS, 'defs');
  const grad = document.createElementNS(svgNS, 'linearGradient');
  grad.setAttribute('id', 'segOrange');
  grad.setAttribute('x1', '0%');
  grad.setAttribute('y1', '0%');
  grad.setAttribute('x2', '100%');
  grad.setAttribute('y2', '0%');
  const stop1 = document.createElementNS(svgNS, 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#FF7A00');
  const stop2 = document.createElementNS(svgNS, 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#800000');
  grad.appendChild(stop1); grad.appendChild(stop2); defs.appendChild(grad);
  svg.appendChild(defs);

  const baseCircle = document.createElementNS(svgNS, 'circle');
  baseCircle.setAttribute('cx', center);
  baseCircle.setAttribute('cy', center);
  baseCircle.setAttribute('r', String(radius + 8));
  baseCircle.setAttribute('fill', '#1f2937');
  svg.appendChild(baseCircle);

  let activeIndex = 0;

  const segments = institutions.map((inst, i) => {
    const start = i * anglePer;
    const end = start + anglePer;
    const pathEl = document.createElementNS(svgNS, 'path');
    pathEl.setAttribute('d', arcPath(center, center, radius, start, end));
    pathEl.setAttribute('stroke', i === 0 ? 'url(#segOrange)' : '#3f3f46');
    pathEl.setAttribute('stroke-width', String(strokeWidth));
    pathEl.setAttribute('fill', 'none');
    pathEl.style.cursor = 'pointer';
    pathEl.addEventListener('mouseenter', () => setActive(i));
    pathEl.addEventListener('click', () => setActive(i));
    svg.appendChild(pathEl);
    return pathEl;
  });

  const centerCircle = document.createElementNS(svgNS, 'circle');
  centerCircle.setAttribute('cx', center);
  centerCircle.setAttribute('cy', center);
  centerCircle.setAttribute('r', '70');
  centerCircle.setAttribute('fill', '#0b0b0b');
  centerCircle.setAttribute('stroke', '#FF7A00');
  centerCircle.setAttribute('stroke-width', '3');
  svg.appendChild(centerCircle);

  const text = document.createElementNS(svgNS, 'text');
  text.setAttribute('x', center);
  text.setAttribute('y', center);
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('fill', '#fff');
  text.setAttribute('font-size', '18');
  text.setAttribute('font-weight', '700');
  text.textContent = 'USAMEC';
  svg.appendChild(text);

  const panel = document.createElement('div');
  panel.className = 'glass-card p-6 rounded-xl w-full max-w-xl';

  function renderPanel(inst) {
    panel.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between mb-2';
    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold';
    title.style.fontFamily = 'Orbitron, monospace';
    title.textContent = inst.name;
    header.appendChild(title);
    if (inst.website) {
      const link = document.createElement('a');
      link.href = inst.website; link.target = '_blank'; link.rel = 'noreferrer';
      link.className = 'px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold';
      link.textContent = 'Visit Website';
      header.appendChild(link);
    }
    panel.appendChild(header);

    const loc = document.createElement('p');
    loc.className = 'text-gray-300 mb-4';
    loc.textContent = inst.location || '';
    panel.appendChild(loc);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-4 text-sm';
    if (inst.established) {
      const g1 = document.createElement('div');
      g1.innerHTML = '<div class="text-gray-400">Established</div>' +
        `<div class="text-white font-semibold">${inst.established}</div>`;
      grid.appendChild(g1);
    }
    if (inst.phone || inst.email) {
      const g2 = document.createElement('div');
      g2.innerHTML = `<div class="text-gray-400">Contact</div>
        <div class="text-white font-semibold">${inst.phone || ''}</div>` +
        (inst.email ? `<a class="text-orange-400" href="mailto:${inst.email}">Mail</a>` : '');
      grid.appendChild(g2);
    }
    panel.appendChild(grid);

    if (Array.isArray(inst.programs) && inst.programs.length) {
      const prog = document.createElement('div');
      prog.className = 'mt-4';
      prog.innerHTML = '<div class="text-gray-400 text-sm mb-1">Programs</div>';
      const ul = document.createElement('ul');
      ul.className = 'list-disc list-inside text-gray-200 text-sm';
      inst.programs.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p; ul.appendChild(li);
      });
      prog.appendChild(ul); panel.appendChild(prog);
    }
  }

  function setActive(i) {
    activeIndex = i;
    segments.forEach((seg, idx) => {
      seg.setAttribute('stroke', idx === activeIndex ? 'url(#segOrange)' : '#3f3f46');
    });
    renderPanel(institutions[activeIndex]);
  }

  wrapper.appendChild(svg);
  wrapper.appendChild(panel);
  mountEl.appendChild(wrapper);

  setActive(0);
}

export default mountInstitutionsRoulette;

