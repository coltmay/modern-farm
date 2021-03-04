// Importing all functions.
import { usePlants } from "./fields.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

// Assigning the random plan to a variable.
const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const plantedfield = usePlants();

const harvestedField = harvestPlants(plantedfield);

// catalog(harvestedField);