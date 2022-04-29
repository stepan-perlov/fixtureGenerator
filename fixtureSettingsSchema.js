import fixturePropType from './fixturePropType.js';

export default {
  type: 'object',
  properties: {
    fixtureName: {
      type: 'string',
    },
    fixtureProps: {
      type: 'array',
      items: {
        anyOf: [
          {
            $ref: '#/properties/__singleProp__',
          },
          {
            type: 'array',
            items: {
              $ref: '#/properties/__singleProp__',
            },
          },
        ],
      },
    },
    __singleProp__: {
      anyOf: [
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.string] },
            propDefault: { type: 'string' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.integer] },
            propDefault: { type: 'integer' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.number] },
            propDefault: { type: 'number' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.boolean] },
            propDefault: { type: 'boolean' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.date] },
            propDefault: { type: 'string' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.dateString] },
            propDefault: { type: 'string' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.datetimeString] },
            propDefault: { type: 'string' },
          },
          required: ['propName', 'propType'],
        },
        {
          type: 'object',
          properties: {
            propName: { type: 'string', pattern: '\\w[\\w\\d_]*' },
            propType: { enum: [fixturePropType.fixture] },
            fixtureSettings: {
              $ref: '#/',
            },
          },
          required: ['propName', 'propType'],
        },
      ],
    },
  },
};
