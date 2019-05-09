# p5.detect

![A black box with a drawing of Hannah Arendt, with a quote that says "There is a strange interdependence between thoughtlessness and evil." The white text is surrounded by purple boxes which repeat the text again above each box.](/imgs/arendt-text-detection.png?raw=true "Optional Title")

This is a library to make it easier to work with Chrome's [Shape Detection API](https://wicg.github.io/shape-detection-api/) with [p5.js](https://p5js.org/). The Shape Detection API leverages hardware acceleration to make a few common object detections faster. The objects that it can detect currently are Barcodes, QRcodes, Faces, and Text. 

The Shape Detection API is still experimental. You can check on the support status at this link.

Currently **only macOS 10.13+, Android (with Play support libraries), and Windows 10 are supported**. This will almost certainly change with future releases of Chrome. Also Firefox has expressed public support. I will continue to update this library as the API stabilizes but I also welcome contributions.

#### IMPORTANT NOTE: you must enable experimental features in Chrome by entering `chrome://flags/#enable-experimental-web-platform-features` as a URL into your Chrome browser and clicking ENABLE.

Examples working on Online Editor *-- tested 5-9-19 on Windows 10 Chrome 74.0.3729.131*
- [Text Detection](https://editor.p5js.org/stalgiag/sketches/gWt90AgKg)
- [Webcam Face Detection](https://editor.p5js.org/stalgiag/sketches/PTjy00828)
