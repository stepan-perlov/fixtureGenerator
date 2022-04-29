import fs from 'fs';
import nunjucks from 'nunjucks';

import fixturePropType from './fixturePropType.js';
import upperFirstChar from './upperFirstChar.js';

const njkEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader(process.env.FIXTURE_GENERATOR_DIR), {
  trimBlocks: true,
  lstripBlocks: true,
});
njkEnv.addFilter('isFixture', (value) => {
  return value.propType === fixturePropType.fixture;
});
njkEnv.addFilter('isDate', (value) => {
  return value.propType === fixturePropType.date;
});
njkEnv.addFilter('upperFirstChar', upperFirstChar);

export default (settingsPath, fixtureList) => {
  for (const fixture of fixtureList) {
    fs.writeFileSync(`${fixture.fileName}.ts`, njkEnv.render('fixture.ts.njk', { ...fixture, settingsPath }));
  }
  fs.writeFileSync('index.ts', njkEnv.render('index.ts.njk', { fixtureList }));
};
