function searchProducts() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const query = input.value.trim();

  // Secret Admin Access Passwords
  const adminKeys = {
    'deepak@123': 'Deepak',
    'admin@123': 'Admin',
    'sanjay@123': 'Sanjay',
  };

  // Only act when user presses Enter
  if (event.key !== "Enter") return;

  if (query === "") return;

  // Check for admin login
  if (adminKeys[query]) {
    localStorage.setItem('adinath_admin_user', adminKeys[query]);
    window.open('admin/index.html', '_blank');
    return;
  }

  // Log the search for admin dashboard
  logSearch(query);

  // If NOT already on product page → redirect
  if (!window.location.pathname.includes("product")) {
    window.location.href = `product.html?search=${encodeURIComponent(query)}`;
    return;
  }

  // If already on products page → filter directly
  if (typeof renderProducts === "function") {
    input.value = query;
    renderProducts();
  }
}

function logSearch(query) {
  const rawLogs = localStorage.getItem('adinath_search_logs');
  const logs = rawLogs ? JSON.parse(rawLogs) : [];

  logs.push({
    query: query,
    timestamp: new Date().toISOString()
  });

  // Keep only last 100 searches
  if (logs.length > 100) logs.shift();

  localStorage.setItem('adinath_search_logs', JSON.stringify(logs));
}

// Security Protection: Anti-Inspection Logic
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  // Disable F12
  if (e.keyCode === 123) {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Toggle Select)
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    return false;
  }
});

