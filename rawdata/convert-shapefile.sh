#!/bin/sh
# from: https://github.com/opendatalab-de/simple-geodata-selector/blob/master/converter/convert-shapefile.sh

if [ $# -lt 3 ]
  then
    echo "Usage: <input-file> <name> <output-directory>\n<input-file>: path to dbf file, e.g. VG250_KRS.dbf\n<name>: basename of output files, e.g. \"landkreise\""
    exit 1
fi

## TODO: Check if gdal / ogr2ogr is available (installed)
## maybe use a docker ?

simplifyLevels=(0 20 200)

for simplifyLevel in "${simplifyLevels[@]}"
do
    outputFile=$3/$2_simplify${simplifyLevel}.geojson
    rm ${outputFile}
    docker run --rm -v `pwd`:`pwd` -w `pwd` -t -i geodata/gdal ogr2ogr -f GeoJSON -s_srs epsg:25832 -t_srs epsg:4326 -simplify ${simplifyLevel} ${outputFile} $1
done;