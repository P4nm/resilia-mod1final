// fase 02 gato ou cachorro?
function escolha2() {
    let retornoFase2 = prompt("Você escolhe opção 1 ou opção 2?" );

    if (retornoFase2 ==1) {
        alert("Ohhhh, no!! Lico tem alergia a gato!! ATCHIM!");
        location.assign("../index.html");
    } else if (retornoFase2 == 2) {
        alert("seguir de fase");
        location.assign("../personagens/lico3.html");
    } else {
        alert("Valor inválido, digite 1 ou 2");
        escolha2();
    }
}