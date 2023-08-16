const shallowObjClone = require('./tests/shallowObjClone')

test('Create a clone of the object paramter', () => {
    const obj = { person: 'hello', number: 42 }
    expect(shallowObjClone(obj)).toStrictEqual(obj)
})