const v_rifier = require('../data/v_rifier');

const undefinedVariable = undefined;

const static_data = [

  {
    input: undefinedVariable,
    expect: true,
  },

  {
    input: undefined,
    expect: true,
  },

  {
    input: 111,
    expect: false,
  },

  {
    input: null,
    expect: false,
  },

  {
    input: "",
    expect: false,
  },

  {
    input: false,
    expect: false,
  },

  {
    input: 0,
    expect: false,
  },

];

static_data.forEach(item => {
  test('UNDEFINED  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.isUndefined(item.input)).toEqual(item.expect);
  });
});