import {defineSupportCode} from 'cucumber';
import {browser, by} from 'protractor';
import {PokemonColorPage} from '../support/page-objects/pokemon-color.po';

const expect = global['expect'];

defineSupportCode(function ({Given, When, Then}) {

    const pokemonColorPage = new PokemonColorPage();

    Given('I enter the url of the page', async () => {
        await browser.get('http://localhost:4200');
    });

    When('the page was loaded', async () => {
        expect(pokemonColorPage.ColorSelectorDropdown, 'pokemon color selector is available').to.exist;
        // await pokemonColorPage.ColorSelectorDropdown.click();
    });

    Then('Pokemon color list is initialized', async () => {
        const options = pokemonColorPage.ColorSelectorDropdownOptions;
        expect(options.count()).to.eventually.equal(10);
    });
});
