import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInscritoComponent } from './cadastrar-inscrito.component';

describe('CadastrarInscritoComponent', () => {
  let component: CadastrarInscritoComponent;
  let fixture: ComponentFixture<CadastrarInscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarInscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarInscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
