var HTMLToPDF, htmlToPDF;

HTMLToPDF = require('html5-to-pdf');

htmlToPDF = new HTMLToPDF({
  inputPath: '../test.html',
  outputPath: 'divya.pdf',
  include: [
   {
    "type": "css",
    "filePath": "../test.css"
   },
   {
    "type": "css",
    "filePath": "bootstrap.min.css"
   }
  ],
  options: {
    "landscape": false,
    "pageSize": "Legal"
  }
});

htmlToPDF.build((function(_this) {
  return function(error) {
    if (error != null) {
      throw error;
    }
  };
})(this));
