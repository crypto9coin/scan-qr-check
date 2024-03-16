# Node.js QR Code Scanner

This Node.js application allows you to scan QR codes from images using the `qrcode-reader` and `opencv4nodejs` libraries.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/crypto9coin/scan-qr-check
    ```

2. Navigate to the project directory:

    ```bash
    cd your-nodejs-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Place your image files containing QR codes in the `images` directory.

2. Run the following command to scan a QR code from an image file:

    ```bash
    node scan-qrcode.js --image <image-path>
    ```

    Replace `<image-path>` with the path to the image file containing the QR code you want to scan.

3. The scanned QR code content will be displayed in the console.

## Dependencies

- [qrcode-reader](https://www.npmjs.com/package/qrcode-reader): Library to decode QR codes.
- [opencv4nodejs](https://www.npmjs.com/package/opencv4nodejs): OpenCV bindings for Node.js.

## Thank you
