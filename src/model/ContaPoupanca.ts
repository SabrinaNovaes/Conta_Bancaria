import { Conta } from './Conta';
import { colors } from '../util/Colors';

//implementar
export class ContaPoupanca extends Conta {

    // Atributos Especificos da Conta Poupança
    private _dataAniversario: number;


	constructor(
        numero: number,
        agencia: number,
        titular: string,
        tipo: number,
        saldo: number,
        dataAniversario: number) {

            //Super chamar a classe, nesse caso a Conta
            super(numero, agencia, titular, tipo, saldo);
            this._dataAniversario = dataAniversario;
	}

    // Métodos Get e set especificos da Classe ContaPoupanca
	public get dataAniversario(): number {
		return this._dataAniversario;
    }

	public set dataAniversario(value: number) {
		this._dataAniversario = value;
	}

    // Método visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.whitestrong, `Data de Aniversário: ${this._dataAniversario}`, colors.reset);
    }

}