export const rotateArray = (array: any[], times: number) => {
  for (let i = 0; i < times; i++) {
    array.push(array.shift());
  }
  return array
}
