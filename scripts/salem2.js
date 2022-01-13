// fase 02 casa de arvore ou lagarto?
function escolha2() {
    let retornoFase2 = prompt("Você escolhe opção 1 ou opção 2?" );

    if (retornoFase2 ==1) {
        alert("Salem sobe na casa da árvore e tudo desmorona DDD:");
        location.assign("../index.html");
    } else if (retornoFase2 == 2) {
        alert("seguir de fase");
        location.assign("../personagens/salem3.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha2();
    }
}