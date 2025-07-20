import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should be return hello miwa', function () {
        expect(sayHello('miwa')).toBe('Hello miwa');
    });
});
