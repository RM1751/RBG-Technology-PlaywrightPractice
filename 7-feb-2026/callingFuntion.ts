function funA(): void {
  console.log("funA of FunctionDemo5");
}

function funB(): void {
  console.log("funB of FunctionDemo5");
  funA();
}

function funC(): void {
  console.log("funC of FunctionDemo5");
  funB();
}

funC();
