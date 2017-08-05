var HTMLToPDF, htmlToPDF;

HTMLToPDF = require('html5-to-pdf');

htmlToPDF = new HTMLToPDF({
  inputPath: './test/test.html',
  outputPath: './tmp/out.pdf',
  template: 'htmlbootstrap',
  include: [
   {
    "type": "css",
    "filePath": "./test/test.css"
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
    else {
	console.log('output generated: ' + outputPath);
    }
  };
})(this));
