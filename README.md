# CV Builder

[Live Demo](https://reactappcvbuilder.netlify.app/)

A robust and mobile-friendly React application that allows users to create professional CVs (Resumes) using a clean template and export them as PDF files.

## Features

- **Real-time Preview**: See your changes instantly as you type.
- **PDF Export**: Download your CV as a high-quality PDF document.
- **Mobile Friendly**: Fully responsive design that works on desktops, tablets, and mobile phones.
- **Data Validation**: Ensures essential fields are filled before generating the PDF.
- **Example Data**: Load example data to see how the CV looks with content.
- **Customizable**: Add or remove experience and education sections as needed.
- **Desktop App**: Run as a standalone desktop application on Windows, macOS, and Linux.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/wikicrafter/cvbuilder.git
    cd cvbuilder
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

## Usage

1.  **Start the development server**
    ```bash
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2.  **Build for production**
    ```bash
    npm run build
    ```
    Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

3.  **Run as Desktop App**
    ```bash
    npm run electron:dev
    ```
    This will launch the application in a standalone Electron window.

4.  **Build Desktop App**
    ```bash
    npm run electron:build
    ```
    This will build the React app and then package it as a desktop application installer (e.g., .exe, .dmg) in the `dist` folder.

## Testing

The application includes a suite of automated tests to ensure reliability.

1.  **Run tests**
    ```bash
    npm test
    ```
    This launches the test runner in the interactive watch mode.

## Project Structure

- `src/components`: Contains all React components.
    - `CVForm`: Components for the input form.
    - `CVPreview`: Components for the CV preview and print layout.
    - `Utils`: Utility components like Buttons, Inputs, and ErrorBoundary.
- `src/theme`: Styled-components theme configuration.

## Technologies Used

- [React](https://reactjs.org/) - UI Library
- [styled-components](https://styled-components.com/) - Styling
- [react-to-print](https://www.npmjs.com/package/react-to-print) - PDF Generation
- [uuid](https://www.npmjs.com/package/uuid) - Unique ID generation
- [prop-types](https://www.npmjs.com/package/prop-types) - Type checking
- [Electron](https://www.electronjs.org/) - Desktop Application Framework
