# Converting to GeoJSON

## Get Raw Data

we need raw data of `vg250_0101.utm32s.shape.ebenen.zip` to generate the geojson

### Zip File

- http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=1&gdz_unt_zeile=14&gdz_user_id=0
- scroll down to "UTM32 - Ebenen - ArcInfo-SHAPE - ca. 73 MB" and download
- maybe direct link: http://sg.geodatenzentrum.de/web_download/vg/vg250_0101/utm32s/shape/vg250_0101.utm32s.shape.ebenen.zip 
- unzip 
- copy/move folder `vg250_ebenen` to `rawdata`

### Convert GIS Shapefile to geojson

> the script will use docker to get [GDAL](http://www.gdal.org/) (Geospatial Data Abstraction Library) to get the program ogr2ogr  
> you could also get the gdal for your operating system  
> - mac: [GDAL for mac from kyngchaos](http://www.kyngchaos.com/software:frameworks), or `brew install gdal`

```bash
./convert-shapefile.sh vg250_ebenen/VG250_LAN.dbf germany_states . && mv *.geojson ../geojson/
```