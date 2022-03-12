function saveDados(){
    const form = document.querySelector('form');
    const inputNome = document.querySelector('.nome');
    const inputSobrenome = document.querySelector('.sobrenome');
    const inputNumero = document.querySelector('.numero');
    const divRelatorio = document.querySelector('.relatorio');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        getDados();
    });

    document.addEventListener('click', function (e){
        const el = e.target;
        if(el.classList.contains('delete')){
            el.parentElement.remove();
            saveDadosPessoa();
        }
    });

    function getDados(){
        const nomeValue = inputNome.value;
        const sobrenomeValue = inputSobrenome.value;
        const telefoneValue = inputNumero.value;
        if (nomeValue.length < 3 ) return alert('preencha o nome');
        if (sobrenomeValue.length < 3) return alert('preencha o sobrenome');
        if(typeof telefoneValue != 'number' && telefoneValue.length < 9 ) return alert('verifique o telefone')
        
        const pessoaMensagem = `Nome: ${nomeValue}  -  Sobrenome: ${sobrenomeValue}  -  Telefone: ${telefoneValue}`; 
        console.log(pessoaMensagem);
        createPessoa(pessoaMensagem);
        cleanText();
    }
    
    // allPessoas.push(pessoa);
    function saveDadosPessoa(){
        const listaParagPe = divRelatorio.querySelectorAll('.info');
        const allPessoas = [];
        
        for(let cadaPessoa of listaParagPe){
            let pessoaText = cadaPessoa.innerText;
            console.log(pessoaText);
            pessoaText = pessoaText.replace('Deletar', '').trim();
            console.log(pessoaText);
            allPessoas.push(pessoaText);
        }

            const pessoasJson = JSON.stringify(allPessoas); //convertendo para json
            localStorage.setItem('pessoas', pessoasJson);
            console.log(pessoasJson);
    }
        
    

    function  lerDados(){
        const pessoas = localStorage.getItem('pessoas');
        const listaPessoas = JSON.parse(pessoas);
        console.log(listaPessoas);
        for(let e of listaPessoas){
            createPessoa(e);
        }
    }
    lerDados();

    function cleanText(){
        inputNome.value = '';
        inputSobrenome.value = '';
        inputNumero.value = '';
        inputNome.focus();
    }
    
    function createPessoa(message){
        const p = createP(message);
        divRelatorio.appendChild(p);
        const btn = createDeleteBtn(p);
        p.appendChild(btn)
        saveDadosPessoa();
    }


    function createP(message){
        const p = document.createElement('p');
        p.setAttribute('class', 'info');
        p.innerText = message;
        return p;
    }

    function createDeleteBtn(p){
        p.innerText += ' ';
        const btn = document.createElement('button');
        btn.setAttribute('class', 'delete');
        btn.innerText = 'Deletar';
        return btn;
    }
    
}

saveDados();
