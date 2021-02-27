import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
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