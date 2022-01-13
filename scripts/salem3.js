// fase 03 tigre ou motoca?
function escolha3() {
    let retornoFase3 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase3 == 1) {
        alert("O tigre está cansado :(");
        location.assign("../index.html");
    } else if (retornoFase3 == 2) {

        alert("Salem chega e junto de seus irmãos enfrenta uma batalha e liberta Morfesa!! Parabéns!");
        location.assign("../vitoria/venceu.html");

    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha3();
    }
}