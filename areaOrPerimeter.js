// const areaOrPerimeter = function(l , w) {
//     if(l !== w){
//       let rectangle  =  (l + w)*2
//       return rectangle
//     } else {
//       return l * w
//     }
//   };


  const areaOrPerimeterOptimized = function(l , w) {
  return l == w ? l*w : 2*(l + w)
};