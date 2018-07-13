import * as jsonfile from 'jsonfile';
import * as path from 'path';
import GeometryObject = GeoJSON.GeometryObject;
import {GenericGeoJSONFeature, GenericGeoJSONFeatureCollection} from '@yaga/generic-geojson';
import {AdminProperties} from './interfaces';

function fromFile(filename: string) {
  const baseFolder = '../geojson/';
  const file = path.join(__dirname, baseFolder + filename);
  return jsonfile.readFileSync(file);
}

/* tslint:disable:no-any */
function validate(geojson: any) {
  return geojson as GenericGeoJSONFeatureCollection<GeometryObject, AdminProperties>;
}

export function getStates(simplified = 20) {
  return validate(fromFile('germany_states_simplify' + simplified + '.geojson'));
}