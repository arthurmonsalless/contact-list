function saveDados(){
    const form = document.querySelector('form');
    const inputNome = document.querySelector('.nome');
    const inputSobrenome = document.querySelector('.sobrenome');
    const inputNumero = document.querySelector('.numero');
    const divRelatorio = document.querySelector('.relatorio');
    const allPessoas = [];
    let pessoa = {nome: String, sobrenome: String, telefone: Number}; //tipo objeto

    form.addEventListener('submit', function(e){
        e.preventDefault();

        getDados();
    });

    document.addEventListener('click', function (e){
        const el = e.target;
        if(el.classList.contains('delete')){
            el.parentElement.remove();
        }
    });

    function getDados(){
        const nomeValue = inputNome.value;
        const sobrenomeValue = inputSobrenome.value;
        const telefoneValue = inputNumero.value;
        if (nomeValue.length < 3 ) return alert('preencha o nome');
        if (sobrenomeValue.length < 3) return alert('preencha o sobrenome');
        if(typeof telefoneValue != 'number' && telefone.length < 9 ) return alert('verifique o telefone')

        createPessoa(nomeValue,sobrenomeValue,telefoneValue);
        cleanText();
    }

    function saveDadosPessoa(pessoa){
        const {nome, sobrenome, telefone} = pessoa;
        createP(nome, sobrenome, telefone);
}

}

saveDados();
