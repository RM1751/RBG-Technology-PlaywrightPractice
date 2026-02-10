function display(id:number): void{
    console.log("The id is: " + id);
}

display(123); // Output: The id is: 123'
//display("ABC"); bad practice, it will cause a compile-time error because the parameter type is defined as number, not string.
//dispaly(id:number);// This is also a bad practice because it is not a valid function call. The correct way to call the function is to pass a number as an argument, like display(123).

//let abc=20;
//display(abc); // Output: The id is: 20, this is valid because abc is a number and can be passed as an argument to the display function.

