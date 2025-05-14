let outcomes = [];

function logOutcome(result) {
    const time = new Date().toISOString();
    outcomes.push({ result, time });
    updateLog();
}

function updateLog() {
    document.getElementById('log').textContent = JSON.stringify(outcomes, null, 2);
}

function downloadData() {
    const blob = new Blob([JSON.stringify(outcomes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flip_data.json';
    a.click();
    URL.revokeObjectURL(url);
}
