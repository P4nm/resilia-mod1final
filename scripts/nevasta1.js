// fase 01 cachoeira ou montanha?
function escolha() {
    let retornoFase1 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase1 == 1) {
        alert("seguir de fase");
        location.assign("../personagens/nevasta2.html");
    } else if (retornoFase1 == 2) {
        alert("Nevasca tem medo de altura :(");
        location.assign("../index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha();
    }

}
