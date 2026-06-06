document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "egghatch-tutorial-sidebar-collapsed";
  const body = document.body;
  const sidebar = document.querySelector(".site-sidebar");
  const toggleButtons = Array.from(document.querySelectorAll(".sidebar-toggle"));

  if (!sidebar || !toggleButtons.length) {
    return;
  }

  const setSidebarState = (collapsed) => {
    body.classList.toggle("sidebar-collapsed", collapsed);

    toggleButtons.forEach((button) => {
      button.setAttribute("aria-expanded", String(!collapsed));

      const label = button.querySelector(".sidebar-toggle__label");
      const icon = button.querySelector(".sidebar-toggle__icon");

      if (label) {
        label.textContent = collapsed ? "Unfold chapters" : "Fold chapters";
      }

      if (icon) {
        icon.textContent = collapsed ? "[]" : "||";
      }
    });
  };

  setSidebarState(window.localStorage.getItem(storageKey) === "true");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextCollapsed = !body.classList.contains("sidebar-collapsed");
      setSidebarState(nextCollapsed);
      window.localStorage.setItem(storageKey, String(nextCollapsed));
    });
  });
});
