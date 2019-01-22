import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainerComponent }  from './list-container/list-container.component';
import {EventComponent} from './event/event.component';
import { MystoriesComponent} from './mystories/mystories.component';

const routes: Routes = [
  {path: 'list', component: ListContainerComponent},
  {path: 'event/:id', component: EventComponent },
  {path: 'mystories', component: MystoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



 }


