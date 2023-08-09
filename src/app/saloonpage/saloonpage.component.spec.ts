import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonpageComponent } from './saloonpage.component';

describe('SaloonpageComponent', () => {
  let component: SaloonpageComponent;
  let fixture: ComponentFixture<SaloonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaloonpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaloonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
