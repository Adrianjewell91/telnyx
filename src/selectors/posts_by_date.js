export const sortPostsByDate = (posts) => {
  //get an array: [[id,date]...],

  let array = [];
  Object.keys(posts).forEach((id) => {
    array.push([id, posts[id].publish_date])
  })
  //sort the array by the date, there you have it.
  //how does this work exactly?
  //I should write a unit test for this.
  // array.sort(function(a, b) {
  //   return a[1] - b[1];
  // });
  array.sort(function(a,b) {
  a = a[1].split('-').join('');
  b = b[1].split('-').join('');
  return a > b ? 1 : a < b ? -1 : 0;
});
  // console.log(array);

  return array.reverse();
}
