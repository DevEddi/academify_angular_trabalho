import { TestBed } from '@angular/core/testing';

import { AlunoVisualizarService } from './aluno-visualizar.service';

describe('AlunoVisualizarService', () => {
  let service: AlunoVisualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoVisualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
