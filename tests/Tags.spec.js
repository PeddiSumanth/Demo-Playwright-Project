const{test, expect} = require('@playwright/test');

test('test 1 @sanity', async ({page}) => {
    console.log("This is test 1")

})

test('test 2 @regression', async ({page}) => { 
    console.log("This is test 2")

})

test('test 3 @sanity', async ({page}) => {
    console.log("This is test 3")

})

test('test 4 @regression @sanity', async ({page}) => {
    console.log("This is test 4")

})