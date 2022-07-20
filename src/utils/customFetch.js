// Simulation status ok
let simulationPromise = 200;

const customFetch = (time, promiseData) => {
  return new Promise((resolve, reject) => {
    if (simulationPromise === 200) {
      setTimeout(() => {
        resolve(promiseData);
      }, time);
    } else {
      reject("Error al cargar productos");
    }
  });
};

export default customFetch