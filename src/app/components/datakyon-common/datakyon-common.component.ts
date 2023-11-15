import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datakyon-common',
  templateUrl: './datakyon-common.component.html',
  styleUrls: ['./datakyon-common.component.scss'],
})
export class DatakyonCommonComponent implements OnInit {
  ruta: boolean = true;
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    let url: string | undefined = this.router.url;
    url = url.split('/').pop();
    if (url === 'registration') {
      this.ruta = false;
    }
  }
}
