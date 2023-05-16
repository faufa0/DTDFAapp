import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditQouteComponent } from './addedit-qoute.component';

describe('AddeditQouteComponent', () => {
  let component: AddeditQouteComponent;
  let fixture: ComponentFixture<AddeditQouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditQouteComponent]
    });
    fixture = TestBed.createComponent(AddeditQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
