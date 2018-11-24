import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-inscritos',
  templateUrl: './listar-inscritos.component.html',
  styleUrls: ['./listar-inscritos.component.css']
})
export class ListarInscritosComponent implements OnInit {
  inscritos = [];
  inscrito = null;
  nome = null;
  email = null;
  constructor() { }

  ngOnInit() {
    this.inscritos = JSON.parse(localStorage.getItem('inscritos'));
  }

}
