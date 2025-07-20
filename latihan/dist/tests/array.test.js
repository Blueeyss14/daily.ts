"use strict";
describe('Array', function () {
    it('should be with js', function () {
        const names = ["miwa", "onigiri", "teriyaki"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    //read only
    it('should support readonly Array', function () {
        const hobbies = ["Read", "Write"];
        console.info(hobbies);
    });
});
