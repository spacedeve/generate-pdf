document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });
    fetch('/processFormData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'modified.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error:', error));
});