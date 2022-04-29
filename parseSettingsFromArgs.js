import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export default () => {
  const argv = yargs(process.argv.slice(2))
    .option('settingsPath', {
      alias: 's',
      type: 'string',
      description: 'Relative path to <fixture>Settings.json',
      demand: true,
    })
    .strict()
    .help().argv;

  return {
    fixtureSettings: JSON.parse(fs.readFileSync(argv.settingsPath)),
    settingsPath: argv.settingsPath,
  };
};
