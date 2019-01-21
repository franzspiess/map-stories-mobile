import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { StoryComponent } from './story/story.component';
import { EventComponent } from './event/event.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { HttpClientModule} from '@angular/common/http';
import { MystoriesComponent } from './mystories/mystories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    StoryComponent,
    EventComponent,
    ListContainerComponent,
    MystoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


