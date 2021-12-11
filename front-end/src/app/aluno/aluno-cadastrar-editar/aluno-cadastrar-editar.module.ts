import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoCadastrarEditarRoutingModule } from './aluno-cadastrar-editar-routing.module';
import { AlunoCadastrarEditarComponent } from './aluno-cadastrar-editar/aluno-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AlunoCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    AlunoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AlunoCadastrarEditarModule { }
