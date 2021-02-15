import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyInjectionComponent } from './dependancy-injection.component';

describe('DependancyInjectionComponent', () => {
  let component: DependancyInjectionComponent;
  let fixture: ComponentFixture<DependancyInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependancyInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependancyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
