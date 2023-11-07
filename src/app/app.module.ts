import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MensagemAlertaComponent } from './shared/components/mensagem-alerta/mensagem.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { InputFormGroupComponent } from './shared/components/input-form-group/input-form-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCteComponent } from './list-cte/list-cte.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { ApiService } from './shared/services/api.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensagemAlertaComponent,
    LoadingComponent,
    InputFormGroupComponent,
    MenuComponent,
    ListCteComponent,
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
