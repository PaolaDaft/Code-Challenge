const fs = require("fs");
const Reader = require("../../lib/utils/reader");

describe("Unit Tests for Reader class", () => {
    test("1) Part 1 Read json file", () => {
        const visualpartners = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo
        const rawdata = fs.readFileSync("visualpartners.json");
    
        expect(visualpartners).toEqual(JSON.parse(rawdata));
    });
});