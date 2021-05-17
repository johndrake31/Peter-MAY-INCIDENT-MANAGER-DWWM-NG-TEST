import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncidentComponent } from './add-incident/add-incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
{ path: 'home', component: IncidentListComponent },
{ path: 'home/:id', component: IncidentListComponent},

{ path: 'addincident', component: AddIncidentComponent},

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
