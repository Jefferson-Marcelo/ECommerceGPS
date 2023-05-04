import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBodyComponent } from './show-body.component';

describe('ShowBodyComponent', () => {
  let component: ShowBodyComponent;
  let fixture: ComponentFixture<ShowBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
