const cv = require('opencv4nodejs');
const QrCode = require('qrcode-reader');

// Function to read QR code from image file
async function readQRCode(imagePath) {
    // Read the image using opencv4nodejs
    const img = await cv.imreadAsync(imagePath);

    // Convert the image to grayscale
    const grayImg = await img.cvtColorAsync(cv.COLOR_BGR2GRAY);

    // Create a QR code reader instance
    const qrCodeReader = new QrCode();

    // Decode the QR code
    const qrCode = await new Promise((resolve, reject) => {
        qrCodeReader.callback = (err, value) => err != null ? reject(err) : resolve(value);
        qrCodeReader.decode(grayImg);
    });

    // Return the decoded QR code
    return qrCode.result;
}

// Path to the image containing the QR code
const imagePath = 'qr_code_image.png';

// Call the readQRCode function and handle the result
readQRCode(imagePath)
    .then(result => {
        console.log('QR code scanned successfully:');
        console.log(result);
    })
    .catch(error => {
        console.error('Error scanning QR code:', error);
    });
