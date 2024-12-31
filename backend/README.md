# Image Upload and User Authentication API

This project is a Node.js application that implements an image upload feature using Multer, user registration, and authentication using MongoDB.

## Features

- **User Registration**: Allows users to register with their email, password, and confirmation password.
- **User Login**: Allows users to log in using their email and password.
- **Image Upload**: Users can upload images (JPEG, JPG, PNG) with a size limit of 2MB.
- **Image Retrieval**: Fetch all uploaded images.
- **Image Deletion**: Delete an image by ID.

## Technologies Used

- **Node.js**: Server-side runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **Multer**: Middleware for handling file uploads.
- **CORS**: Middleware for Cross-Origin Resource Sharing.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/suba-kannan/digital-art-showcase.git
   cd digital-art-showcase
   ```

2. Go to the Backend directory

   ```bash
   cd backend
   ```

3. Set up MongoDB:

   - Replace the connection string in the `mongoose.connect` function with your MongoDB URI.

4. Start the server:

   ```bash
   npx nodemon server.js
   ```

5. The server will run on `http://localhost:3001`.

## API Endpoints

### User APIs

#### Register

- **URL**: `/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string",
    "confirmpassword": "string"
  }
  ```
- **Response**:
  - Success: `{ "status": "success", "message": "Registration successful" }`
  - Error: `{ "status": "error", "message": "Error message" }`

#### Login

- **URL**: `/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - Success: `"success"`
  - Error: `"the password is incorrect"` or `"no record exist"`

### Image APIs

#### Upload Image

- **URL**: `/upload-image`
- **Method**: `POST`
- **Request Body**: Form-data with key `image` (file).
- **Response**:
  ```json
  {
    "status": "success",
    "message": "Image uploaded successfully",
    "imagePath": "string"
  }
  ```

#### Get Images

- **URL**: `/images`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "status": "success",
    "images": [array of image objects]
  }
  ```

#### Delete Image

- **URL**: `/images/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "status": "success",
    "message": "Image deleted successfully"
  }
  ```

## Note

- Ensure MongoDB is running and accessible.
- Uploaded images are stored in the `uploads` directory.
- Update the `mongoose.connect` URI with valid credentials for your MongoDB instance.
