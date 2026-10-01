const roles = ["Frontend Developer", "Frontend Designer", "Graphic Designer", "React Enthusiast"], r = document.getElementById('role');
let ri = 0, ci = 0, del = false;
(function t() {
    const w = roles[ri]; r.textContent = w.slice(0, ci);
    if (!del && ci++ === w.length) { del = true; return setTimeout(t, 1400) }
    if (del && --ci < 0) { del = false; ci = 0; ri = (ri + 1) % roles.length }
    setTimeout(t, del ? 40 : 90)
})();
const S = [["HTML5 / CSS3", 90], ["JavaScript", 75], ["React.js", 75], ["React Router / Context API", 70], ["Git / GitHub", 70], ["Graphic Design / Canva", 85]];
document.getElementById('sk').innerHTML = S.map(s => `<div class="sk"><div><span>${s[0]}</span><em>${s[1]}%</em></div><div class="bar"><i data-w="${s[1]}"></i></div></div>`).join('');
const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    if (e.target.dataset.w) e.target.style.width = e.target.dataset.w + '%';
    if (e.target.dataset.n) { const n = +e.target.dataset.n; let v = 0; const k = setInterval(() => { e.target.textContent = ++v; if (v >= n) clearInterval(k) }, 180) }
}), { threshold: .5 });
document.querySelectorAll('[data-w],[data-n]').forEach(x => io.observe(x));
const links = [...document.querySelectorAll('nav a[href^="#"]:not(.logo)')];
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id)) }), { threshold: .45 });
document.querySelectorAll('section').forEach(s => so.observe(s));
const ring = document.getElementById('ring');
if (matchMedia('(hover:hover)').matches) {
    ring.style.display = 'block';
    addEventListener('mousemove', e => { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px' })
}
document.getElementById('f').addEventListener('submit', e => {
    e.preventDefault();
    const b = encodeURIComponent(document.getElementById('m').value + "\n\nFrom: " + document.getElementById('n').value + " (" + document.getElementById('e').value + ")");
    location.href = "mailto:mahaveerktarvedi@gmail.com?subject=" + encodeURIComponent("Portfolio message from " + document.getElementById('n').value) + "&body=" + b
});
