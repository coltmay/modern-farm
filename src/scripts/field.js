/*  [X] Create a scripts/field.js module.
    [X] Define a variable in this module whose initial value is an empty array. 
        This array will store all of the plants that are growing in the field. 
        Do not export the array.
------------------------------------------------------------------------------------*/
const field = [];

/*  [X] In the module, define and export a function named addPlant.
    [X] The addPlant function must accept a seed object as input. 
        The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
------------------------------------------------------------------------------------*/
export const addPlant = (seedObject) => {
    return field.push(seedObject);
}
/*  [X] Define and export a function named usePlants that returns a copy of the array of plants.
        Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds.
    [ ] Investigate the Array.isArray method to check if corn got passed in, or one of the others.
------------------------------------------------------------------------------------*/
export const usePlants = () => {
    return field;
}
