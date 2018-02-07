import partLoader from 'sub-package-a';

console.log('Using part loader');

partLoader('a').then(partA => {
    console.log(partA.default);
});