// abstract class ma hum wo define karay ga jo huma chahiye hoga
// srif intilize karay gayn

abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;

    constructor(name: string, language: string, population: number, populationGrowth: number) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowth;
    }

    public abstract populationGrowth(): number;

}


class OICCountry extends Country {
    constructor(name: string, language: string, population: number, populationGrowth: number) {
        super(name, language, population, populationGrowth);

    }

    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 108)
        return this.population;
    }

}

let pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5);
pakistan.populationGrowth();
console.log(pakistan);


