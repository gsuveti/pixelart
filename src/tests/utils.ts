export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))
export const tick = () => delay(0);
