import fixturePropType from './fixturePropType.js';
import tsType from './tsType.js';

export default (propType) => {
  switch (propType) {
    case fixturePropType.string:
    case fixturePropType.dateString:
    case fixturePropType.datetimeString:
      return tsType.string;
    case fixturePropType.integer:
    case fixturePropType.number:
      return tsType.number;
    case fixturePropType.boolean:
      return tsType.boolean;
    case fixturePropType.date:
      return tsType.Date;
    default:
      return tsType.unknown;
  }
};
