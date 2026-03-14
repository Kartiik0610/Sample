function renderAnalytics() {
    const rawLogs = localStorage.getItem('adinath_search_logs');
    const logs = rawLogs ? JSON.parse(rawLogs) : [];
    
    const tableBody = document.getElementById('recentSearchTable');
    tableBody.innerHTML = '';

    // Count queries
    const searchCounts = {};
    logs.reverse().forEach((log, idx) => {
        // Display recent searches
        tableBody.insertAdjacentHTML('beforeend', `
            <tr class="animate-fade-in" style="animation-delay: ${idx * 0.05}s">
                <td style="color: var(--admin-text-dim); font-size: 0.9rem;">
                    <i class="bi bi-clock-history" style="margin-right: 8px; opacity: 0.5;"></i>
                    ${new Date(log.timestamp).toLocaleString()}
                </td>
                <td style="font-weight: 600; color: #fff;">
                    <span style="background: rgba(255,255,255,0.03); padding: 6px 12px; border-radius: 8px; border: 1px solid var(--glass-border);">
                        ${log.query}
                    </span>
                </td>
            </tr>
        `);

        searchCounts[log.query.toLowerCase()] = (searchCounts[log.query.toLowerCase()] || 0) + 1;
    });

    // Update Stats
    document.getElementById('totalSearchesCount').textContent = logs.length;

    // Find most searched
    let topQuery = '-';
    let maxCount = 0;
    for (const [query, count] of Object.entries(searchCounts)) {
        if (count > maxCount) {
            maxCount = count;
            topQuery = query;
        }
    }
    document.getElementById('topSearchQuery').textContent = topQuery !== '-' ? `"${topQuery}" (${maxCount})` : '-';
}

// Initial render
renderAnalytics();

// Listen for new searches in real-time
window.addEventListener('storage', (e) => {
    if (e.key === 'adinath_search_logs') {
        renderAnalytics();
    }
});
