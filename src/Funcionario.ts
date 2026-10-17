class Funcionario {
     private nome: string;
     private salario: number;
     
    constructor(nome: string, salario: number) {
         this.nome = nome;
         this.salario = salario;
    }
     public calcularBonus(percentual: number) {
        return this.salario * percentual / 100;
            
     }
     public consultarNome() {
        return this.nome;
     }  
}

// Criando um funcionário
const funcionario = new Funcionario("João", 3000);

// Executando os métodos
console.log(funcionario.consultarNome());

console.log(funcionario.calcularBonus(10));