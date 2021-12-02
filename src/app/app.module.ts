import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignarPedidoComponent } from './modupedidos/asignar-pedido/asignar-pedido.component';
import { BarraNavegacionComponent } from './layout/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './layout/pie-pagina/pie-pagina.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { ErrorComponent } from './layout/error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignarPedidoComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
