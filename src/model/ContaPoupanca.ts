import { Conta } from './Conta';
import { colors } from '../util/Colors';

export class ContaPoupanca extends Conta {

    private _dataAniversario: number;
    private _rendimento: number = 0.005;
    private _ultimoMesRendimento: number = -1;

	constructor(
        numero: number,
        agencia: number,
        titular: string,
        tipo: number,
        saldo: number,
        dataAniversario: number
    ) {
        super(numero, agencia, titular, tipo, saldo);
        this._dataAniversario = dataAniversario;
	}

    public get dataAniversario(): number {
		return this._dataAniversario;
    }

	public set dataAniversario(value: number) {
		this._dataAniversario = value;
	}

	public get rendimento(): number  {
		return this._rendimento;
	}

	public get ultimoMesRendimento(): number  {
		return this._ultimoMesRendimento;
	}

	public set rendimento(value: number ) {
		this._rendimento = value;
	}

	public set ultimoMesRendimento(value: number ) {
		this._ultimoMesRendimento = value;
	}

    // Método para rendimento
    public aplicarRendimento(): void {
    const hoje = new Date(); // Pega a data

    const diaHoje = hoje.getDate(); // Pega o dia
    const mesAtual = hoje.getMonth(); // Pega o mês

    // Compara se o dia hoje é a data de aniversario e o ultimo mes que rendeu é diferente do atual
    if (diaHoje === this._dataAniversario && this._ultimoMesRendimento !== mesAtual) {
        const valorRendimento = this.saldo * this._rendimento; // saldo * rendimento
        this.depositar(valorRendimento); // Deposita o valor do rendimento na conta
        this._ultimoMesRendimento = mesAtual; // Guarda o mês que o renidmento foi aplicado

        console.log(colors.fg.green, 'Rendimento Aplicado', colors.reset);
    }
}

    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.whitestrong,`Data de Aniversário: ${this._dataAniversario}`, colors.reset);
    }
}
