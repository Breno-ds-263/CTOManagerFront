import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModeloService } from '../../services/modelo.service';
import { Modelo } from '../../models/modelo';

@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modelos.component.html'
})
export class ModelosComponent implements OnInit {

  modelos: Modelo[] = [];

  novoModelo: Modelo = {
    nome: '',
    fabricante: ''
  };

  constructor(private service: ModeloService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe(data => {
      this.modelos = data;
    });
  }

  salvar() {
    if (!this.novoModelo.nome || !this.novoModelo.fabricante) return;

    this.service.salvar(this.novoModelo).subscribe(() => {
      this.novoModelo = { nome: '', fabricante: '' };
      this.carregar();
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => {
      this.carregar();
    });
  }
}