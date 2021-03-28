import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { AddInstractorComponent } from "./add-instractor/add-instractor.component";
import { AddCoursCreatorComponent } from "./add-cours-creator/add-cours-creator.component";
import { AddCoursComponent } from "./add-cours/add-cours.component";
import { ManagCoursesComponent } from "./manag-courses/manag-courses.component";
import { RbkComponent } from './rbk/rbk.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddInstractorComponent,
    AddCoursCreatorComponent,
    AddCoursComponent,
    ManagCoursesComponent,
    RbkComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
