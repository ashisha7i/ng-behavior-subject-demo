import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverTwoComponent } from './reciever-two.component';

describe('RecieverTwoComponent', () => {
  let component: RecieverTwoComponent;
  let fixture: ComponentFixture<RecieverTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieverTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
