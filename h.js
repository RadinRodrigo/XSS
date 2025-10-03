document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');

    // Reflect the user input directly into the result
    resultDiv.innerHTML = `You searched for: <strong>${searchInput}</strong>`;
});
