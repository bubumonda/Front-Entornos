import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { HomeRoutingModule } from '../../home-routing.module';
import { CrudDatasetsService } from '../../services/crud-datasets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DataSet } from '../../model/dataset.interface';

@Component({
  selector: 'app-form-datasets',
  templateUrl: './form-datasets.component.html',
  styleUrls: ['./form-datasets.component.scss']
})
export class FormDatasetsComponent implements OnInit {

  form?:FormGroup;


  constructor(
   private formBuilder:FormBuilder,
   private crudDatasetsService:CrudDatasetsService,
   private router:Router,
   private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(localStorage.getItem("id"))
    if(!this.router.url.includes('editar')) return;
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.crudDatasetsService.getDatasetById(id)),
        )
        .subscribe(dataset=>{
          if(!dataset) return this.router.navigateByUrl('/home');
          this.form?.reset(dataset);
          return;
        })
  }

  buildForm(){
    this.form= this.formBuilder.group({
      id_dataset:[],
      nombre: [,Validators.required],
      comentarios:[],
      descripcion:[]
    })

  }

  get currentDataset():DataSet{
    const dataset = this.form?.value as DataSet;
    return dataset;
  }

  onSubmit(){
    if(this.form?.invalid) return;
    if(this.currentDataset.id_dataset){
      const {nombre, comentarios, descripcion} = this.form?.value;
      this.crudDatasetsService.editDataSet(this.currentDataset.id_dataset,{nombre, comentarios, descripcion})
        .subscribe(()=> {})
        this.form?.reset();
      setTimeout(() => {
        this.router.navigateByUrl('/home/crud-datasets');

      }, 1000);
      return;
    }
    const {nombre, comentarios, descripcion} = this.form?.value;
    this.crudDatasetsService.saveDataset({nombre, comentarios, descripcion})
    .subscribe((res)=> {})
    this.form?.reset();


  }

}
