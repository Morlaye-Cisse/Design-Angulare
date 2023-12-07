import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { MediaComponent } from './media/media.component';
import { SettingComponent } from './setting/setting.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductComponent},
  {path:'statistics',component:StatisticsComponent},
  {path:'coupens',component:CoupensComponent},
  {path:'pages',component:PagesComponent},
  {path:'media',component:MediaComponent},
  {path:'setting',component:SettingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
