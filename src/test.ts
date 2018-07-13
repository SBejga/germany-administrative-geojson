import {GermanyAdministrativeGeojson} from './getGeoJson';

describe('GeoJSON', () => {
  it('should get states', () => {
    expect(GermanyAdministrativeGeojson.getStates()).toBeTruthy();
  });
});

describe('Attribution', () => {
  it('should get attribution string', () => {
    const attribution = GermanyAdministrativeGeojson.getAttribution();
    expect(attribution).toBeTruthy();
    expect(attribution).toHaveProperty('markdown');
    expect(attribution).toHaveProperty('html');
    expect(attribution).toHaveProperty('text');
    expect(attribution.text).toEqual('© GeoBasis-DE / BKG 2018 (data changed)');
    expect(attribution.html)
        .toMatch('<a href="http://www.bkg.bund.de">BKG</a>');
  });
});