const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // 2 - identifica o click no elemento da aba
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);

    })
})

function selecionarAba(aba){
        // 3 - Ao clicar em outra aba desmarca a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado");
            
        // 4 - Marcar a aba clicada como selecionado
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
        // 5 - Esconder o conteúdo da aba anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
    
        // 6 - Mostrar o conteúdo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    
        informacaoASerMostrada.classList.add("selecionado")
}