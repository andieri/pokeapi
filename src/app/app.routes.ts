import {Routes} from '@angular/router';
import {PokemonColorContainerComponent} from './container/pokemon-color/pokemon-color-container.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {PokemonContainerComponent} from './container/pokemon/pokemon-container.component';

export const applicationRouter: Routes = [
    {path: '', redirectTo: 'pokemon-color', pathMatch: 'full'},
    {path: 'pokemon-color', component: PokemonColorContainerComponent},
    {path: 'pokemon-color/:id', component: PokemonColorContainerComponent},
    {path: 'pokemon', component: PokemonContainerComponent},
    {path: 'pokemon/:id', component: PokemonContainerComponent},
    {path: '**', component: PageNotFoundComponent}
];
