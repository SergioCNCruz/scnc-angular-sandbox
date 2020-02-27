 { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: string;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService ) { }

  ngOnInit() {
    this.limpar()
  }

  limpar(): void {
    this.numero1 = '0',
    this.numero2 = null,
    this.resultado = null,
    this.operacao = null
  }

  adicionarNumero(numero: string): void {
    if (this.operacao == null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual, numConcat): string {
    if (numAtual === 0 || numAtual === null) {
      numAtual = '';
    }
    if (numConcat === '.' || numAtual === '') {
      return '0.';
    }
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual; 
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        this.numero1,
        this.numero2,
        this.operacao
      )
    }
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1
  }

}