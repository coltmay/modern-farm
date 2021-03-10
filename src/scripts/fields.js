// Defining an empty variable to hold all of the plants that are generated.
let fieldArray = [];

// A function that takes a created seed, then add it to the field.
export const addPlant = (seedObject) => {
    //  First checks if the seedObject is an object or an array (corn!)
    if (Array.isArray(seedObject) === false) {
        fieldArray.push(seedObject);
    } else {
        // It's corn, so let's push both objects in the array!
        fieldArray.push(seedObject[0]);
        fieldArray.push(seedObject[1]);
    }
}

// An exported function to return fieldArray.
export const usePlants = () => {
    return fieldArray;
}