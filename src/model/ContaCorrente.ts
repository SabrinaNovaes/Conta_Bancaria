import { Conta } from './Conta';
import { colors } from '../util/Colors';

export class ContaCorrente extends Conta {

    // Atributos especificos de Conta Corrente
    private _limite: number;


    constructor(
        numero: number,
        agencia: number, 
        titular: string,
        tipo: number, 
        saldo: number, 
        limite: number) {

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

            if ((valor > (this.saldo + this._limite)) || (valor <= 0) || (this.saldo <= 0)) {
                console.log(colors.fg.red,'Saldo Insuficiente!', colors.reset);
                return false;
            }

            this.saldo -= valor;
            return true;
        }

    // Método visualizar sobrescrito (Polimorfismo)
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.whitestrong, `Limite da Conta: R$${this.limite.toFixed(2)}`, colors.reset);
    }

}