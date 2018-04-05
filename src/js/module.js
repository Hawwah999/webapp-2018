// export default function hello() {
//   console.log('Hello from JS Module');
// }

function hello() {
    console.log('Bonjour JS Module');
}

function quoiDe9() {
    console.log('Quoi de neuf...');
}

const inc = (x) => x + 3;



const capLettre = (str) => str.replace(/^[a-z]/, x => x.toUpperCase());

export {
    hello,
    quoiDe9,
    inc,
    capLettre
};
