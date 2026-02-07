import { colors } from './src/util/Colors';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaController } from './src/controller/ContaController';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { formatarMoeda } from './src/util/Currency';

// Criar um Objeto Global da Classe ContaController
const contas = new ContaController();

// Criar um array contendo os tipos de contas
const tipoContas = ['Conta Corrente', 'Conta Poupança'];

export function main() {

    let opcao: number;

    criarContasTeste();

    while (true) {

        console.log(colors.fg.magenta,
            '--------------------------------------------------------------------------------------------');
        console.log('                                         Cyber Bank                                           ');
        console.log('  --------------------------------------------------------------------------------------------');
        console.log('                                                                                              ');
        console.log('  -------------------------------------- Operações -------------------------------------------');
        console.log('               ___________________________________________________________________            ');
        console.log('              | 1 - Criar Conta             | 2 - Listar todas as Contas          |           ');
        console.log('              | 3 - Buscar Conta por Número | 4 - Atualizar Dados da conta        |           ');
        console.log('              | 5 - Apagar Conta            | 6 - Saque                           |           ');
        console.log('              | 7 - Depositar               | 8 - Transferir Valores entre Contas |           ');
        console.log('              | 0 - Sair                    | 9 -                                 |           ');
        console.log('              |_____________________________|_____________________________________|           ');
        console.log('  --------------------------------------------------------------------------------------------');
        console.log('                                                                                             ',
            colors.reset);

        console.log(colors.fg.whitestrong, '\nEntre com a opção desejada: ');
        opcao = Input.questionInt('');
        console.log(colors.reset);

        if (opcao === 0) {
            console.log(colors.fg.magenta, '\nCyber Bank - O seu Futuro Começa aqui!', colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magenta, '\n\nCriar Conta\n\n', colors.reset);

                criarConta();

                keyPress();
            break;

            case 2:
                console.log(colors.fg.magenta, '\n\nListar todas as Contas\n\n', colors.reset);

                listarTodasContas();

                keyPress();
            break;

            case 3:
                console.log(colors.fg.magenta, '\n\nConsultar dados da Conta - por número\n\n', colors.reset);
                
                buscarContaPorNumero();

                keyPress();
            break;

            case 4:
                console.log(colors.fg.magenta, '\n\nAtualizar dados da Conta\n\n', colors.reset);
                
                atualizarConta();

                keyPress();
            break;

            case 5:
                console.log(colors.fg.magenta, '\n\nApagar uma Conta\n\n', colors.reset);
                
                deletarConta();

                keyPress();
            break;

            case 6:
                console.log(colors.fg.magenta, '\n\nSaque\n\n', colors.reset);

                keyPress();
            break;

            case 7:
                console.log(colors.fg.magenta, '\n\nDepósito\n\n', colors.reset);
        
                keyPress();
            break;

            case 8:
                console.log(colors.fg.magenta, '\n\nTranferência entre Contas\n\n', colors.reset);

                keyPress();
            break;

            default:
                console.log(colors.fg.red, '\nOpção inválida!\n', colors.reset);

                keyPress();
        }
    }
}

// Implementação do método cadastro

/*Opcao 1: Criar uma nova Conta */
function criarConta() {
    console.log('Digite o número da Agência: ');
    const agencia = Input.questionInt('');

    console.log('Digite o nome do titular: ');
    const titular = Input.question('');

    console.log('Selecione o tipo da conta: ');
    const tipo = Input.keyInSelect(tipoContas, '', { cancel: false }) + 1;

    console.log('Digite o saldo da conta: ');
    const saldo = Input.questionFloat('');

    switch (tipo) {

        case 1: // Cria um objeto da classe Conta Corrente
            console.log("Digite o limite da conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(
                contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
        break;

        case 2: // Cria um objeto da classe Conta Poupança
            console.log("Digite o dia do aniversário da conta: ");
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(
                contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
        break;

        default:
            console.log(colors.fg.red, 'Digite uma opção válida!', colors.reset);
    }
} 

/* Opção 2: Lista todas as contas cadastradas  */
function listarTodasContas(): void{
    contas.listarTodas();
}

/*Opcao 3: Procurar uma Conta pelo numero */
function buscarContaPorNumero(): void {

    console.log('Digite o número da conta: ');
    const numero = Input.questionInt('');

    contas.procurarPorNumero(numero);
}

/* Opção 4: Atualizar Conta */
function atualizarConta(): void {
    console.log('Digite o número da conta: ');
    const numero = Input.questionInt('');

    // Verifica se a conta existe
    const conta = contas.buscarNoArray(numero);

    if (conta !== null) {

        // Guarda os valores atuais da conta
        let agencia = conta.agencia;
        let titular = conta.titular;
        const tipo = conta.tipo;
        let saldo = conta.saldo;

        // Atualização da agencia
        console.log(`\nAgência atual: ${agencia}`);
        console.log("Digite o novo número da agência: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        agencia = Input.questionInt("", { defaultInput: agencia });

        // Atualização da Titular
        console.log(`\nTitular atual: ${titular}`);
        console.log("Digite o novo nome do titular: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        titular = Input.question("", { defaultInput: titular });

        // Atualização do Saldo
        console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
        console.log("Digite o valor do novo saldo: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        saldo = Input.questionFloat("", { defaultInput: saldo });

        // Atualização do tipo 
        switch (tipo) {

            case 1: // Conta Corrente
                let limite: number = (conta as ContaCorrente).limite;

                console.log(`\nLimite atual: ${formatarMoeda(limite)}`);
                console.log("Digite o valor do novo limite: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                limite = Input.questionFloat("", { defaultInput: limite });

                contas.atualizar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
            break;

            case 2: // Conta Poupança
                let aniversario: number = (conta as ContaPoupanca).dataAniversario;

                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia do aniversário: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                aniversario = Input.questionInt("", { defaultInput: aniversario });

                contas.atualizar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
            break;

        }
    } else {
        console.log(colors.fg.red, `A conta ${numero} não existe!`, colors.reset);
    }
}

/* Opcao 5: Deletar conta Por número */
function deletarConta(): void {

    console.log('Digite o número da conta: ');
    const numero = Input.questionInt('');
    contas.deletar(numero);
}

// Retorna informações do criador
function sobre(): void {
    console.log(colors.bg.black, colors.fg.magenta,
        '\n   ---------------------------------------------------');
    console.log('   |            Projeto Desenvolvido por:            |  ');
    console.log('   |  Sabrina Novaes - sabrinanovaes_96@hotmail.com  |  ');
    console.log('   |           github.com/SabrinaNovaes              |  ');
    console.log('   ---------------------------------------------------\n',
        colors.reset);
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(colors.reset, "\nPressione enter para continuar...");
    Input.prompt();
}

// Método criar contas
function criarContasTeste(): void {

    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1, 1000.00, 100.00));

    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));

}

main();