const randomize = function (options, distributions) {
    const randNum = Math.random() * 100;
    const usedDistributions = distributions || evenlyDistribute(options.length);

    if (randNum < usedDistributions[0]) {
        return options[0];
    } else if (randNum <= usedDistributions[1]) {
        return options[1];
    } else if (randNum <= usedDistributions[2]) {
        return options[2];
    } else if (randNum <= usedDistributions[3]) {
        return options[3];
    } else if (randNum <= usedDistributions[4]) {
        return options[4];
    } else if (randNum <= usedDistributions[5]) {
        return options[5];
    } else if (randNum <= usedDistributions[6]) {
        return options[6];
    } else {
        return options[7];
    }
}

function evenlyDistribute (count) {
    switch (count) {
        case 2:
            return [ 75, 100 ];
            break;
        case 3:
            return [ 50, 80, 100 ];
            break;
        case 4:
            return [ 50, 75, 90, 100 ];
            break;
        case 5:
            return [ 40, 65, 85, 95, 100 ];
            break;
        case 6:
            return [ 35, 55, 70, 85, 95, 100 ];
            break;
        default:
            return [ 30, 50, 65, 80, 90, 95, 100 ];
            break;
    }
}

module.exports = {
    randomize
};
