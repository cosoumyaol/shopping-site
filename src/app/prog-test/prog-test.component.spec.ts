import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgTestComponent } from './prog-test.component';

describe('ProgTestComponent', () => {
  let component: ProgTestComponent;
  let fixture: ComponentFixture<ProgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
