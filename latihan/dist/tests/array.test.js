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
    //tuple
    it('should support tuple', function () {
        const person = ["Eko", "Khannedy", 30];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
