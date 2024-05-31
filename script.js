// script.js
document.getElementById('generateTable').addEventListener('click', function() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const tableTitle = document.getElementById('tableTitle').value;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear previous table

    const table = document.createElement('table');

    if (tableTitle) {
        const caption = document.createElement('caption');
        caption.innerText = tableTitle;
        table.appendChild(caption);
    }

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.contentEditable = true; // Make cells editable
            cell.innerText = ''; // Cells are empty by default
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
    document.getElementById('downloadTable').style.display = 'inline-block'; // Show download button
});

document.getElementById('downloadTable').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    html2canvas(tableContainer, {
        scrollY: -window.scrollY, // Ensure the entire table is captured
        scale: 2 // High resolution
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'table.png';
        link.click();
    });
});
