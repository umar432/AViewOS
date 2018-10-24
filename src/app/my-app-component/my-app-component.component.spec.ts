import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppComponentComponent } from './my-app-component.component';

describe('MyAppComponentComponent', () => {
  let component: MyAppComponentComponent;
  let fixture: ComponentFixture<MyAppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
