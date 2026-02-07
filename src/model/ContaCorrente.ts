import { Conta } from './Conta';
import { colors } from '../util/Colors';
import { formatarMoeda } from '../util/Currency';

export class ContaCorrente extends Conta {

    // Atributos especificos de Conta Corrente
    private _limite: number;

    // Construtor chamando a Super Classe
    constructor(
        numero: number,
        agencia: number, 
        titular: string,
        tipo: number, 
        saldo: number, 
        limite: number)
        {
        // Super chama a super classe, nesse caso Conta
        super(numero, agencia, titular, tipo, saldo);
        this._limite = limite;
    }

    // Métodos Get e Set especificos da Classe ContaCorrente
    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    // Método sacar sobrescrito
    public sacar(valor: number): boolean {

            if ((valor > (this.saldo + this._limite)) || (this.saldo <= 0)) {
                console.log(colors.fg.red,'Saldo Insuficiente!', colors.reset);
                return false;
            }

            if (valor <= 0){
                console.log(colors.fg.red, 'Saque Inválido!', colors.reset);
                return false;
            }

            this.saldo -= valor;
            return true;
        }

    // Método visualizar sobrescrito (Polimorfismo)
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.whitestrong, `Limite da Conta: R$${formatarMoeda(this._limite)}`, colors.reset);
    }

}