var MAIN = (function (DATA) {

  var lib = {};

  /*
    realizar las operaciones usando los metosos map,  reduce y filter y combinaciones entre ellos
  */

  // Retornar una array de strings (el nombre de los usarios de sexo femenino)
  lib.femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .map(function (user) {
        return user.name;
      });
  };

  // console.log(lib.femaleUsers());

  // Retornar una array de strings (el email de los usarios de sexo masculino)
  lib.maleUsersEmails = function () {
      return DATA
      .filter(function(user){
          return user.gender === 'male';
      })
      .map(function(user){
          return user.email;
      });
  };

  // console.log(lib.maleUsersEmails());

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
      return DATA
      .filter(function(user){
          return user.age > age;
      })
      .map(function(user){
          var mapedUser = {};
          mapedUser.name = user.name;
          mapedUser.email = user.email;
          mapedUser.age = user.age;

          return mapedUser;
      });
  };

  // console.log(lib.userOlderThan(33));

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function () {

      var masGrande = DATA
                      .reduce(function(prev, actual, index, array){
                          if(prev.age > actual.age){
                            return prev;
                          }
                          else{
                            return actual;
                          };
                      });

      var usuario = //usar DATA.filter con la edad de mas grande

      //ESTO FUNCIONA PERO NO ME TENDRIA EN CUENTA SI EXISTEN DOS CON LA MISMA EDAD
      // return DATA
      // .map(function(user){
      //     var mapedUser = {};
      //     mapedUser.name = user.name;
      //     mapedUser.age = user.age;

      //     return mapedUser;
      // })
      // .reduce(function(prev, actual, index, array){
      //     if(prev.age > actual.age){
      //       return prev;
      //     }
      //     else{
      //       return actual;
      //     };
      // });
      
  };

  console.log(lib.olderUser());

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function (age) {

  };

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function (age) {

  };

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function (age) {

  };

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function (age) {

  };

  return lib;

})(DATA);
