// fase 01 investigar ou lutar?
function escolha() {
    let retornoFase1 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase1 == 1) {
        alert("seguir de fase");
        location.assign("../personagens/salem2.html");
    } else if (retornoFase1 == 2) {
        alert("Salem decide enfrentar os humanos mas foi pega numa enrrascada! :(");
        location.assign("../index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha();
    }
}
