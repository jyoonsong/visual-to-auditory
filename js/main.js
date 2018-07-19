html2canvas(document.body).then(canvas => {
    document.body.appendChild(canvas)
});

window.onload = takeScreenshot();

function takeScreenshot() {
    document.getElementById('your-id').scrollIntoView();
    html2canvas(document.body, {
        logging: true,
        allowTaint: true,
        canvas: canvas
    }).then(function(canvas) {
        var dataImage = canvas.toDataURL("image/png");
        $.ajax({
            type: "POST",
            url: "http://your-url.com/save.php",
            data: { 
                data:dataImage
            }
        }).done(function(fileName) {
                window.open("http://your-url.com/" + fileName.replace(/['"]+/g, ''));

        }); 
    });
}