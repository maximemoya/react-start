type Gen = {
    name:String
    number:number
}

const generator = (genetic: Gen):Gen => {
    genetic.name += "A"
    genetic.number += 1
    return genetic
}

// -------------
//  E X P O R T
// -------------

export const aTestGen:Gen = {
    name: "",
    number: 0
}
export const dnaGenerator = generator