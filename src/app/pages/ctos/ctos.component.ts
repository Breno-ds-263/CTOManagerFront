import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CTO } from '../../models/cto';
import { Modelo } from '../../models/modelo';
import { CtoService } from '../../services/cto.service';
import { ModeloService } from '../../services/modelo.service';

@Component({
  selector: 'app-ctos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ctos.component.html'
})
export class CTOsComponent implements OnInit {

  ctos: CTO[] = [];
  modelos: Modelo[] = [];
  mensagemErro: string | null = null;

  novoCTO: CTO = {
    nome: '',
    latitude: 0,
    longitude: 0,
    modelo: { id: 0, nome: '', fabricante: '' }
  };

  constructor(
    private ctoService: CtoService,
    private modeloService: ModeloService
  ) {}

  ngOnInit(): void {
    this.carregarCTOs();
    this.carregarModelos();
  }

  // Carrega todas as CTOs
  carregarCTOs() {
    this.ctoService.listar().subscribe((data: CTO[]) => {
      this.ctos = data;
    });
  }

  // Carrega todos os modelos
  carregarModelos() {
    this.modeloService.listar().subscribe((data: Modelo[]) => {
      this.modelos = data;
    });
  }

  // Salva uma nova CTO
  salvar() {
    if (!this.novoCTO.nome || !this.novoCTO.modelo.id) {
      return;
    }

    this.ctoService.salvar(this.novoCTO).subscribe(() => {
      // Limpa o formulário
      this.novoCTO = {
        nome: '',
        latitude: 0,
        longitude: 0,
        modelo: { id: 0, nome: '', fabricante: '' }
      };
      this.carregarCTOs();
    });
  }

  // Exclui uma CTO
  excluir(id: number) {
  this.ctoService.excluir(id).subscribe({
    next: () => {
      this.carregarCTOs();
      this.mensagemErro = null; // limpa erro se deu certo
    },
    error: (err) => {
      // Se o backend retornou mensagem, usamos ela
      if (err.error) {
        this.mensagemErro = err.error;
      } else {
        this.mensagemErro = "Não foi possível excluir o CTO.";
      }
    }
  });
}
}