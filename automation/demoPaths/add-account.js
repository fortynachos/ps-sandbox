const { randomize } = require('../helpers');
const { listSelectors } = require('../fixtures/list');
const { layoutSelectors } = require('../fixtures/layout');
const allSelectors = listSelectors.concat(layoutSelectors);

module.exports = async (browser) => {
    const newPage = await browser.newPage();

    await newPage.goto('https://www.pendoexperience.io');
    await newPage.waitFor(500);

    await newPage.evaluate(() => {
        window.pendo.setGuidesDisabled(true);
        window.pendo.stopGuides(true);

        return;
    });

    const guide = await newPage.$('._pendo-guide_');

    if (guide) {
        await guide.dispose();
    }

    await newPage.click('.ant-menu-item [href="/accounts"]')
    await newPage.waitFor('.ant-spin-container.ant-spin-blur', { hidden: true });

    allSelectors.unshift('#add-new');

    let selection = randomize(allSelectors);

    await newPage.click(selection);
    await newPage.close();
}
