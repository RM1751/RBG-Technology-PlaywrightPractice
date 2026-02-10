function display(id:number, name:string): void{
    console.log("The id is: " + id);
    console.log("The name is: " + name);
    console.log("The id is: " + id + ", The name is: " + name);
}
display(123, "John Doe"); // Output: The id is: 123, The name is: John Doe
//display(456); // This is a bad practice because it will cause a compile-time error due to missing the second parameter 'name' which is required by the function definition. The correct way to call the function is to provide both parameters, like display(123, "John Doe").
//display("ABC", 789); // This is also a bad practice because it will cause a compile-time error due to the first parameter 'id' being defined as a number, not a string. The correct way to call the function is to pass a number for the 'id' parameter and a string for the 'name' parameter, like display(123, "John Doe").

function display2(id:number|string): void{ // union opertorThis function accepts a parameter that can be either a number or a string, allowing for more flexibility in the types of arguments that can be passed to it.
    console.log("The id is: " + id);
}
display2(123); // Output: The id is: 123
display2("ABC"); // Output: The id is: ABC, this is valid because the parameter type is defined as a union type (number|string), allowing both numbers and strings to be passed as arguments to the display2 function.