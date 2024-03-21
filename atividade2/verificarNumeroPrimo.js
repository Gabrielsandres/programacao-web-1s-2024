/*
No seu repositório de atividades no github, crie uma pasta atividade2.

Dentro dessa pasta, crie o arquivo verificarNumeroPrimo.js;

Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);

A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

No mesmo arquivo, faça a chamada da função para os seguintes casos de teste:

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false
*/


function verificarNumeroPrimo(n) {

    let cont = 0;
    let resultado = 0;
    let bool = true;

    for (let i = 1; i <= n; i++) {

        resultado = n % i;

        if (resultado == 0) {
            cont++
        }

        if (cont > 2) {
            bool = false;
            break
        }
    }

    console.log(bool)

}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false
verificarNumeroPrimo(17)
verificarNumeroPrimo(9)

