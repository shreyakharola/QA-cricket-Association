import { Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OverviewComponent } from './nav-tabs/overview/overview.component';
import { MatchesComponent } from './nav-tabs/matches/matches.component';
import { SquadsComponent } from './nav-tabs/squads/squads.component';
import { SeriesStatsComponent } from './nav-tabs/series-stats/series-stats.component';
import { NewsComponent } from './nav-tabs/news/news.component';
import { InfoComponent } from './nav-tabs/info/info.component';
export const appRoutes: Routes = [
    {
        path: 'cards',
        component: MainLayoutComponent 
    },
    {
        path: 'cards/:id',
        component: TeamDetailComponent ,
        children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'matches', component: MatchesComponent },
            { path: 'squads', component: SquadsComponent },
            { path: 'series-stats', component: SeriesStatsComponent },
            { path: 'news', component: NewsComponent },
            { path: 'info', component: InfoComponent }
        ]
    },
    {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
    },

];

