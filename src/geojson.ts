import * as jsonfile from 'jsonfile';
import * as path from 'path';

function fromFile(filename: string) {
  const baseFolder = '../geojson/';
  const file = path.join(__dirname, baseFolder + filename);
  return jsonfile.readFileSync(file);
}

export function getStates(simplified = 20) {
  return fromFile('germany_states_simplify' + simplified + '.geojson');
}