import { Tarefa } from './../shared/tarefas.model';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.sass']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
  if (this.formTarefa.form.valid) {
    this.tarefaService.cadastrar(this.tarefa);
    this.router.navigate(['/tarefas']);
    }
  }

}
