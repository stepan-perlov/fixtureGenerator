import lowerFirstChar from './lowerFirstChar.js';
import fixturePropType from './fixturePropType.js';
import fixturePropTypeToTs from './fixturePropTypeToTs.js';
import fixturePropDefaults from './fixturePropDefaults.js';

function arrayDefaultIfNeed(isArray, value) {
  return isArray ? `[${value}]` : value;
}

export default function parseFixtures(fixtureSettings, fixtureList) {
  const isRoot = !fixtureList;
  fixtureList = fixtureList || [];

  const fixture = {
    fileName: lowerFirstChar(fixtureSettings.fixtureName),
    fixtureName: fixtureSettings.fixtureName,
    props: [],
    nestedFixtures: [],
  };
  for (const item of fixtureSettings.fixtureProps) {
    const isArray = Array.isArray(item);
    const tsTypeSuffix = isArray ? '[]' : '';
    const target = isArray ? item[0] : item;
    switch (target.propType) {
      case fixturePropType.string:
      case fixturePropType.dateString:
      case fixturePropType.datetimeString:
        fixture.props.push({
          propName: target.propName,
          propType: target.propType,
          tsType: fixturePropTypeToTs(target.propType) + tsTypeSuffix,
          isArray,
          value: arrayDefaultIfNeed(isArray, `'${target.propDefault || fixturePropDefaults[target.propType]()}'`),
        });
        break;
      case fixturePropType.integer:
      case fixturePropType.number:
      case fixturePropType.boolean:
      case fixturePropType.date:
        fixture.props.push({
          propName: target.propName,
          propType: target.propType,
          tsType: fixturePropTypeToTs(target.propType) + tsTypeSuffix,
          isArray,
          value: arrayDefaultIfNeed(isArray, target.propDefault || fixturePropDefaults[target.propType]()),
        });
        break;
      case fixturePropType.fixture:
        const nestedFixture = parseFixtures(target.fixtureSettings, fixtureList);
        fixture.props.push({
          propName: target.propName,
          propType: fixturePropType.fixture,
          tsType: nestedFixture.fixtureName + tsTypeSuffix,
          isArray,
          value: nestedFixture.fixtureName,
        });
        fixture.nestedFixtures.push({
          fixtureName: nestedFixture.fixtureName,
          fileName: nestedFixture.fileName,
          isArray,
          propName: target.propName,
        });
        break;
    }
  }
  fixtureList.push(fixture);

  return isRoot ? fixtureList : fixture;
}
