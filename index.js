const cv = require('opencv');

cv.readImage('img/loaded-logo.jpg', function(err, img) {
  // The loaded image is an Object
  // It represents the Basic Data Structure to work with in OpenCV - Matrix
  // Matrix, where one field is one pixel of the image
  // Matrix Size is defined by the size of the loaded image

  if (err) {
    throw err;
  }

  const width = img.width();
  const height = img.height();

  if (width < 1 || height < 1) {
    throw new Error('Image has no size.');
  }

  // do cool stuff
  // Grey Scale
  // img.convertGrayscale();

  // Red Background
  // img.convertHSVscale()

  // Cropping Image
  // var newImg = img.copy();
  // croppedImg = newImg.crop(500,500,500,500);
  // copyCroppedImg.save('./img/croppedImage.jpg');

  // img.dilate(3);
  img.erode(3);

  // save img
  img.save('./img/myNewImage.jpg');
});
