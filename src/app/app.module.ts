import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PokemonColorEffects} from './effect/pokemon-color.effects';
import {ButtonModule, DataListModule, DropdownModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {PokemonColorContainerComponent} from './container/pokemon-color/pokemon-color-container.component';
import {PokemonColorComponent} from './component/pokemon-color/pokemon-color.component';
import {ColorSelectorComponent} from './component/color-selector/color-selector.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PokemonLinkComponent} from './component/pokemon-link/pokemon-link.component';
import {initialState, reducers} from './reducer/main.reducer';
import {PokemonContainerComponent} from './container/pokemon/pokemon-container.component';
import {PokemonDetailComponent} from './component/pokemon-detail/pokemon-detail.component';
import {PokemonEffects} from './effect/pokemon.effects';
import {applicationRouter} from './app.routes';
import {GetPieceFromStringPipe} from './pipe/getPieceFromString.pipe';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        PokemonColorContainerComponent,
        PokemonColorComponent,
        ColorSelectorComponent,
        PokemonLinkComponent,
        PokemonContainerComponent,
        PokemonDetailComponent,
        GetPieceFromStringPipe,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(applicationRouter, {enableTracing: false}),
        BrowserModule,
        DropdownModule,
        DataListModule,
        ButtonModule,
        BrowserAnimationsModule,
        StoreModule.provideStore(reducers, initialState),
        StoreDevtoolsModule.instrumentStore({
            maxAge: 15
        }),
        HttpModule,
        EffectsModule.runAfterBootstrap(PokemonColorEffects),
        EffectsModule.runAfterBootstrap(PokemonEffects)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
