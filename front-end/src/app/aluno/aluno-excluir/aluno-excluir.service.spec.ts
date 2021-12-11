import { TestBed } from '@angular/core/testing';

import { AlunoExcluirService } from './aluno-excluir.service';

describe('AlunoExcluirService', () => {
  let service: AlunoExcluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoExcluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
