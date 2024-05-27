document.addEventListener("DOMContentLoaded", function() {
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loading-screen').style.opacity = 0;
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        } else {
            width++;
            document.getElementById('loading-bar').style.width = width + '%';
            document.getElementById('loading-text').innerText = width + '%';
        }
    }, 10); 
});

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = './Curriculum.pdf';  // Substitua pelo caminho correto do seu arquivo PDF
        link.download = 'Curriculum Guilherme.pdf';  // Nome do arquivo ao fazer o download
        link.click();
    }
