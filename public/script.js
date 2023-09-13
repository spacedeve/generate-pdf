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


    const doc = new jsPDF();
    const img = new Image();
    img.src = 'bg-image/fw9_page-0001.jpg';

    img.onload = () => {
        doc.addImage(img, 'JPEG', 0, 0, 210, 297);
        doc.setFontSize(10);
        doc.text(name, 25, 40);
        doc.save('output.pdf');
    };
});