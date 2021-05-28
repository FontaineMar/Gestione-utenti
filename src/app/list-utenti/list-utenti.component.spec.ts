import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtentiComponent } from './list-utenti.component';

describe('ListUtentiComponent', () => {
  let component: ListUtentiComponent;
  let fixture: ComponentFixture<ListUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUtentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
