const app = () => {
    console.log('Iniciando calculadora!');
    const calc = new Calc();

    document.getElementById("ac").addEventListener("click", calc.ac); 
    document.getElementById("calc").addEventListener("click", calc.calc); 
}

app();

function switchColor() {
    let darkTheme = document.getElementById('dark-theme');
    if (darkTheme) {
        document.getElementById('dark-theme').remove();
    } else {
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.setAttribute('href', 'css/bulma-prefers-dark.min.css');
        link.setAttribute('id', 'dark-theme');
        link.setAttribute('rel', 'stylesheet');
        head.appendChild(link);
    }
}

document.getElementById("switch-theme").addEventListener("click", switchColor); 
