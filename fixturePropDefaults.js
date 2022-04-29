import fixturePropType from './fixturePropType.js';

const defaults = {};

defaults[fixturePropType.string] = () => 'string_' + Math.ceil(Math.random() * 100000000);
defaults[fixturePropType.integer] = () => Math.ceil(Math.random() * 1000);
defaults[fixturePropType.number] = () => Math.ceil(Math.random() * 100000) / 100;
defaults[fixturePropType.boolean] = () => Math.random() > 0.5;
defaults[fixturePropType.dateString] = () => new Date().toISOString().split('T')[0];
defaults[fixturePropType.datetimeString] = () => new Date().toISOString();

export default defaults;
