import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singup/singup.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SingupComponent
    },
    {
        path: '',
        component: HomeComponent
    }

];
export default appRoutes;