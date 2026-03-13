import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  regraMinimoCaractere: Boolean = false;
  regraMaximoCaractere: Boolean = false;
  regraLetraMaiuscula: Boolean = false;
  regraCaractereEspecial: Boolean = false;
  regraNumeroLetras: Boolean = false;

  validarSenha(senha:string):void{
    //regra da regex
    const rxMin8 = /^.{8,}$/;
    const rxMax16 = /^.{0,16}$/;
    const rxmMaiuscula = /[A-Z]/;
    const rxEspecial = /[^a-zA-Z0-9]/;
    const rxNumero =/\d/;
    const rxLetra =/[A-Za-z]/;

    this.regraMinimoCaractere = rxMin8.test(senha);
    this.regraMaximoCaractere = rxMax16.test(senha);
    this.regraLetraMaiuscula = rxMax16.test(senha);
    this.regraCaractereEspecial = rxMax16.test(senha);
    this.regraNumeroLetras = rxNumero.test(senha) && rxLetra.test(senha);

  }

}
