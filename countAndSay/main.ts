// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) {
//         return false
//     }

//     const objToCheck = {};

//     for (let i = 0; i < s.length; i++) {
//         if (objToCheck[s[i]] === undefined) {
//             objToCheck[s[i]] = 1;
//         } else {
//             objToCheck[s[i]] = objToCheck[s[i]] + 1
//         }

//         if (objToCheck[t[i]] === undefined) {
//             objToCheck[t[i]] = -1;
//         } else {
//             objToCheck[t[i]] = objToCheck[t[i]] - 1
//         }
//     }

//     for (const prop in objToCheck) {
//         if (objToCheck[prop] !== 0) {
//             return false
//         }
//     }
//     return true
// };



// function isAnagram(s: string, t: string): boolean {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };

function isAnagram(s: string, t: string): boolean {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0)
};

