import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmemntComponent } from './treatmemnt.component';

describe('TreatmemntComponent', () => {
  let component: TreatmemntComponent;
  let fixture: ComponentFixture<TreatmemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmemntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
