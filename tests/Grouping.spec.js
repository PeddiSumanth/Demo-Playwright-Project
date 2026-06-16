const{test, expect} = require('@playwright/test');

test.beforeAll(async ({browser}) => {
    console.log("This is before all hook")
})

test.afterAll(async ({browser}) => {
    console.log("This is after all hook")
})

test.beforeEach(async ({browser}) => {
    console.log("This is before each hook")
})

test.afterEach(async ({browser}) => {
    console.log("This is after each hook")
})

test.describe('Grouping tests', () => {
test('Grouping test 1', async ({page}) => {
    console.log("This is grouping test 1")


})

test('Grouping test 2', async ({page}) => {
    console.log("This is grouping test 2")


})
})

test.describe('Grouping tests-2', () => {
test('Grouping test 3', async ({page}) => {
    console.log("This is grouping test 3")


})

test('Grouping test 4', async ({page}) => {
    console.log("This is grouping test 4")


})

})