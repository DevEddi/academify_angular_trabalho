import { TestBed } from '@angular/core/testing';

import { AlunoIncluirService } from './aluno-incluir.service';

describe('AlunoIncluirService', () => {
  let service: AlunoIncluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoIncluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
