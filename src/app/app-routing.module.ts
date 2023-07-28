import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingComponent } from './Pages/ongoing/ongoing.component';
import { CompletedComponent } from './Pages/completed/completed.component';

const routes: Routes = [
  { path: '', component: OngoingComponent, pathMatch: 'full' },
  { path: 'completed', component: CompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
