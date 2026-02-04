import readline = require('readline-sync');
import { colors } from './src/util/Colors';


export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.magenta, colors.fg.blackstrong,
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
        
        console.log(colors.fg.whitestrong);
        opcao = readline.questionInt('Entre com a opção desejada: ');
        console.log(colors.reset);

        if (opcao === 9) {
            console.log(colors.fg.whitestrong,
                '\nCyber Bank - O seu Futuro Começa aqui!');
            sobre();
            console.log(colors.reset);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.blue,
                    '\n\nCriar Conta\n\n');

                console.log(colors.reset);
                break;

            case 2:
                console.log(colors.fg.blue,
                    '\n\nListar todas as Contas\n\n');

                console.log(colors.reset);
                break;

            case 3:
                console.log(colors.fg.blue,
                    '\n\nConsultar dados da Conta - por número\n\n');

                console.log(colors.reset);
                break;

            case 4:
                console.log(colors.fg.blue,
                    '\n\nAtualizar dados da Conta\n\n');

                console.log(colors.reset);
                break;

            case 5:
                console.log(colors.fg.blue,
                    '\n\nApagar uma Conta\n\n');

                console.log(colors.reset);
                break;

            case 6:
                console.log(colors.fg.blue,
                    '\n\nSaque\n\n');

                console.log(colors.reset);
                break;

            case 7:
                console.log(colors.fg.blue,
                    '\n\nDepósito\n\n');

                console.log(colors.reset);
                break;

            case 8:
                console.log(colors.fg.blue,
                    '\n\nTranferência entre Contas\n\n');

                console.log(colors.reset);
                break;

            default:
                console.log(colors.fg.red,
                    '\nOpção inválida!\n');

                console.log(colors.reset);
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

main();