// The theme picker under "Make it yours": click a colour and the screenshot changes to that theme.
document.documentElement.classList.add('js');
const buttons = [...document.querySelectorAll('.theme-picks button')];
const pictures = [...document.querySelectorAll('.theme-stage img')];
const names = Object.fromEntries(buttons.map((b) => [b.dataset.theme, b.textContent.trim()]));
let latest = 0;

async function show(id) {
  const turn = ++latest;
  const next = pictures.find((p) => p.dataset.theme === id);
  // Wait until the picture can be drawn at once, so it never fades in from nothing.
  await next.decode().catch(() => {});
  if (turn !== latest) return;
  const current = pictures.find((p) => p.classList.contains('on'));
  if (current === next) return;
  pictures.forEach((p) => {
    p.classList.remove('under');
    p.classList.toggle('on', p === next);
    p.alt = p === next ? `Kalendar in the ${names[id]} theme` : '';
  });
  current.classList.add('under');
  setTimeout(() => { if (turn === latest) current.classList.remove('under'); }, 400);
}

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
  show(button.dataset.theme);
}));
