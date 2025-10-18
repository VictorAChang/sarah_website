// Navbar and includes loader
// Usage: put <div data-include="/templates/partials/_navbar.html"></div>
// then call loadIncludes() or include will auto-run on DOMContentLoaded.
async function loadIncludes(root = document) {
  const nodes = root.querySelectorAll('[data-include]');
  await Promise.all(
    Array.from(nodes).map(async (el) => {
      const path = el.getAttribute('data-include');
      try {
        const res = await fetch(path, {cache: 'no-store'});
        if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
        const text = await res.text();
        el.innerHTML = text;
        // execute scripts inside the included HTML (if any)
        el.querySelectorAll('script').forEach((s) => {
          const ns = document.createElement('script');
          if (s.src) ns.src = s.src;
          ns.textContent = s.textContent;
          document.head.appendChild(ns);
          document.head.removeChild(ns);
        });
      } catch (err) {
        console.error('include error:', err);
      }
    })
  );
}

document.addEventListener('DOMContentLoaded', () => loadIncludes());

// After includes have run, initialize small dropdown toggles used in navbar
async function setupDropdowns() {
  // look for dropdown buttons and attach a click listener
  document.querySelectorAll('.dropdown').forEach((dd) => {
    const btn = dd.querySelector('button');
    const menu = dd.querySelector('.dropdown-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = menu.classList.toggle('show');
  // Basic positioning for the injected dropdown menu: toggle inline display
      if (open) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  });

  // close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown .dropdown-menu').forEach((m) => {
      m.classList.remove('show');
      m.style.display = 'none';
    });
  });
}

// run setup after includes complete. wrap original loadIncludes to chain init.
const _origLoadIncludes = window.loadIncludes;
window.loadIncludes = async function (root) {
  await _origLoadIncludes(root);
  try { setupDropdowns(); } catch (e) { console.error('dropdown init failed', e); }
};

// expose for manual calls
window.loadIncludes = loadIncludes;