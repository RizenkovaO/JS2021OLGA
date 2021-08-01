const currentDate = new Date();

console.log(currentDate, typeof currentDate);

// For not making it as an obejct, we have to parse it:
console.log(currentDate.toDateString());
console.log(currentDate.toUTCString());

const name = "Arturs";
const pattern = `Dr. :name:`;

// new RegExp(':name:');
// /:name:/

console.log(pattern.replace(/:name:/, name));

//practice regular expressions.
//go through asinc functions
