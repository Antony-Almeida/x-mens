//Add personagens em uma lista
const personagens = document.querySelectorAll('.personagem');

//Add a classe selecionado no personagem que o usuario passar o cursor em cima
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        //add a classe ao personagem q o mouse passar
        personagem.classList.add('selecionado')

        //trocar a imagem, nome e descrição do personagem grande

        alterarImagemDoPersonagemSelecionado(personagem);

        alterarNomeDoPersonagemSelecionado(personagem);

        alterarDescricaoDoPersonagemSelecionado(personagem);
    });
})

function alterarDescricaoDoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
