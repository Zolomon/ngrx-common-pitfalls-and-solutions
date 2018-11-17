import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDemoComponent } from './good-demo.component';

describe('GoodDemoComponent', () => {
  let component: GoodDemoComponent;
  let fixture: ComponentFixture<GoodDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
