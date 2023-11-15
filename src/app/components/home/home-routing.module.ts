import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDatasetsComponent } from './components/crud-datasets/crud-datasets.component';
import { FormDatasetsComponent } from './components/form-datasets/form-datasets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud-datasets',
    pathMatch: 'full',
  },
  {path:'crud-datasets', component:CrudDatasetsComponent},
  {path:'crear', component:FormDatasetsComponent},
  {path:'editar/:id', component:FormDatasetsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
