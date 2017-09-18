let fs = require("fs"),
	PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData =>
// 	console.error(errData.parserError)
// );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// 	fs.writeFile(__dirname + "/test.json", JSON.stringify(pdfData));
// });

let pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData =>
	console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", pdfData => {
	fs.writeFile(__dirname + "/content.txt", pdfParser.getRawTextContent());
});

pdfParser.loadPDF(__dirname + "/test.pdf");
