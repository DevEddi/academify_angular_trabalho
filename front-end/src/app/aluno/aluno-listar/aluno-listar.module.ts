import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoListarRoutingModule } from './aluno-listar-routing.module';
import { AlunoListarComponent } from './aluno-listar/aluno-listar.component';

import {MatTableModule} from '@angular/material/table'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AlunoListarComponent
  ],
  imports: [
    CommonModule,
    AlunoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AlunoListarModule { }
