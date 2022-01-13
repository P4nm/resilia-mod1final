// fase 01 fenda ou caminho das pedras?
function escolha() {
    let retornoFase1 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase1 == 1) {
        alert("AAAAAAAAAAAAA Lico ficou cego");
        location.assign("../index.html");
    } else if (retornoFase1 == 2) {
        alert("seguir de fase");
        location.assign("../personagens/lico2.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha();
    }

}
