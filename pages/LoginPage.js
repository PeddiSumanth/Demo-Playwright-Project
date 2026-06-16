export class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginlink = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginbutton = page.locator("button[onclick='logIn()']");
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(username, password) {
        await this.loginlink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}
