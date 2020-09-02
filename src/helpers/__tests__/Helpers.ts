import Sanitize from '../Helpers';

it('Empty string returns empty string', () => {
  expect(Sanitize("")).toEqual("");
});

it('Weird characters are eliminated', () => {
  expect(Sanitize("+*/ěščýřžíáí\\´=")).toEqual("");
});

it('Generic GIT login name passes', () => {
  expect(Sanitize("ohmy-CZ_test")).toEqual("ohmy-CZ_test");
});