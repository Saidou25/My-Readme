const writeToFile = require("./index");


test("should return an object containing a 'string when called with the 'new' key word", () => {
    const word = "hello"
    expect(writeToFile(word).toEqual("hello"))
})