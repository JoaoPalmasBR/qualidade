import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CadastrarInscritoComponent } from './cadastrar-inscrito/cadastrar-inscrito.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ListarInscritosComponent } from './listar-inscritos/listar-inscritos.component';

const appRoutes: Routes = [
  { path: 'cadastrar', component: CadastrarInscritoComponent },
  { path: 'listar', component: ListarInscritosComponent },
  { path: '', component: PaginaInicialComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarInscritoComponent,
    PaginaInicialComponent,
    ListarInscritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
