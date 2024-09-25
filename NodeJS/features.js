const fullName = "Pranav Avasthi";
const fullName2 = "Random2 Name";
const fullName3 = "Random3 Name";

// Another way to export explicitly
// export const fullName2 = "Random2 Name";
// export const fullName3 = "Random3 Name";

export const generateRandomPercentage = () => {
  return `${Math.floor(Math.random() * 100)}%`;
//   return `${~~(Math.random() * 100)}%`; // can use this also instead of Math.floor()
};

export default fullName; // accessible in index.js with any name since it's the default export.
export { fullName2, fullName3 }; // explicit export, only be accessible in index.js if put same name as here.
