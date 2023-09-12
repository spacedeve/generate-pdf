const express = require('express');
const bodyParser = require('body-parser');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(data);
        }
    });
});

app.post('/processFormData', async (req, res) => {
    const { name, email } = req.body;

    const pdfBytes = fs.readFileSync('example.pdf'); // Replace with your PDF file

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    form.getTextFieldOrNull('name').setText(name);
    form.getTextFieldOrNull('email').setText(email);

    const modifiedPdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=modified.pdf');
    res.send(modifiedPdfBytes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});