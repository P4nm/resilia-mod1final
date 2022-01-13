// fase 02 banana ou salmao?
function escolha2() {
    let retornoFase2 = prompt("Você escolhe opção 1 ou opção 2?" );

    if (retornoFase2 ==1) {
        alert("Eca! Banana! D:");
        location.assign("../index.html");
    } else if (retornoFase2 == 2) {
        alert("seguir de fase");
        location.assign("../personagens/nevasta3.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha2();
    }
}