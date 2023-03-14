import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info3Component } from './info3.component';

describe('Info3Component', () => {
  let component: Info3Component;
  let fixture: ComponentFixture<Info3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Info3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Info3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
