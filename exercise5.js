const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName="Simon";

// Modify the property `firstName` of the `person2` in "Simon".
/* Por como almacena las variables JS, cuando decimos que estamos copiando una variable de esta forma no la estamos copiando como tal,
es decir, no estamos creando una nueva. Por el contrario, lo que estamos haciendo es copiar la dirección. Como copiamos la dirección
no creamos un nuevo objeto, si modificamos person2, también estaríamos modificando person1.
*/

console.log(person1);
console.log(person2);
