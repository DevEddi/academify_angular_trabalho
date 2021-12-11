import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoExcluirComponent } from './aluno-excluir.component';

describe('AlunoExcluirComponent', () => {
  let component: AlunoExcluirComponent;
  let fixture: ComponentFixture<AlunoExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
