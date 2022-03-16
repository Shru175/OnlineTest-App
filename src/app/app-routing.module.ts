import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';


const routes: Routes = [ 
{path:"home",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"test",component:TestComponent},
{path:"jsp",component:Test2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
