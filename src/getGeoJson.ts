import * as jsonfile from 'jsonfile';
import * as path from 'path';

export class GermanyAdministrativeGeojson {

    static getStates(simplified = 20) {
        return this.fromFile("germany_states_simplify" + simplified + ".geojson");
    }

    private static fromFile(filename: string) {
        // relative from ./build/src/index.js
        const baseFolder = "../../geojson/";
        const file = path.join(__dirname, baseFolder + filename);
        return jsonfile.readFileSync(file);
    }
}