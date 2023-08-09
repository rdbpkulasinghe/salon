import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpageselectorComponent } from './spageselector.component';

describe('SpageselectorComponent', () => {
  let component: SpageselectorComponent;
  let fixture: ComponentFixture<SpageselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpageselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpageselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
