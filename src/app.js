window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generarExcusa();
  });
};

let generarExcusa = () => {
  let sust = [
    "el cartero ",
    "un pulpo ",
    "un perro ",
    "papá ",
    "un payaso ",
    "la abuela ",
    "un policia ",
    "el presidente "
  ];
  let accion = [
    "cogió mi ",
    "tiró mi ",
    "orinó mi ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let objeto = [
    "dedo gordo del pie ",
    "bicicleta ",
    "reloj ",
    "zapato ",
    "cartera ",
    "camiseta ",
    "nintendo ",
    "ordenador ",
    "telefono ",
    "bocadillo "
  ];
  let lugar = [
    "en la calle",
    "en el colegio",
    "en la carretera",
    "frente a la tienda de comics",
    "cerca del centro comercial",
    "cerca del baño",
    "en la estacion de autobus"
  ];

  // variables random
  let rdm1 = Math.floor(Math.random() * sust.length);
  let rdm2 = Math.floor(Math.random() * accion.length);
  let rdm3 = Math.floor(Math.random() * objeto.length);
  let rdm4 = Math.floor(Math.random() * lugar.length);

  return (
    sust[rdm1] + " " + accion[rdm2] + " " + objeto[rdm3] + " " + lugar[rdm4]
  );
};
