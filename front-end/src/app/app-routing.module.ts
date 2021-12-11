import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path: "alunos",
    loadChildren: () => import('./aluno/aluno-listar/aluno-listar.module').then(modulo => modulo.AlunoListarModule)
  },
  {
    path: "alunos/cadastrar",
    loadChildren: () => import('./aluno/aluno-cadastrar-editar/aluno-cadastrar-editar.module').then(modulo => modulo.AlunoCadastrarEditarModule)
  },
  {
    path: "alunos/editar:id",
    loadChildren: () => import('./aluno/aluno-cadastrar-editar/aluno-cadastrar-editar.module').then(modulo => modulo.AlunoCadastrarEditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
