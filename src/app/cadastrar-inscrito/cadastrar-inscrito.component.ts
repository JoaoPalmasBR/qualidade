import { Component, OnInit } from '@angular/core';
import {Inscrito} from '../inscrito';

@Component({
  selector: 'app-cadastrar-inscrito',
  templateUrl: './cadastrar-inscrito.component.html',
  styleUrls: ['./cadastrar-inscrito.component.css']
})
export class CadastrarInscritoComponent implements OnInit {
  inscritos = [];
  inscrito = null;
  nome = null;
  email = null;
  cadastrar() {
    this.inscrito = new Inscrito(this.nome, this.email);
    this.inscritos.push(this.inscrito);
    this.nome = null;
    this.email = null;
    this.inscrito = null;
    localStorage.setItem('inscritos', JSON.stringify(this.inscritos));
  }
  constructor() { }

  ngOnInit() {
    this.inscritos = JSON.parse(localStorage.getItem('inscritos'));
  }

}
