import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRoutes } from '../../core/routes/routes';
const routes: Routes = StoreRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
