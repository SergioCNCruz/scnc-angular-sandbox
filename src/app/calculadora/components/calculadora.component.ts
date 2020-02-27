import { Component, OnInit } from '@angular/core';
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

  concatenarNumero(numAtuarl, numConcat): string {
    return numAtuarl + numConcat
  }

}