function funA() {
    funC();
    console.log("funA of FunctionDemo5");
}
function funB() {
    funA();
    console.log("funB of FunctionDemo5");
}
function funC() {
    funB();
    console.log("funC of FunctionDemo5");
}
funC(); //funtion is calling lifo last in first out style
