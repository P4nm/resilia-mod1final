// fase 3 lutar ou chamar suas irmãs?
function escolha3() {
    let retornoFase3 = prompt("Você escolhe opção 1 ou opção 2?");

    if (retornoFase3 == 1) {
        alert("Lico junto com Nevasta e Salém, derrotam os 150 soldados que tinham depois do vigia e resgata Morfesa. Parabéns!");
        location.assign("../vitoria/venceu.html");
    } else if (retornoFase3 == 2) {
        alert("game over");
        location.assign("../index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha3();
    }
}