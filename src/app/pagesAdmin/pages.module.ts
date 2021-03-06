import { NgModule } from "@angular/core";

//Rutas
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesAdminComponent } from './pages-admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  declarations:[
    PagesAdminComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES
  ]

})
export class PagesModule {}
