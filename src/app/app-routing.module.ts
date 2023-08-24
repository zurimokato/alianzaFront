import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { AlianzaComponent } from './alianza/alianza.component';



const routes: Routes = [
  { path: 'alianza', component: AlianzaComponent },
  {path:'',redirectTo:'/alianza', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
