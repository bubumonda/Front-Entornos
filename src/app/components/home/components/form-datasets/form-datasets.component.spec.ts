import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatasetsComponent } from './form-datasets.component';

describe('FormDatasetsComponent', () => {
  let component: FormDatasetsComponent;
  let fixture: ComponentFixture<FormDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDatasetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
