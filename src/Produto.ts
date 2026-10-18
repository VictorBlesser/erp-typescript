export {};

// Categoria dos produtos
type Categoria = "MEDICAMENTO" | "MATERIAL" | "OPME";

class Produto {

    constructor(
        public readonly codigo: string,
        public nome: string,
        public categoria: Categoria,
        public precoUnitario: number,
        private estoque: number
    ) {}

    // Consultar estoque
    consultarEstoque(): number {
        return this.estoque;
    }

    // Calcular valor da venda
    calcularValorVenda(quantidadeVenda: number): number {
        return this.precoUnitario * quantidadeVenda;
    }

    reporEstoque(quantidade: number): string {

        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
           return "Valor inválido";
            
        }
         this.estoque = this.estoque + quantidade;
        return `Estoque reposto! ${this.estoque}`;


    }

    // Realizar venda
    vender(quantidadeVenda: number): string {

        // Validar quantidade
        if (!Number.isInteger(quantidadeVenda) || quantidadeVenda <= 0) {
            return "Quantidade inválida!";
        }

        // Verificar disponibilidade
        if (quantidadeVenda > this.estoque) {
            return "Pedido maior que o estoque disponível!";
        }

        // Calcular valor
        const valorVenda: number = this.calcularValorVenda(quantidadeVenda);

        // Atualizar estoque
        this.estoque -= quantidadeVenda;

        // Retornar resultado
        return `Venda realizada! Valor: R$ ${valorVenda.toFixed(2)}.
Estoque restante: ${this.estoque}`;
    }
}

// Criando produto
const soro = new Produto(
    "MED001",
    "Soro Fisiológico 0,9% 500ml",
    "MEDICAMENTO",
    8.50,
    80
);

// Testando
console.log("Estoque inicial:", soro.consultarEstoque());

console.log(soro.vender(25));

console.log("Estoque final:", soro.consultarEstoque());

console.log(soro.reporEstoque(100));

console.log(soro.consultarEstoque());

console.log(soro.reporEstoque(-10));