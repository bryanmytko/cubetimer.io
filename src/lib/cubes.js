export const cube2x2 = [
  { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L'] },
  { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R'] },
  { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D'] },
  { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U'] },
  { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B'] },
  { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F'] }
];

export const cube3x3 = [
  { name: 'R', turns: ['R', 'R\'', 'R2'], restricted: ['R', 'L'] },
  { name: 'L', turns: ['L', 'L\'', 'L2'], restricted: ['L', 'R'] },
  { name: 'U', turns: ['U', 'U\'', 'U2'], restricted: ['U', 'D'] },
  { name: 'D', turns: ['D', 'D\'', 'D2'], restricted: ['D', 'U'] },
  { name: 'F', turns: ['F', 'F\'', 'F2'], restricted: ['F', 'B'] },
  { name: 'B', turns: ['B', 'B\'', 'B2'], restricted: ['B', 'F'] },
];

export const cube4x4 = [
  { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
  { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
  { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
  { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
  { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
  { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },

  { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
  { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
  { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
  { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
  { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
  { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
];

/* https://github.com/bryanmytko/cubetimes/blob/master/app/assets/javascripts/cubes.js */

// var cube_5x5 = {
//   'name': '5x5 Rubik\'s Cube',
//
//   'faces': [
//     { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
//     { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
//     { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
//     { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
//     { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
//     { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },
//
//     { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
//     { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
//     { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
//     { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
//     { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
//     { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
//   ]
// };
//
// var cube_6x6 = {
//   'name': '6x6 Rubik\'s Cube',
//
//   'faces': [
//     { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
//     { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
//     { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
//     { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
//     { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
//     { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },
//
//     { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
//     { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
//     { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
//     { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
//     { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
//     { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
//   ]
// };
//
// var cube_7x7 = {
//   'name': '7x7 Rubik\'s Cube',
//
//   'faces': [
//     { 'name': 'R', 'turns': ['R','R\'','R2'], 'restricted': ['L', 'l'] },
//     { 'name': 'L', 'turns': ['L','L\'','L2'], 'restricted': ['R', 'r'] },
//     { 'name': 'U', 'turns': ['U','U\'','U2'], 'restricted': ['D', 'd'] },
//     { 'name': 'D', 'turns': ['D','D\'','D2'], 'restricted': ['U', 'u'] },
//     { 'name': 'F', 'turns': ['F','F\'','F2'], 'restricted': ['B', 'b'] },
//     { 'name': 'B', 'turns': ['B','B\'','B2'], 'restricted': ['F', 'f'] },
//
//     { 'name': 'r', 'turns': ['r','r\'','r2'], 'restricted': ['L', 'l'] },
//     { 'name': 'l', 'turns': ['l','l\'','l2'], 'restricted': ['R', 'r'] },
//     { 'name': 'u', 'turns': ['u','u\'','u2'], 'restricted': ['D', 'd'] },
//     { 'name': 'd', 'turns': ['d','d\'','d2'], 'restricted': ['U', 'u'] },
//     { 'name': 'f', 'turns': ['f','f\'','f2'], 'restricted': ['B', 'b'] },
//     { 'name': 'b', 'turns': ['b','b\'','b2'], 'restricted': ['F', 'f'] }
//   ]
// };
//
// var cube_pyraminx = {
//   "name": "Pyraminx",
//
//   "faces": [
//     { 'name': 'U', 'turns': ['R','R\''], 'restricted': [] },
//     { 'name': 'R', 'turns': ['L','L\''], 'restricted': [] },
//     { 'name': 'L', 'turns': ['U','U\''], 'restricted': [] },
//     { 'name': 'B', 'turns': ['D','D\''], 'restricted': [] },
//
//     { 'name': 'u', 'turns': ['r','r\''], 'restricted': ['r', 'l', 'b'] },
//     { 'name': 'r', 'turns': ['l','l\''], 'restricted': ['u', 'l', 'b'] },
//     { 'name': 'l', 'turns': ['u','u\''], 'restricted': ['r', 'u', 'b'] },
//     { 'name': 'b', 'turns': ['d','d\''], 'restricted': ['r', 'l', 'u'] }
//   ]
// };
//
// var cube_megaminx = {
//   'name': 'Megaminx',
//
//   'faces': [
//     { 'name': 'R', 'turns': ['R', 'R++', 'R--'], 'restricted': [] },
//     { 'name': 'D', 'turns': ['D', 'D++', 'D--'], 'restricted': [] }
//   ],
//
//   'final': ['U', 'U\'']
// };
