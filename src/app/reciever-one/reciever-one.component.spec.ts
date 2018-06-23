import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverOneComponent } from './reciever-one.component';

describe('RecieverOneComponent', () => {
  let component: RecieverOneComponent;
  let fixture: ComponentFixture<RecieverOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieverOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
