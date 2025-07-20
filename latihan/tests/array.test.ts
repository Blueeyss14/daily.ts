describe('Array', function() {
    it('should be with js', function() {

        const names: string[] = ["miwa", "onigiri", "teriyaki"];
        const values: number[] = [1,2,3];

        console.info(names);
        console.info(values);

    });

    //read only
    it('should support readonly Array', function() {
        const hobbies: ReadonlyArray<string> = ["Read", "Write"];
        console.info(hobbies);
    });
});