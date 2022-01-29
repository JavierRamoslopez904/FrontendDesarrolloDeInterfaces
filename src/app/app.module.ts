import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { TrofeosComponent } from './components/trofeos/trofeos.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LocalComponent } from './components/local/local.component';
import { VisitanteComponent } from './components/visitante/visitante.component';
import { PorteroComponent } from './components/portero/portero.component';
import { CompraRealizadaComponent } from './components/compra-realizada/compra-realizada.component';

const routes : Routes = [
  {path : 'introduccion', component : IntroduccionComponent},
  {path : 'header', component : HeaderComponent},
  {path : 'footer', component : FooterComponent},
  {path : 'trofeos', component : TrofeosComponent},
  {path : 'jugadores', component : JugadoresComponent},
  {path : 'historia', component : HistoriaComponent},
  {path : 'tienda', component : TiendaComponent},
  {path : 'local', component : LocalComponent},
  {path : 'visitante', component : VisitanteComponent},
  {path : 'portero', component : PorteroComponent},
  {path : 'compraRealizada', component : CompraRealizadaComponent},
  {path : '', redirectTo:'/introduccion', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    HeaderComponent,
    FooterComponent,
    JugadoresComponent,
    TrofeosComponent,
    HistoriaComponent,
    TiendaComponent,
    LocalComponent,
    VisitanteComponent,
    PorteroComponent,
    CompraRealizadaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
