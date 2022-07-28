// Simulation status ok
let simulationPromise = 200;

const customFetch = (promiseData) => {
  return new Promise((resolve, reject) => {
    if (simulationPromise === 200) {
        resolve(promiseData);
    } else {
      reject("Error al cargar productos");
    }
  });
};

export default customFetch