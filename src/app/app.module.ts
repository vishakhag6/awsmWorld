import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {
  MdCardModule, MdButtonModule, MdDialogModule, MdInputModule, MdSidenavModule,
  MdToolbarModule, MdNavListCssMatStyler, MdMenuModule, MdListModule, MdGridListModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CardComponent} from './card/card.component';
import {EditHotelComponent} from './edit-hotel/edit-hotel.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    MainPageComponent,
    CardComponent,
    EditHotelComponent,
    AddHotelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditHotelComponent, AddHotelComponent]
})
export class AppModule {
}
