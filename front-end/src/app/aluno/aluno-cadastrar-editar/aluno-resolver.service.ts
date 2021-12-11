import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolverService implements Resolve<Aluno>{

  constructor(private alunoService: AlunoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.alunoService.pesquisarPorId(id);
        }
        return of({} as Aluno);
    }
}
