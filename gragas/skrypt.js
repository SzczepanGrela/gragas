document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('slider');
    var container = document.getElementById('slider-container');
    var isDragging = false;
    var startX;
    var audio = new Audio("sounds/skibidi.mp3");
    audio.loop=true;
    

    slider.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX - slider.offsetLeft;
        slider.style.transition = 'none';
    });

    let procentSzerokosci = 66; // Procent szerokości ekranu
    let szerokoscWyswietlacza = window.innerWidth;
    let punktAktywacji = szerokoscWyswietlacza * (procentSzerokosci / 100);
    let punktDezaktywacji = szerokoscWyswietlacza * ((procentSzerokosci+2)/100);
    



    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            slider.style.transition = 'left 0.5s';
            if (slider.getBoundingClientRect().right >= punktAktywacji && slider.getBoundingClientRect().right <=punktDezaktywacji ) {
                slider.style.display="none";
                audio.play();
                document.body.style.backgroundImage="none";
                document.getElementById("gragi").style.visibility="visible";
                setTimeout(poOdczekaniu, 100);
                window.alert('!!!GRAGAS!1!');
            }
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            var newX = e.clientX - startX;
            newX = Math.max(0, Math.min(newX, container.offsetWidth - slider.offsetWidth));
            slider.style.left = newX + 'px';
            
            
        }
    });
});