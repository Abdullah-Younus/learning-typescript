// abstract class ma hum wo define karay ga jo huma chahiye hoga
// srif intilize karay gayn
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowth) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowth;
    }
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowth) {
        return _super.call(this, name, language, population, populationGrowth) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * this.populationGrowthRate;
        return this.population;
    };
    return OICCountry;
}(Country));
var pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5);
console.log(pakistan);
