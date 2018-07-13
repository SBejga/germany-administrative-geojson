import * as AdminGeojson from './';

describe('GeoJSON', () => {
  const states = AdminGeojson.getStates();
  it('should get states', () => {
    expect(states).toBeTruthy();
  });
  it('should have feature with admin properties', () => {
    const aState = states.features[0];
    expect(aState.properties).toHaveProperty('ADE');
    expect(aState.properties).toHaveProperty('SN_L');
    expect(aState.properties).toHaveProperty('GEN');
  });
  it('should have an example state: bavaria', () => {
    const example = states.features.find(s => s.properties.GEN === 'Bayern');
    expect(example).toBeDefined();
    if (example) {
      expect(example.properties).toHaveProperty('ADE', 2);
      expect(example.properties).toHaveProperty('SN_L', '09');
    }
  });
});

describe('ID', () => {
  const states = AdminGeojson.getStates();
  for (const state of states.features) {
    console.log('state ' + state.properties.GEN + ` "SN_L": ${state.properties.SN_L}`);
  }
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