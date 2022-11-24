type Gen = {
    name: String
    number: number
}

class GenClass implements Gen {
    name: String = "Default"
    number: number

    constructor(number: number, name: String | null = null) {
        if(name != null) this.name = name
        this.number = number
    }

}
const test = 1

const dnaGenerator = (number: number, name: String = ""): Gen =>
    name === "" ? new GenClass(number) : new GenClass(number, name)

const dnaGen = dnaGenerator(45)

// -------------
//  E X P O R T
// -------------

export const DnaGenerator = dnaGenerator