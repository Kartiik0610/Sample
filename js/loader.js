(function () {
  // Detect page reload
  const navEntries = performance.getEntriesByType("navigation");
  const isReload =
    navEntries.length > 0 && navEntries[0].type === "reload";

  // Prevent infinite loop
  const loaderShown = sessionStorage.getItem("loaderShown");

  if (isReload && !loaderShown) {
    sessionStorage.setItem("loaderShown", "true");
    window.location.replace("loader.html");
  }

  // Clear flag when page loads normally
  window.addEventListener("pageshow", () => {
    sessionStorage.removeItem("loaderShown");
  });
})();