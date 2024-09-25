import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadZipDialogComponent } from './upload-zip-dialog.component';

describe('UploadZipDialogComponent', () => {
  let component: UploadZipDialogComponent;
  let fixture: ComponentFixture<UploadZipDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadZipDialogComponent]
    });
    fixture = TestBed.createComponent(UploadZipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
