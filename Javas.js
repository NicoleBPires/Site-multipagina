
const ABAS = document.querySelectorAll('.btn');
const CONTENTS = document.querySelectorAll('.content');

ABAS.forEach(botao => {
    botao.addEventListener('click', () => {

        // Remove a seleção dos botões
        ABAS.forEach(btn => {
            btn.classList.remove('active');
        });

        // Esconde todos os conteúdos
        CONTENTS.forEach(content => {
            content.classList.remove('show');
        });

        // Ativa o botão clicado
        botao.classList.add('active');

        // Identifica o conteúdo correspondente
        const contentId = botao.getAttribute('content-id');

        const conteudoSelecionado = document.getElementById(contentId);

        // Exibe o conteúdo selecionado
        if (conteudoSelecionado) {
            conteudoSelecionado.classList.add('show');
        }

    });
});
