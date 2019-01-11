var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {key: [value]})
  return newObject;
}