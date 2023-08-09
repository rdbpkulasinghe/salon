import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttreatmenComponent } from './selecttreatmen.component';

describe('SelecttreatmenComponent', () => {
  let component: SelecttreatmenComponent;
  let fixture: ComponentFixture<SelecttreatmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecttreatmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecttreatmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
