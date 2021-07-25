"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSoyFatherCondition = exports.getSoyHs = void 0;
const getSoyHs = (height) => {
    if (height < 0.5) {
        return 6;
    }
    if (height < 1 && height >= 0.5) {
        return 7;
    }
    return 9;
};
exports.getSoyHs = getSoyHs;
const getSoyFatherCondition = (data) => {
    const { height, year } = data;
    return (year > 2007 && height > 1);
};
exports.getSoyFatherCondition = getSoyFatherCondition;
//# sourceMappingURL=soyHelper.js.map