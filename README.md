
# Sentiment Analysis Application

This project is a sentiment analysis application built using React.js and integrates with a machine learning backend for sentiment analysis.

## Overview

This application allows users to input text and receive sentiment analysis results. It consists of a frontend built with React.js for the user interface and a backend service for analyzing sentiment using machine learning models.

## Features

- **Sentiment Input**: Users can enter text for sentiment analysis.
- **Result Display**: Displays the sentiment analysis result (positive, negative, neutral) based on the input text.
- **Info Cards**: Informational cards explaining different sentiment types (positive, negative, neutral).

  ![image](https://github.com/Manaswini123456/Sentiment-analysis/assets/91537487/894d42ce-d27b-4060-8073-ecc134d32df7)


## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your local machine.
- Git installed on your local machine.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

To run the application locally:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Testing

To run tests:

```sh
npm test
```

Launches the test runner in the interactive watch mode.

### Building for Production

To build the app for production:

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Deployment

This project is set up to be deployed using [Vercel](https://vercel.com/) or any other hosting platform of your choice. See the [Create React App documentation on deployment](https://create-react-app.dev/docs/deployment/) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).

## Additional Documentation

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## For Backend

### Prerequisites

- Python 3.x
- NLTK (Natural Language Toolkit)
- Flask
- Flask-CORS

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

### Running the Server

To start the Flask server:

```bash
python app.py
```

The server will start running at `http://localhost:5000`.

## API Endpoint

### Analyze Sentiment

- **Endpoint:** `/analyze`
- **Method:** POST
- **Request Body:**

  ```json
  {
      "text": "Text to analyze"
  }
  ```

- **Response:**

  ```json
  {
      "sentiment": "positive|negative|neutral"
  }
  ```

#### Example Usage

```bash
curl -X POST -H "Content-Type: application/json" -d '{"text": "I love this product!"}' http://localhost:5000/analyze
```

#### Response

```json
{
    "sentiment": "positive"
}
```

## Notes

- This API uses NLTK's VADER sentiment analysis tool.
- It supports CORS to allow cross-origin requests.


Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
