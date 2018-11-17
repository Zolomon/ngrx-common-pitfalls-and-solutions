import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { GoodDemoComponent } from './good-demo/good-demo.component';

const routes: Routes = [
  { path: 'bad-1-demo', component: DemoComponent },
  { path: 'good-demo', component: GoodDemoComponent },
  { path: '', redirectTo: '/bad-1-demo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
