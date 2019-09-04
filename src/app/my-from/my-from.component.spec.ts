import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFromComponent } from './my-from.component';

describe('MyFromComponent', () => {
  let component: MyFromComponent;
  let fixture: ComponentFixture<MyFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
