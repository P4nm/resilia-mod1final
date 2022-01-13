// fase 3 ir direto ou armadilha?
function escolha3() {
    let retornoFase3 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase3 == 1) {
        alert("Nevasca coloca uma armadilha mas é pega por fofoqueiros que denunciam ela");
        location.assign("../index.html");
    } else if (retornoFase3 == 2) {
        alert("Nevasca abre a porta que da acesso ao portal e liberta Morfesa");
        location.assign("../vitoria/venceu.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha3();
    }
}