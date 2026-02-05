import { colors } from './src/util/Colors';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    // Testes da classe ContaCorrente
    const cc1 = new ContaCorrente(2, 5678, "Bianca", 1, 200000.00, 2000.00);

    cc1.visualizar();

    // Teste do Método sacar - conta corrente
    console.log('Sacar R$1000.00', cc1.sacar(1000.00));
    console.log('Sacar R$200000.00', cc1.sacar(200000.00));
    console.log('Sacar R$2.00', cc1.sacar(2.00));

    // Teste depositar
    console.log('Depositar R$500.00', cc1.depositar(500.00));

    cc1.visualizar();

    // Teste Conta Poupança
    const hoje = new Date().getDate();
    const cp1 = new ContaPoupanca(2, 3456, "Coco", 2, 0, hoje);

    cp1.visualizar();

    // Teste Sacar
    console.log('Sacar R$100,00', cp1.sacar(100.00));
    console.log('Sacar R$2,00', cp1.sacar(2.00));

    // Teste Depositar
    console.log('Depositar R$20000.00', cp1.depositar(20000.00));

    // Teste rendimento
    console.log('Sua conta rendeu:', cp1.aplicarRendimento());
    cp1.visualizar();

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
        console.log('              | 9 - sair                    |                                     |           ');
        console.log('              |_____________________________|_____________________________________|           ');
        console.log('  --------------------------------------------------------------------------------------------');
        console.log('                                                                                             ',
        colors.reset);
        
        console.log(colors.fg.whitestrong, '\nEntre com a opção desejada: ');
        opcao = Input.questionInt('');
        console.log(colors.reset);

        if (opcao === 9) {
            console.log(colors.fg.whitestrong,
                '\nCyber Bank - O seu Futuro Começa aqui!', 
                colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.blue,
                    '\n\nCriar Conta\n\n');
                    keyPress();
                break;

            case 2:
                console.log(colors.fg.blue,
                    '\n\nListar todas as Contas\n\n');
                    keyPress();
                break;

            case 3:
                console.log(colors.fg.blue,
                    '\n\nConsultar dados da Conta - por número\n\n');
                    keyPress();
                break;

            case 4:
                console.log(colors.fg.blue,
                    '\n\nAtualizar dados da Conta\n\n');
                    keyPress();
                break;

            case 5:
                console.log(colors.fg.blue,
                    '\n\nApagar uma Conta\n\n');
                    keyPress();
            break;

            case 6:
                console.log(colors.fg.blue,
                    '\n\nSaque\n\n');
                    keyPress();
                break;

            case 7:
                console.log(colors.fg.blue,
                    '\n\nDepósito\n\n');
                    keyPress();
                break;

            case 8:
                console.log(colors.fg.blue,
                    '\n\nTranferência entre Contas\n\n', 
                    colors.reset);
                    keyPress();
                break;

            default:
                console.log(colors.fg.red,
                    '\nOpção inválida!\n', colors.reset);
                    keyPress();
        }
    }
}

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
    console.log(colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();