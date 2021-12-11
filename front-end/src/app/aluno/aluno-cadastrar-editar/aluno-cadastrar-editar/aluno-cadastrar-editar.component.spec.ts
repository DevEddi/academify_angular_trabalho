import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCadastrarEditarComponent } from './aluno-cadastrar-editar.component';

describe('AlunoCadastrarEditarComponent', () => {
  let component: AlunoCadastrarEditarComponent;
  let fixture: ComponentFixture<AlunoCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
