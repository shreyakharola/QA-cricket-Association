import { Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamSelectMainComponent } from './team-select-main/team-select-main.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OverviewComponent } from './nav-tabs/overview/overview.component';
import { MatchesComponent } from './nav-tabs/matches/matches.component';
export const appRoutes: Routes = [
    {
        path: 'cards',
        component: MainLayoutComponent // Loads the main page with header, cards, etc.
    },
    {
        path: 'cards/:id',
        component: TeamDetailComponent // Loads only the team details page
    },
    {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
    },
    {
        path: 'cards/:id/overview',
        component: OverviewComponent
    },
    {
        path: 'cards/:id/matches',
        component: MatchesComponent
    }
];

