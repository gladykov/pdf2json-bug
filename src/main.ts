import PDFParser from 'pdf2json';

export async function parsePDF(filepath: string) {
  // This package has bad types. Got tired of fixing it for them.
  // https://github.com/modesty/pdf2json

  /* eslint-disable-next-line */
  const pdfParser = new PDFParser(this, true);

  /* eslint-disable-next-line */
  pdfParser.on('pdfParser_dataError', (errData) => console.error(errData.parserError));
  /* eslint-disable-next-line */
  pdfParser.on('pdfParser_dataReady', (_) => {
  });

  /* eslint-disable-next-line */
  await pdfParser.loadPDF(filepath);

  // https://github.com/modesty/pdf2json
  return pdfParser.getRawTextContent();
}
