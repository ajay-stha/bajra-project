const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
  
  myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('error',error);
  })
  .finally(() => {
    console.log('Operation completed');
  });
console.log('Testing console')

  const axiosRequest = fetch('https://httpstat.us/200')
  axiosRequest.then(response => {
    if (response.status === 200) {
        console.debug(response);
      } else {
        throw new Error("Something went wrong on API server!");
      }
  })
  .catch(error => {
    console.log("ERROR", error);
  })