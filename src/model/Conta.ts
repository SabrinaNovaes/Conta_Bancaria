import { colors } from '../util/Colors';

// abstract deixa a classe abstrata. não pode ser instanciada
export abstract class Conta {
    // Atributos da Classe // readonly não deixa alterar o valor, somente leitura
    private readonly _numero: number; // _ boas práticas para atributos privados
    private _agencia: number;
    private _titular: string;
    private _tipo: number;
    private _saldo: number;

    // Metodo Construtor 
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._titular = titular;
		this._tipo = tipo;
		this._saldo = saldo;
	}

	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get titular(): string {
		return this._titular;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get saldo(): number {
		return this._saldo;
	}

	//public set numero(value: number) {
	//	this._numero = value;
	//}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    // Metodos Auxiliares
    public sacar(valor: number): boolean {

        if ((valor > this.saldo) || (valor <= 0) || (this.saldo <= 0)) {
            console.log(colors.fg.red, 'Saldo Insuficiente!', colors.reset);
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void {

        if (valor <= 0 )
            console.log(colors.fg.red, 'Não possui valor para Depositar!', colors.reset);
        else
            this.saldo += valor;
    }

    public visualizar(): void {

        let tipo: string;

        switch(this._tipo) {
            case 1: 
            tipo = "Conta Corrente";
            break;

            case 2: 
                tipo = "Conta Poupança";
            break;

            default: 
                tipo = "Tipo inválido";
        }

        console.log(colors.fg.magenta,
            '\n----------------------------------------------------------');
        console.log('                      Dados da Conta                      ');
        console.log('----------------------------------------------------------', colors.reset);
        console.log(colors.fg.whitestrong,
            `Número da conta: ${this.numero}`);
        console.log(`Número da Agência: ${this.agencia}`);
        console.log(`Nome do titular: ${this.titular}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Saldo da conta: R$${this._saldo.toFixed(2)}`, colors.reset);
    }

}

