import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pagesAdmin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pagesAdmin/progress/progress.component';
import { Graficas1Component } from './pagesAdmin/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'graficas1', component: Graficas1Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

//export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRouteModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
