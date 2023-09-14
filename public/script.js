document.getElementById('userInfoForm').addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const businessName = document.getElementById('business-name').value;
    const selectedTax = document.querySelector('input[name="federal-tax-classification"]:checked').value;
    const taxClassification = document.getElementById('tax-classification').value;
    const otherFederalTaxClassification = document.getElementById('other-federal-tax-classification').value;
    const exemptPayeeCode = document.getElementById('exempt-payee-code').value;
    const exemptionFromFatcaReportingCode = document.getElementById('exemption-from-fatca-reporting-code').value;
    const address = document.getElementById('address').value;
    const cityStateZipCode = document.getElementById('city-state-zip-code').value;
    const accountNumbers = document.getElementById('account-numbers').value;

    const images = [
        'fw9_page-0001.jpg',
        'fw9_page-0002.jpg',
        'fw9_page-0003.jpg',
        'fw9_page-0004.jpg',
        'fw9_page-0005.jpg',
        'fw9_page-0006.jpg'
    ];

    generatePDF(images);
});

fucntion generatePDF(images) {

    const doc = new jsPDF();
    images.forEach((imageName, index) => {
        if (index > 0) {
            doc.addPage();
        }
    });

    const img = new Image();
    img.src = `bg-image/${imageName}`;

    img.onload = () => {
        doc.addImage(img, 'JPEG', 0, 0, 210, 297);
        doc.setFontSize(10);
        doc.text(name, 25, 40);
        doc.text(`Selected Tax: ${selectedTax}`, 15, 35);
        doc.text(`Tax Classification: ${taxClassification}`, 15, 45);
        doc.text(`Other Federal Tax Classification: ${otherFederalTaxClassification}`, 15, 55);
        doc.text(`Exempt Payee Code: ${exemptPayeeCode}`, 15, 65);
        doc.text(`Exemption from FATCA Reporting Code: ${exemptionFromFatcaReportingCode}`, 15, 75);
        doc.text(`Address: ${address}`, 15, 85);
        doc.text(`City, State, Zip Code: ${cityStateZipCode}`, 15, 95);
        doc.text(`Account Numbers: ${accountNumbers}`, 15, 105);
    };


    doc.save('output.pdf');
}