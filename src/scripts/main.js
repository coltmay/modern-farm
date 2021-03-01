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
/*
    [ ] In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module.
    [ ] Then use console.log() to see if the plants array has been populated correctly.
*/
createPlan();
