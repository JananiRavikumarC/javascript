const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const unionSet = new Set([...a, ...b]);
const unionArray = [...unionSet];
console.log("Union of a and b:", unionArray);
const intersectionSet = new Set(a.filter(x => b.includes(x)));
const intersectionArray = [...intersectionSet];

console.log("Intersection of a and b:", intersectionArray);
const differenceSet = new Set(a.filter(x => !b.includes(x)));
const differenceArray = [...differenceSet];

console.log("Difference of a with b:", differenceArray);

// Find a union b
// Find a intersection b
// Find a with b