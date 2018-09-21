const puppeteer = require('puppeteer');
const openOpportunities = require('./automation/demoPaths/open-opportunity');
const addAccount = require('./automation/demoPaths/add-account');
const openContacts = require('./automation/demoPaths/open-contacts');

let instance = null;

async function getBrowserInstance () {
    if (!instance) {
        instance = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    }

    return instance;
}

(async () => {
    const browser = await getBrowserInstance();
    let pages = await browser.pages();

    pages.forEach(async (page) => {
        await page.close();
    });

    setInterval(async () => {
        try {
            await openOpportunities(browser);
            await addAccount(browser);
            await openContacts(browser);
        } catch (error) {
            console.error(error);
            await browser.close();
            return process.exit(error);
        }
    }, 120000);
})();
