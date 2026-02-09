import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";
import { Input } from "../util/Input";

export class ContaController implements ContaRepository {

    private listaContas = new Array<Conta>();

    public numero: number = 0;

    // Métodos CRUD
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar();
        else 
            console.log(colors.fg.red, `\nA Conta ${numero} não foi encontrada!`, colors.reset);
    }

    procurarPeloTitular(titular: string): void {

        // Filtragem dos dados
        const buscaTitular = this.listaContas.filter( conta => 
            conta.titular.toUpperCase().includes(titular.toUpperCase()));

        // Listagem dos dados filtrados
        if (buscaTitular.length > 0) {
            buscaTitular.forEach(conta => conta.visualizar())
        } else {
            console.log(colors.fg.red, `Conta ${titular} não encontrada!`);
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\nA Conta ${conta.numero} foi cadastrada com sucesso!`, colors.reset);
    
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, 
                `\nA Conta número ${conta.numero} foi atualizada com sucesso!`, colors.reset);
        }else
            console.log(colors.fg.red, `\nA conta ${conta.numero} não foi encontrada!`, colors.reset);
    }

    deletar(numero: number): void {
        const buscarConta = this.buscarNoArray(numero);

        if (!buscarConta) {
            console.log(colors.fg.red, `\nConta ${numero} não foi encontrada!`, colors.reset);
            return;
        }

        console.log(colors.fg.yellowstrong,`Você está prestes a apagar a conta ${numero}`, colors.reset);
        const confirmar = Input.keyInSelect(['1- Sim', '2- Nao'], 'Deseja Realmente apagar sua conta? ', {cancel: false}); 

        if ((confirmar === 0) && (buscarConta !== null)){
            this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1);
            console.log(colors.fg.green, `\nA Conta ${numero} foi Deletada com Sucesso!`, colors.reset);
        } 

        if (confirmar === -1) 
            console.log(colors.fg.magenta, '\nOperação cancelada pelo usuário!');
        return;
    }

    // Métodos Báncarios
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log(colors.fg.green, `\nO Saque no valor de ${formatarMoeda(valor)} na Conta ${numero} foi realizado com sucesso`, colors.reset);
        } else 
            console.log(colors.fg.red, `Conta ${numero} não encontrada!`, colors.reset);
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log(colors.fg.green, `\nO Depósito no valor de ${formatarMoeda(valor)} na Conta ${numero} foi realizado com sucesso!`);
        } else 
            console.log(colors.fg.red, `Conta ${numero} não encontrada!`, colors.reset);
    
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        const buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino !== null) {
            if (buscaContaOrigem.sacar(valor) === true) {
                buscaContaDestino.depositar(valor);
                console.log(colors.fg.green, `\nA transferencia no valor de ${formatarMoeda(valor)} da Conta ${numeroOrigem} para a Conta ${numeroDestino}, foi realizado com sucesso!`, colors.reset);
            } else 
                console.log(colors.fg.red, 'Conta de Origem ou Destino não encontrada!', colors.reset);
        }
    }

    // Métodos Auxiliares
    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }   
        }         
        return null;
    } 
    
}