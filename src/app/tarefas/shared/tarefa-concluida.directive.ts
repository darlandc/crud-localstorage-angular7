import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({
// tslint:disable-next-line:directive-selector
selector: '[tarefaConcluida]'
})

export class TarefaConcluidaDirective {

  @Input() TarefaConcluida: boolean;

  constructor( private el: ElementRef) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      if (this.TarefaConcluida) {
        this.el.nativeElement.style.textDecoration = 'line-through';
      }
    }
  }
