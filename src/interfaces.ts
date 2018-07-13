import GeometryObject = GeoJSON.GeometryObject;
import {GenericGeoJSONFeature} from '@yaga/generic-geojson';

export interface AdminProperties {
  /* Administative level
     1 = country,
     2 = state,
     3 = governmental district
     4 = district
     5 = urban district
     6 = ...
  */
  ADE: number;

  /* ID of state */
  SN_L: string;

  /* ID of gov. district */
  SN_R: string;

  /* ID of district */
  SN_K: string;

  /* ID of urban district */
  SN_V1: string;

  /* ID of municipalities */
  SN_V2: string;

  GF: number;
  BSG: number;
  RS: string;
  AGS: string;
  SDV_RS: string;
  GEN: string;
  BEZ: string;
  IBZ: number;
  BEM: string;
  NBD: string;
  SN_G: string;
  FK_S3: string;
  NUTS: string;
  RS_0: string;
  AGS_0: string;
  WSK: string;
  DEBKG_ID: string;
}