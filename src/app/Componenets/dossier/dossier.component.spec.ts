import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierComponent } from './dossier.component';

describe('DossierComponent', () => {
  let component: DossierComponent;
  let fixture: ComponentFixture<DossierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierComponent]
    });
    fixture = TestBed.createComponent(DossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
