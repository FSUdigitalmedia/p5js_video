let capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  // the 5th argument below is to get the aspect ratio correct (height = width * ratio)
  image(capture, 0, 0, width, width*capture.height/capture.width);
  // filter(INVERT);
  // filter(OPAQUE);
  // filter(GRAY);
  // filter(ERODE);
  // filter(DILATE);
  // filter(THRESHOLD, .5); // 2nd parameter values between 0.0 (black) and 1.0 (white)
  // filter(POSTERIZE, 2); // 2nd parameter values between 2 and 255
  // filter(BLUR, 1); // default 2nd parameter is 1, high numbers mean more blur  
}
