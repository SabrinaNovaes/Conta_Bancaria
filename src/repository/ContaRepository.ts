import { Conta } from "../model/Conta";

export interface ContaRepository {

    // Métodos do CRUD (CREAT, READ, UPDATE, DELETE)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(number: number): void;

    // Métodos Báncarios
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}
