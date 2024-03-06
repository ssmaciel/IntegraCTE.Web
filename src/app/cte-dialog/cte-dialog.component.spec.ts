import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteDialogComponent } from './cte-dialog.component';

describe('CteDialogComponent', () => {
  let component: CteDialogComponent;
  let fixture: ComponentFixture<CteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CteDialogComponent]
    });
    fixture = TestBed.createComponent(CteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
