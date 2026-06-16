const{test, expect} = require('@playwright/test');

/*test.only('test1', async ({page}) => {
    console.log("This is test 1")
})*/ 

/*test.skip('test2', async ({page}) => {
    console.log("This is test 2")
})*/

test('test2', async ({page, browserName}) => {

    if(browserName === 'Firefox'){
        test.skip()
    }

    console.log("This is test 2")
})

test('test3', async ({page}) => {
    console.log("This is test 3")
})






