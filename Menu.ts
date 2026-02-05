import { colors } from './src/util/Colors';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

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