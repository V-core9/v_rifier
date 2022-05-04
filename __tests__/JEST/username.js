const v_rifier  = require('../data/v_rifier');
const static_data = require("../data/username.list");

static_data.forEach(item => {
  test('USERNAME  ?? [ ' + item.input + ' ]', async () => {
    expect(await v_rifier.isUsername(item.input)).toEqual(item.expect);
  });
});

// Dynamic Part
var faker = require('faker');
const { test_count } = require('../data/_SETTINGS');

var fItems = [];
for (var i = 0; i < test_count; i++) {
  fItems.push(faker.internet.userName());
}

fItems.forEach(item => {
  test('Faker Username : ' + item, async () => {
    expect(await v_rifier.isUsername(item)).toEqual(true);
  });
});