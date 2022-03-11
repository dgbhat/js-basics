/* 1. destructuring a few levels deep*/
const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
            blog: 'https://wesbos.com'
        }
    }
};

const {twitter, facebook} = wes.links.social;
console.log(twitter, facebook);
//destructuring way

const twitter = wes.links.social.twitter;
const facebook = wes.links.social.facebook;
// Traditional way


/* 2. Destructuring Array with Spread op
*
* */
const [num, ...subArr] = [1,2,3,4,5];
console.log(num); // 1
console.log(subArr); // [2, 3, 4, 5]


/* 3. Destructuring Object with Spread op
*
* */
const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const w = {x, y, ...z};
console.log(w); // { x: 1, y: 2, a: 3, b: 4 }