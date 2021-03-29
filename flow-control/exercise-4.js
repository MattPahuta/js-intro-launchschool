// Exercise 4 - What does the following code log to the console, why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      // break;
    case '113':
      console.log('Product2');
      // break;
    case '142':
      console.log('Product3');
      // break;
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
/* 
  Logs:
  'Product2'
  'Product3'
  'Product not fount!'

  There are no break statements for the case clauses. The first matched case (113) logs and so do the rest, falling through, including default.
*/