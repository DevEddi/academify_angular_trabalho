import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../../aluno.model';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-aluno-listar',
  templateUrl: './aluno-listar.component.html',
  styleUrls: ['./aluno-listar.component.scss']
})
export class AlunoListarComponent implements OnInit {

  alunos$!: Observable<Aluno[]>;
  colunasTabela = ['id','matricula','nome','nascimento','dataHoraCadastro'];

  constructor(private alunoService : AlunoService) { }

  ngOnInit(){
    this.listarAlunos();
  }

  listarAlunos(){
    this.alunos$ = this.alunoService.listar();
  }

}
