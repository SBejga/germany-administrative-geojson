# Germany Administrative GeoJSON

## GeoJSON

generated GeoJSON are located in folder `geojson`. See `rawdata` how this is generated.

## Usage

    npm i --save germany-administrative-geojson

### TypeScript

```ts
import * as AdminGeojson from "germany-administrative-geojson";

// get GeoJSON of all States
AdminGeojson.getStates();

// get attribution string
AdminGeojson.getAttribution().text //or html, or markdown
```

## state ID Mapping

to know which state is a geojson feature, you should check the feature.properties.SN_L

see mapping:

```js
[
    '01: Schleswig-Holstein',
    '02: Hamburg',
    '03: Niedersachsen',
    '04: Bremen',
    '05: Nordrhein-Westfalen',
    '06: Hessen',
    '07: Rheinland-Pfalz',
    '08: Baden-Württemberg',
    '09: Bayern',
    '10: Saarland',
    '11: Berlin',
    '12: Brandenburg',
    '13: Mecklenburg-Vorpommern',
    '14: Sachsen',
    '15: Sachsen-Anhalt',
    '16: Thüringen'
]
```

## Attribution required

If you use the provided geojson you have to refer to the data source and their terms of use. Always add the attribution!

See `Source of Data`.

## Source of Data

The dataset used to generate geojson has the following terms of use:

> This dataset is available for download and online use via geodata services, according to the law on access to spatial data, for commercial and non-commercial usage exempted from payment.
>
> Usage of the geodata and geodata services is regulated by the Verordnung zur Festlegung der Nutzungsbestimmungen für die Bereitstellung von Geodaten des Bundes (GeoNutzV) (Ordinance to determine the conditions for use for the provision of spatial data from the Federation) of 19 March 2013 (Bundesgesetzblatt Jahrgang 2013 Teil I Nr. 14) (Federal Law Gazette 2013, Part 1., No. 14).
>
> In particular, every user must place the respective source note referring to all geodata, metadata and geodata services unambiguously and in optical relationship. Alterations, revisions, new designs or any other variations must be provided with an alteration notice in the source reference.

© GeoBasis-DE / [BKG](http://www.bkg.bund.de) 2018 (data changed)

## Thanks to

- GDAL, [gdal-docker](https://github.com/geo-data/gdal-docker)
- [simple-geodata-selector](https://github.com/opendatalab-de/simple-geodata-selector)
- [Geodatenzentrum](http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=1&gdz_unt_zeile=14&gdz_user_id=0)
- [Generic GeoJSON](https://github.com/yagajs/generic-geojson)