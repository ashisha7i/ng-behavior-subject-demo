import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverThreeComponent } from './reciever-three.component';

describe('RecieverThreeComponent', () => {
  let component: RecieverThreeComponent;
  let fixture: ComponentFixture<RecieverThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieverThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
