export const SAY_NAME =  'SAY_NAME';

export  default sayName = (name) => {
  return{
    type: SAY_NAME,
    name
  }
  console.log("Say name action has now been called")
}
