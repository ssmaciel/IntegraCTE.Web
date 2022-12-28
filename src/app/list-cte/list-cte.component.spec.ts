import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCteComponent } from './list-cte.component';

describe('ListCteComponent', () => {
  let component: ListCteComponent;
  let fixture: ComponentFixture<ListCteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
