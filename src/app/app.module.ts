import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutingModule } from './app.router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { ValorPresidenciaComponent } from './components/charts/valor-presidencia/valor-presidencia.component';
import { DefaultTableComponent } from './components/table/default-table/default-table.component';
import { ListagemExalunoComponent } from './pages/exaluno/listagem-exaluno/listagem-exaluno.component';
import { ListagemHomenageadoComponent } from './pages/homenageado/listagem-homenageado/listagem-homenageado.component';
import { TreeTableModule } from 'ng-treetable';
import { ListagemAmigoComponent } from './pages/amigo/listagem-amigo/listagem-amigo.component';
import { ExAlunoTableComponent } from './components/table/ex-aluno-table/ex-aluno-table.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    HeaderComponent,
    LeftSideComponent,
    FooterComponent,
    ControlSidebarComponent,
    jqxChartComponent,
    ValorPresidenciaComponent,
    DefaultTableComponent,
    ListagemExalunoComponent,
    ListagemHomenageadoComponent,
    ListagemAmigoComponent,
    ExAlunoTableComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
