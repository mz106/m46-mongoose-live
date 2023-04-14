const myFunc = (key, value) => {
  return {
    [key]: value,
  };
};

console.log(myFunc("name", "michael"));
console.log(myFunc("student", "alex"));
console.log(myFunc("breakfast", "toast"));
