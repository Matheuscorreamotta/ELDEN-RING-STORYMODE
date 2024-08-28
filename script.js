const avanca = document.querySelectorAll('.btn-proxímo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proxímoPasso = 'passo-' + this.getAttribute('data-proxímo');

        atual.classList.remove('ativo');
        document.getElementById(proxímoPasso).classList.add('ativo');
    })
})
