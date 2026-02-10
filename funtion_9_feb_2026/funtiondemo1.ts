function display(id:number,phone:number): void{

    let c:number= id+phone;
    console.log("The id is: " + c);
}
display(123,456); // Output: The id is: 123
//display(456); // This is a bad practice because it will cause a compile-time error due to missing the second parameter 'phone' which is required by the function definition. The correct way to call the function is to provide both parameters, like display(123, 456).

display(789, 1011,21); // Output: The id is: 1800, this is valid because both parameters are numbers and can be passed as arguments to the display function.