import { Component, OnInit } from '@angular/core';
import { DataSet } from '../../model/dataset.interface';
import { CrudDatasetsService } from '../../services/crud-datasets.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-datasets',
  templateUrl: './crud-datasets.component.html',
  styleUrls: ['./crud-datasets.component.scss']
})
export class CrudDatasetsComponent implements OnInit {

  dataSets:DataSet[]=[];

  constructor(
    private crudDataSetsService:CrudDatasetsService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.loadData();
  }
  loadData(){
    this.crudDataSetsService.loadAllData()
      .subscribe((res: any)=>{
        this.dataSets = res;
      })
  }

  deleteData(id_dataset:number){
    this.crudDataSetsService.deleteDataSet(id_dataset)
    .subscribe();

    this.dataSets = this.dataSets.filter((el)=> el.id_dataset !==id_dataset );
    // this.loadData();
    // location.reload();

  }

  editData(id_dataset:number){
    this.router.navigateByUrl(`/home/editar/${id_dataset}`)
  }
  goToForm(){
    this.router.navigateByUrl('/home/crear')
  }

}
