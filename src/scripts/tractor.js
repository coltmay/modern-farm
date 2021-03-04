import { addPlant } from "./fields.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Exported function that takes plan as an input, then iterates over a nested array.
export const plantSeeds = (planArray) => {
    planArray.forEach(row => {
        row.forEach(plantType => {
            switch (plantType) {
                case "Asparagus":
                    const asparagusSeeds = createAsparagus();
                    addPlant(asparagusSeeds);
                    break;
                case "Corn":
                    const cornSeeds = createCorn();
                    addPlant(cornSeeds);
                    break;
                case "Potato":
                    const potatoSeeds = createPotato();
                    addPlant(potatoSeeds);
                    break;
                case "Soybean":
                    const soybeanSeeds = createSoybean();
                    addPlant(soybeanSeeds);
                    break;
                case "Sunflower":
                    const sunflowerSeeds = createSunflower();
                    addPlant(sunflowerSeeds);
                    break;
                case "Wheat":
                    const wheatSeeds = createWheat();
                    addPlant(wheatSeeds);
                    break;
                default:
                    console.log("Error Adding Plant");
                    break;
            }
        })
    })
};