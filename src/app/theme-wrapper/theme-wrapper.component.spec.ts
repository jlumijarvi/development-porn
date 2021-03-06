import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeWrapperComponent } from './theme-wrapper.component';

describe('ThemeWrapperComponent', () => {
  let component: ThemeWrapperComponent;
  let fixture: ComponentFixture<ThemeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
