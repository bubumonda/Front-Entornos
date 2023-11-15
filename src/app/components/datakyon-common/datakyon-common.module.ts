import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatakyonCommonComponent } from './datakyon-common.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DatakyonCommonComponent],
  imports: [CommonModule, MatCardModule],
  exports: [DatakyonCommonComponent],
})
export class DatakyonCommonModule {}
