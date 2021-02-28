import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// Side question, is importing addPlant necessary since the plantSeeds function is also being exported to main.js?  Commenting this import out SEEMED to break everything?  Maybe?
import { addPlant } from "./fields.js";
/*
    [X] Create a scripts/tractor.js module.

    [X] In this module, define and export a plantSeeds function.

    [X] The function must accept the year's planting plan as input (i.e. it must define a parameter).
        The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 

    [X] As you iterate the row of food types to be planted, invoke the corresponding factory function 
        (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).

    [X] Take that seed and add it to the array of plants in the field module.
*/
export const plantSeeds = (planArr) => {
    //  [?] Figure out how to iterate both the parent array and the child arrays. 
    
    //  My thought process about this function:
    //  Takes length of the array, and loops through it incrementally up to that value, while it is looping...
    for (let i = 0; i < planArr.length; i++) {
        // ...It checks if the value is an array.  If it is NOT an array...
        if (planArr[i].constructor !== Array) {
            // ...It checks the value, then invokes the addPlant function appropriate for each value.  Console logs have been added for debugging purposes.
            switch (planArr[i]) {
                case "Soybean":
                    console.log("Soybean!");
                    addPlant(createSoybean());
                    break;
                case "Asparagus":
                    console.log("Asparagus!")
                    addPlant(createAsparagus());
                    break;
                case "Wheat":
                    console.log("Wheat!")
                    addPlant(createWheat());
                    break;
                case "Potato":
                    console.log("Potato!")
                    addPlant(createPotato());
                    break;
                case "Sunflower":
                    console.log("Sunflower!")
                    addPlant(createSunflower());
                    break;
                default:
                    console.log("Warning.  Something Defaulted!");
            }
        }
        // ...If it IS an array (in this case, only corn), it tries to...
        else {
            // Probably need another for loop here?
            console.log("Corn...");
            // ...Invoke the addPlant function to the first object in the corn array.
            addPlant(createCorn();
            // ...Invoke the addPlant function to the second object in the corn array.
            addPlant(createCorn();
            break;
        }
    }
}

/*
    [ ] In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module.
    [ ] Then use console.log() to see if the plants array has been populated correctly.
*/