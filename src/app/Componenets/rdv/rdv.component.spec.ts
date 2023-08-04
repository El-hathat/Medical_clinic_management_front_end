import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDVComponent } from './rdv.component';

describe('RDVComponent', () => {
  let component: RDVComponent;
  let fixture: ComponentFixture<RDVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RDVComponent]
    });
    fixture = TestBed.createComponent(RDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
