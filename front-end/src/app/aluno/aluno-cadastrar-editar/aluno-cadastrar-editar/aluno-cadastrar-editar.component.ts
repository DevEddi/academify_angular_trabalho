import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../aluno.model';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-aluno-cadastrar-editar',
  templateUrl: './aluno-cadastrar-editar.component.html',
  styleUrls: ['./aluno-cadastrar-editar.component.scss']
})
export class AlunoCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;
  aluno!: Aluno;

  constructor(
    private formBuilder: FormBuilder, 
    private alunoService: AlunoService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(){
    this.aluno = this.activateRoute.snapshot.data["aluno"];
    this.formGroup = this.formBuilder.group({
      nome: [this.aluno && this.aluno.nome ? this.aluno.nome : "", Validators.required],
      matricula: [this.aluno && this.aluno.matricula ? this.aluno.matricula: "", Validators.required],
      dataNasc: [this.aluno && this.aluno.nascimento ? this.aluno.nascimento: "", Validators.required],
    })
  }
  salvar(){
    if(this.aluno && this.aluno.id){
      this.alunoService.atualizar(this.formGroup.value).subscribe(
        alunoAtualizado =>{
          this.router.navigateByUrl("/alunos")
        },
        error =>{
          alert("Erro ao atualizar" + JSON.stringify(error));
        }
      )
    }else{
      this.alunoService.cadastrar(this.formGroup.value).subscribe(
        alunoCadastrado =>{
          this.router.navigateByUrl("/alunos")
        },
        error =>{
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      )
    }
  }
  deletar(){
    if(confirm("Deseja realmente o aluno?" + this.aluno.nome)){
      this.alunoService.deletar(this.formGroup.value).subscribe(
        response =>{
          this.router.navigateByUrl("/alunos")
        },
        error =>{
          alert("Erro ao deletar" + JSON.stringify(error));
        }
      )
    }
  }
}