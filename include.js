// Simple client-side include loader (root copy)
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

// expose for manual calls
window.loadIncludes = loadIncludes;
