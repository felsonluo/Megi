import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const appRoutes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
     {
        path: 'user',
        component: UserComponent
    },
    {
        path: '**',
        component: UserComponent
    }
]


export default RouterModule.forRoot(appRoutes);