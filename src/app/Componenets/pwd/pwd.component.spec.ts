import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdComponent } from './pwd.component';

describe('PwdComponent', () => {
  let component: PwdComponent;
  let fixture: ComponentFixture<PwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwdComponent]
    });
    fixture = TestBed.createComponent(PwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
