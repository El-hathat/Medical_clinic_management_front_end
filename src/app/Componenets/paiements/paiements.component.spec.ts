import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementsComponent } from './paiements.component';

describe('PaiementsComponent', () => {
  let component: PaiementsComponent;
  let fixture: ComponentFixture<PaiementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementsComponent]
    });
    fixture = TestBed.createComponent(PaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
