//harvestedSeeds is an emptry array, until we harvest.
let harvestedSeeds = [];

// harvestPlants takes in a fieldArray, and returns a seed array full of objects, we're "harvesting" the plants.
export const harvestPlants = (fieldArray) => {
    fieldArray.forEach(plantObject => {
        if (plantObject.type === "Corn") {
            for (let i = 0; i < (plantObject.output / 2); i++) {
                harvestedSeeds.push(plantObject);
            }
        } else {
            for (let i = 0; i < plantObject.output; i++){
                harvestedSeeds.push(plantObject);
            }
        }
    });
    return harvestedSeeds;
}