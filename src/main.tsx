import { createRoot } from 'react-dom/client'
import site from './site.html?raw'
const root = document.getElementById('root')!
root.innerHTML = site
// re-run reveal observer for the injected markup
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.16 })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
void createRoot
