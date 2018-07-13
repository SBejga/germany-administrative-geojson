import * as jsonfile from 'jsonfile';
import * as path from 'path';

export class GermanyAdministrativeGeojson {
  static getAttribution() {
    const copyright = 'GeoBasis-DE';
    const yearOfData = 2018;
    const changedData = '(data changed)';
    const linkText = 'BKG';
    const link = 'http://www.bkg.bund.de';

    return {
      markdown: `© ${copyright} / [${linkText}](${link}) ${yearOfData} ${
          changedData}`,
      html: `&copy; ${copyright} / <a href="${link}">${linkText}</a> ${
          yearOfData} ${changedData}`,
      text: `© ${copyright} / ${linkText} ${yearOfData} ${changedData}`
    };
  }

  static getStates(simplified = 20) {
    return this.fromFile('germany_states_simplify' + simplified + '.geojson');
  }

  private static fromFile(filename: string) {
    const baseFolder = '../geojson/';
    const file = path.join(__dirname, baseFolder + filename);
    return jsonfile.readFileSync(file);
  }
}