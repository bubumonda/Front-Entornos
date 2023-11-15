import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkyoCommonComponent } from './datakyon-common.component';

describe('UkyoCommonComponent', () => {
  let component: UkyoCommonComponent;
  let fixture: ComponentFixture<UkyoCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UkyoCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UkyoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
