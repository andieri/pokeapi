import {Id} from './external-types';
import {Color} from './color';
import {Link} from './link';


export interface PokemonColor {
    id: Id;
    name: string;
    colorNames: Array<Color>;
    pokemons: Array<Link>;
}
