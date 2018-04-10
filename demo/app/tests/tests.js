var Salesforce = require("nativescript-salesforce").Salesforce;
var salesforce = new Salesforce();

describe("greet function", function() {
    it("exists", function() {
        expect(salesforce.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(salesforce.greet()).toEqual("Hello, NS");
    });
});