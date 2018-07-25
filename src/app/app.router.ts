import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    
    { path: '**', component: NotfoundComponent }
]

export const RoutingModule = RouterModule.forRoot(routes);