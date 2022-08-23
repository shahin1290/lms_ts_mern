const person = {
  name: "Tom",
  age: 20,
  toJSON() {
    return "dom";
  },
};

console.log(JSON.stringify(person));
