#!/usr/bin/env node
import Ajv from 'ajv';

import parseSettingsFromArgs from './parseSettingsFromArgs.js';
import fixtureSettingsSchema from './fixtureSettingsSchema.js';

import parseFixtures from './parseFixtures.js';
import renderFixtures from './renderFixtures.js';

function main() {
  const { fixtureSettings, settingsPath } = parseSettingsFromArgs();

  const ajv = new Ajv();
  if (!ajv.validate(fixtureSettingsSchema, fixtureSettings)) {
    console.log(ajv.errors);
    throw new Error('Invalid fixture settings');
  }

  const fixtureList = parseFixtures(fixtureSettings);
  renderFixtures(settingsPath, fixtureList);
}

main();
