import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LightEnvironmentComponent } from './environment/light-environment.component';
import { DimmingPlanComponent } from './dimming-plan/dimming-plan.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ModalComponent } from './modal/modal.component';
import { AddEnvChannelComponent } from './environment/add-env-channel/add-env-channel.component';
import { RemoveEnvChannelComponent } from './environment/remove-env-channel/remove-env-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    LightEnvironmentComponent,
    DimmingPlanComponent,
    FooterComponent,
    NavigationComponent,
    ModalComponent,
    AddEnvChannelComponent,
    RemoveEnvChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
