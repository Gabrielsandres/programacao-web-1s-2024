let pessoa1 = {
    nome: "João",
    cpf: 123,
    endereco2: {
        nomeRua: "Nome da rua",
        bairro: "Nome do bairro",
        numero: 49
    }
}

let pessoa2 = { 
    nome: "Pedro",
    cpf: 124,
    endereco2: {
        nomeRua: "Nome da rua",
        bairro: "Nome do bairro",
        numero: 49

    }
}

console.log('Cadastro: ' + pessoa1.nome + ' ' + pessoa1.cpf + ' ' + pessoa1.endereco2.nomeRua);
console.log('Cadastro: ' + pessoa2.nome + ' ' + pessoa2.cpf + ' ' + pessoa2.endereco2.nomeRua + ' ' + pessoa2.endereco2.bairro);

const arr = [0, 3, 7, 9, 11, 'João']

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(i + ' - ' + arr[i])
    
}

let A = [[1, 2],[3, 4]]

console.log(A[0] + ' ' + A[1])
