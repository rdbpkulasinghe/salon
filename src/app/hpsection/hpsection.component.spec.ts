import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpsectionComponent } from './hpsection.component';

describe('HpsectionComponent', () => {
  let component: HpsectionComponent;
  let fixture: ComponentFixture<HpsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
