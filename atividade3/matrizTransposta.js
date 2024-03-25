let A = [[1, 2], [3, 4], [5, 6]]


console.log("Matriz original")

for (let iLinha = 0; iLinha < A.length; iLinha++) {

    for (let iColuna = 0; iColuna < A[iLinha].length - 1; iColuna++) {

        console.log(A[iLinha][iColuna] + " " + A[iLinha][iColuna + 1]);

    }

}


function transporMatriz(A) {

    console.log("\nMatriz Transposta")

    for (let iColuna = 0; iColuna < A[0].length; iColuna++) {

        let linhaTransposta = "";

        for (let iLinha = 0; iLinha < A.length; iLinha++) {

            linhaTransposta += A[iLinha][iColuna] + " "

        }
        console.log(linhaTransposta);
    }
}

transporMatriz(A)



/*
1 2 - 0,0 - 0,1
3 4 - 1,0 - 1,1
5 6 - 2,0 - 2,1

1 3 5 - 0,0 - 1,0 - 2,0
2 4 6 - 0,1 - 1,1 - 2,1
*/

