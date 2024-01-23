import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTemplateComponent } from './print-template.component';

describe('PrintTemplateComponent', () => {
  let component: PrintTemplateComponent;
  let fixture: ComponentFixture<PrintTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintTemplateComponent]
    });
    fixture = TestBed.createComponent(PrintTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
