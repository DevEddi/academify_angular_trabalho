import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListarComponent } from './aluno-listar/aluno-listar.component';

const routes: Routes = [
  {path:"", component: AlunoListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoListarRoutingModule { }
