import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthComponent } from './notauth.component';

describe('NotauthComponent', () => {
  let component: NotauthComponent;
  let fixture: ComponentFixture<NotauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
