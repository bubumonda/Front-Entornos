import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDatasetsComponent } from './crud-datasets.component';

describe('CrudDatasetsComponent', () => {
  let component: CrudDatasetsComponent;
  let fixture: ComponentFixture<CrudDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDatasetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
