import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookComponentComponent } from './list-book-component.component';

describe('ListBookComponentComponent', () => {
  let component: ListBookComponentComponent;
  let fixture: ComponentFixture<ListBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
