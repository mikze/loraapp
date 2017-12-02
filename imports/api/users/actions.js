import { addNewToken as addNewTokenMethod} from './methods.js'

const addNewToken = (token) =>
new Promise((resolve, reject) => {
    addNewTokenMethod.call({ token }, (err, res) => {
    if (err) {
      const error = new Error(err);
      reject(error);
    }
    resolve(res);
  });
});


const actions = { addNewToken };

export { actions };