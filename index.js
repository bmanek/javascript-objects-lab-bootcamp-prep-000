var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newThing = Object.assign({}, object, {key: [value]});
  return object, newThing;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = [value];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object, {key});
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}