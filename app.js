var iframe = document.createElement('iframe');       
    const frame = document.body.appendChild(iframe);
    const div = document.getElementById('puzzle')
    div.appendChild(frame)
    iframe.src = 'https://sudokusolver.net/embed.html';       
    iframe.width = '700px';
    iframe.height = '600px';
    