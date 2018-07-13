import * as AdminGeojson from './';

describe('GeoJSON', () => {
  it('should get states', () => {
    expect(AdminGeojson.getStates()).toBeTruthy();
  });
});

describe('Attribution', () => {
  it('should get attribution string', () => {
    const attribution = AdminGeojson.getAttribution();
    expect(attribution).toBeTruthy();
    expect(attribution).toHaveProperty('markdown');
    expect(attribution).toHaveProperty('html');
    expect(attribution).toHaveProperty('text');
    expect(attribution).toHaveProperty('yearOfData', 2018);
    expect(attribution.text).toEqual('© GeoBasis-DE / BKG 2018 (data changed)');
    expect(attribution.html).toMatch('<a href="http://www.bkg.bund.de">BKG</a>');
  });
});