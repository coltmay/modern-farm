import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./fields.js"
import { plantSeeds } from "./tractor.js"
const yearlyPlan = createPlan()

/* Temporary To Test Code
----------------------------------
createPotato()
createAsparagus()
createWheat()

addPlant(createPotato)
addPlant(createAsparagus)
addPlant(createWheat)

let tempPlant = usePlants()

console.log(tempPlant);
--------------------------------*/

/* Temporary To Test Code
----------------------------------*/
console.log(yearlyPlan);

let testArray = [
    "Asparagus", 
    "Wheat",
    "Potato",
    "Corn"  // Corn is the issue.  Since it's two arrays.
];

console.log(testArray);
    
console.log(plantSeeds(testArray));

/*--------------------------------*/