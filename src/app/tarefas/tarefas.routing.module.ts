import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { Routes } from '@angular/router';

export const TarefaRoutes: Routes = [
    {
      path: 'tarefas',
      redirectTo: 'tarefas/listar'
    },
    {
      path: 'tarefas/listar',
      component: ListarComponent
    },
    {
      path: 'tarefas/cadastrar',
      component: CadastrarComponent
    },
    {
      path: 'tarefas/editar/:id',
      component: EditarComponent
    },
];
