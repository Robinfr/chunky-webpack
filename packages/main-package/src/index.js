import partLoader from 'sub-package-a';

console.log('Using part loader');

partLoader('a', 'b').then(partA => {
    console.log(partA);
});