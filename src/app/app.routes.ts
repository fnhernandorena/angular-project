import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SanpedroComponent } from './sanpedro/sanpedro.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { BuenosairesComponent } from './buenosaires/buenosaires.component';

export const routes: Routes = [
    {path: 'welcome-view', component: WelcomeComponent},
{path: 'san-pedro-view', component: SanpedroComponent},
{path: 'buenos-aires-view', component: BuenosairesComponent},
{path: 'argentina-view', component: ArgentinaComponent}
];
