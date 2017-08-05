var HTMLToPDF, htmlToPDF;

HTMLToPDF = require('html5-to-pdf');

htmlToPDF = new HTMLToPDF({
  inputPath: '../test.html',
  outputPath: 'divya.pdf'
});

htmlToPDF.build((function(_this) {
  return function(error) {
    if (error != null) {
      throw error;
    }
  };
})(this));
