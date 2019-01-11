var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  newObject = Object.assign({}, object, {key: [value]})
  return newObject;
}