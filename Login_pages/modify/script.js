const reportTable = document.getElementById('report-table');

fetch('/api/report-data') // assuming you have an API endpoint to retrieve report data
  .then(response => response.json())
  .then(data => {
    data.forEach(rowData => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${rowData.id}</td>
        <td>${rowData.name}</td>
        <td>${rowData.email}</td>
      `;
      reportTable.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching report data:', error);
  });