function relogio() {

    function getTimeFromSeconds (sec) {
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    };

    const rel = document.querySelector('.rel');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            rel.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    iniciar.addEventListener('click', function(event) {
        rel.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event) {
        rel.classList.add('pausado');
        clearInterval(timer);
    
    });
    
    zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        rel.innerHTML = '00:00:00';
        segundos = 0;
    });
    
}

relogio();

