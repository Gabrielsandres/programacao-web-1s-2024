





function transporMatriz(A) {

    console.log("Matriz original")

    for (let iLinha = 0; iLinha < A.length; iLinha++) {

        for (let iColuna = 0; iColuna < A[iLinha].length - 1; iColuna++) {

            console.log(A[iLinha][iColuna] + " " + A[iLinha][iColuna + 1]);

        }

    }

    console.log("\nMatriz Transposta")

    for (let iColuna = 0; iColuna < A[0].length; iColuna++) {

        let linhaTransposta = "";

        for (let iLinha = 0; iLinha < A.length; iLinha++) {

            linhaTransposta += A[iLinha][iColuna] + " "

        }
        console.log(linhaTransposta);
    }
}

module.exports = {
    transporMatriz
}




