import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaginatorComponent } from './my-paginator.component';

describe('MyPaginatorComponent', () => {
  let component: MyPaginatorComponent;
  let fixture: ComponentFixture<MyPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
