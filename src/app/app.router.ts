import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListagemExalunoComponent } from './pages/exaluno/listagem-exaluno/listagem-exaluno.component';
import { ListagemHomenageadoComponent } from './pages/homenageado/listagem-homenageado/listagem-homenageado.component';
import { ListagemAmigoComponent } from './pages/amigo/listagem-amigo/listagem-amigo.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'ex-aluno', component: ListagemExalunoComponent, pathMatch: 'full' },
    { path: 'homenageado', component: ListagemHomenageadoComponent, pathMatch: 'full' },
    { path: 'amigo', component: ListagemAmigoComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: '**', component: NotfoundComponent, pathMatch: 'full' }
]

export const RoutingModule = RouterModule.forRoot(routes);