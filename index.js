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
  var object = { key: 'value'};
  var newObject = object.assign({}, object);
  delete newObject.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}