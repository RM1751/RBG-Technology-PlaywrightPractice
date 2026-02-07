function funA() {
    console.log("funA of FunctionDemo5");
}
function funB() {
    console.log("funB of FunctionDemo5");
    funA();
}
function funC() {
    console.log("funC of FunctionDemo5");
    funB();
}
funC();
