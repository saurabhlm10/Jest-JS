const isPalindrome = require('./isPalindrome')

test('checks 1111 to true ', () => {
    expect(isPalindrome('1111')).toBe(true)
    expect(isPalindrome('11112')).toBe(false)
})