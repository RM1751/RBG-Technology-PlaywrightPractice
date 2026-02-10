function display(id?:number): void{ // optional parameter
    console.log("The id is: " + id);
}
display(123); // Output: The id is: 123
display("abc"); // Output: The id is: undefined, this is valid because the parameter 'id' is defined as optional (id?:number), allowing the function to be called without providing an argument for 'id'. In this case, 'id' will be undefined when the function is executed.
