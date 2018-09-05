import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListagemExalunoComponent } from './pages/exaluno/listagem-exaluno/listagem-exaluno.component';
import { ListagemHomenageadoComponent } from './pages/homenageado/listagem-homenageado/listagem-homenageado.component';
import { ListagemAmigoComponent } from './pages/amigo/listagem-amigo/listagem-amigo.component';
import { VisualizarExalunoComponent } from './pages/exaluno/visualizar-exaluno/visualizar-exaluno.component';
import { NovoExalunoComponent } from './pages/exaluno/novo-exaluno/novo-exaluno.component';
import { NovoHomenageadoComponent } from './pages/homenageado/novo-homenageado/novo-homenageado.component';
import { VisualizarHomenageadoComponent } from './pages/homenageado/visualizar-homenageado/visualizar-homenageado.component';

const routes: Routes = [
    { path: '', component: LoginComponent },

    { path: 'ex-aluno', component: ListagemExalunoComponent, pathMatch: 'full' },
    { path: 'ex-aluno/:id', component: VisualizarExalunoComponent, pathMatch: 'full' },       
    { path: 'ex-aluno/novo', component: VisualizarExalunoComponent, pathMatch: 'full' },       

    { path: 'homenageado', component: ListagemHomenageadoComponent, pathMatch: 'full' },
    { path: 'homenageado/:id', component: VisualizarHomenageadoComponent, pathMatch: 'full' },
    { path: 'homenageado/novo', component: NovoHomenageadoComponent, pathMatch: 'full' },
    
    { path: 'amigo', component: ListagemAmigoComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: '**', component: NotfoundComponent, pathMatch: 'full' }
]

export const RoutingModule = RouterModule.forRoot(routes);