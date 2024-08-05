import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentA } from './componentA/componentA.component';
import { ComponentC } from './componentC/componentC.component';
import { ComponentB } from './componentB/componentB.component';

const routes: Routes = [
  {path: 'componentA', component: ComponentA},
  // {path: 'componentB/componentA', component: ComponentA},
  {path: 'componentB', component: ComponentB,
    children: [
      {
        path: 'componentC',
        component: ComponentA,
      },
      {
        path: 'componentA/:id/teste',
        component: ComponentA
      },
      {
        path: 'componentA/:id/teste/aqui',
        component: ComponentC,
      },
      {
        path: 'componentA',
        component: ComponentA
      },
      
    ]
   },
  {path: 'componentC', component: ComponentC},
  {path: 'componentD', loadComponent: () => import('./componentD/componentD.component').then(m => m.ComponentD)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
