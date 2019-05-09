let faceDetector, codeDetector, textDetector;

p5.prototype.detectFaces = function(frame) {
  if (window.FaceDetector == undefined) {
    console.error('Face Detection not supported. '+
    'Make sure that you are running the latest Chrome and that you have '+
    'enabled flags at chrome://flags/#enable-experimental-web-platform-features');
    return;
  } else if(faceDetector === undefined) {
    faceDetector = new FaceDetector();
  }
  let res = [];
  let data;

  if(frame instanceof p5.Image) {
    frame.loadPixels();
    data = frame.imageData;
  } else if (frame instanceof p5.MediaElement) {
    data = frame.elt;
  }

  faceDetector.detect(data).
    then((faces) => {
      for(let i=0; i<faces.length; i++) {
        res.push(
          {
            x: faces[i].boundingBox.x,
            y: faces[i].boundingBox.y,
            w: faces[i].boundingBox.width,
            h: faces[i].boundingBox.height
          }
        );
      }
    }).
    catch((e) => {
    });
  return res;
};

// Barcode and QR code not working as of this commit but leaving this work here
p5.prototype.detectCodes = function(frame) {
  if (window.BarcodeDetector == undefined) {
    console.error('Bar and QR Code Detection not supported. '+
    'Make sure that you are running the latest Chrome and that you have '+
    'enabled flags at chrome://flags/#enable-experimental-web-platform-features');
    return;
  } else if(codeDetector === undefined) {
    codeDetector = new BarcodeDetector();
  }

  let res = [];
  let data;

  if(frame instanceof p5.Image) {
    frame.loadPixels();
    data = frame.imageData;
  } else if (frame instanceof p5.MediaElement) {
    data = frame.elt;
  }
  
  codeDetector.detect(data).
    then((codes) => {
      for(let i=0; i<codes.length; i++) {
        res.push(
          {
            x: codes[i].boundingBox.x,
            y: codes[i].boundingBox.y,
            w: codes[i].boundingBox.width,
            h: codes[i].boundingBox.height
          }
        );
      }
    }).
    catch((e) => {
    });

  return res;
};

p5.prototype.detectText = function(frame) {
  if (window.TextDetector == undefined) {
    console.error('Text Code Detection not supported. '+
    'Make sure that you are running the latest Chrome and that you have '+
    'enabled flags at chrome://flags/#enable-experimental-web-platform-features');
    return;
  } else if(textDetector === undefined) {
    textDetector = new TextDetector();
  }

  let res = [];
  let data;
  let pd = 1;

  if(frame === undefined) {
    data = this.canvas;
    pd = this._pixelDensity;
  } else if (frame instanceof p5.Image) {
    frame.loadPixels();
    data = frame.imageData;
  } else if (frame instanceof p5.MediaElement) {
    data = frame.elt;
  } else {
    console.error('Incorrect argument passed to detectText(). Check documentation.');
  }
  textDetector.detect(data).
    then((texts) => {
      for(let i=0; i<texts.length; i++) {
        res.push(
          {
            x: texts[i].boundingBox.x / pd,
            y: texts[i].boundingBox.y / pd,
            w: texts[i].boundingBox.width / pd,
            h: texts[i].boundingBox.height / pd,
            text: texts[i].rawValue
          }
        );
      }
    }).
    catch((e) => {
    });
  return res;
};