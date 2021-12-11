import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCadastrarEditarComponent } from './aluno-cadastrar-editar/aluno-cadastrar-editar.component';
import { AlunoResolverService } from './aluno-resolver.service';

const routes: Routes = [
  {
    path:"" ,
    component: AlunoCadastrarEditarComponent,
    resolve:{
      aluno: AlunoResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoCadastrarEditarRoutingModule { }
