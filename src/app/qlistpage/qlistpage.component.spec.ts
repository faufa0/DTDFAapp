import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlistpageComponent } from './qlistpage.component';

describe('QlistpageComponent', () => {
  let component: QlistpageComponent;
  let fixture: ComponentFixture<QlistpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlistpageComponent]
    });
    fixture = TestBed.createComponent(QlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
