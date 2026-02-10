function dispaly(name:string, id?:number): void{
    console.log("The name is: " + name + " and the id is: " + id);
    console.log("The name is: " + name + " and the id is: " + id);
    

}   

dispaly("John", 123); // Output: The name is: John and the id is: 12
dispaly("Doe"); // Output: The name is: Doe and the id is: undefined, this is valid because the parameter 'id' is defined as optional (id?:number), allowing the function to be called without providing an argument for 'id'. In this case, 'id' will be undefined when the function is executed.
