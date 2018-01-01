export const sortPostsByDate = (posts) => {
  //get an array: [[id,date]...],

  let array = [];
  Object.keys(posts).forEach((id) => {
    array.push([id,posts[id].publish_date])
  })
  //sort the array by the date, there you have it.
  array.sort(function(a, b) {
    return a[1] - b[1];
  });
  console.log(array);
  return array;
}
