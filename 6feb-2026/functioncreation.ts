function funA()
{
    console.log("This is function A");
    funB();// stack overflow --.CALLING FUNTION INSIDE ITSELF
}   
function funB()
{
    console.log("This is function B");
    funA();// stack overflow --.CALLING FUNTION INSIDE ITSELF   
} 


funA();
funB();

