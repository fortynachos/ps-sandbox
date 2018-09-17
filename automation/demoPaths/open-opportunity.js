const page = require('../page');
const { randomize } = require('../helpers');
const { listSelectors } = require('../fixtures/list');
const { layoutSelectors } = require('../fixtures/layout');
const allSelectors = listSelectors.concat(layoutSelectors);

module.exports = async (browser) => {
    const newPage = await browser.newPage();

    await newPage.goto('https://www.pendoexperience.io');
    await newPage.waitFor(1000);

    const guide = await newPage.$('._pendo-guide_');

    if (guide) {
        await guide.dispose();
    }

    await newPage.click('.ant-menu-item [href="/opportunities"]')
    await newPage.waitFor('.ant-spin-container.ant-spin-blur', { hidden: true });

    allSelectors.unshift('.ant-table-row-level-0 a');

    const distributions = [ 50, 65, 75, 85, 90, 94, 97, 99, 100 ];
    let selection = randomize(allSelectors, distributions);

    await newPage.click(selection);
    await newPage.close();
}
