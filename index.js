
// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    nome: "Pamela",
    idade: 30,
    time: "São Paulo"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.signo= "Peixes";
console.log(sobreMim);
// Remova uma propriedade desse objeto.
delete sobreMim.idade
console.log(sobreMim);
//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro=[
    { 
        Nome: "Pamela",
        Idade: '30',
        Telefone:'99999999',
        Amigos:["Bianca","Sarah","Fernanda","Narita,"]
    },
    {

        Nome: "Carol",
        Idade: '10',
        Telefone:'99999998',
        Amigos:["Marcio", "Kelly", "Amanda", "Priscila,"]
    },
    {
        Nome: "Isadora",
        Idade: '15',
        Telefone:'9999988',
        Amigos:["Isabel", "Luisa", "Heloisa", "Larissa,"]
    },
    {
        Nome: "Evelyn",
        Idade: '35',
        Telefone:'99918998',
        Amigos:["Simone", "Rita", "Franciele", "Oswaldo",]
    },  
    {
        Nome: "Iris",
        Idade: '40',
        Telefone:'93299998',
        Amigos:["Maria", "Emanuelly","Eliane", "Laura",]
    },
];
// Mostre no console o nome de um amigo de cada lista
console.log(cadastro[0].Amigos[1]);
console.log(cadastro[1].Amigos[2]);
console.log(cadastro[2].Amigos[3]);
console.log(cadastro[3].Amigos[3]);
console.log(cadastro[4].Amigos[1]);
