let loaderState;
export const loaderUtil = {
  start: (delay = 700) => {
    loaderState = new Promise((resolve, reject) => setTimeout(() => resolve(), delay));
  },
  complete: () => {
    return loaderState;
  }
};
