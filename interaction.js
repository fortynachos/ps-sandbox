const puppeteer = require('./automation/page');
const openOpportunities = require('./automation/demoPaths/open-opportunity');

(async () => {
    const { browser } = await puppeteer();

    setInterval(async () => {
        try {
            await openOpportunities(browser);
        } catch (error) {
            console.error(error);
            await browser.close();
            return process.exit(error);
        }
    }, 3000);
})();
