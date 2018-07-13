export function getAttribution() {
  const copyright = 'GeoBasis-DE';
  const yearOfData = 2018;
  const changedData = '(data changed)';
  const linkText = 'BKG';
  const link = 'http://www.bkg.bund.de';

  return {
    yearOfData,
    markdown: `© ${copyright} / [${linkText}](${link}) ${yearOfData} ${changedData}`,
    html: `&copy; ${copyright} / <a href="${link}">${linkText}</a> ${yearOfData} ${changedData}`,
    text: `© ${copyright} / ${linkText} ${yearOfData} ${changedData}`
  };
}