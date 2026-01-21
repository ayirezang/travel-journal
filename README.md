Travel Journal
A full-stack web application that allows users to document and share their travel experiences with photos and stories. Built with the MERN stack.
🌍 Live Demo
Overview
Travel Journal is a personal travel documentation platform where you can create beautiful journal entries of your adventures around the world. Each entry can include detailed descriptions, locations, dates, and up to 4 photos to capture your memories.
Features

✈️ Create and manage travel journal entries
📸 Upload up to 4 photos per entry
📝 Rich text descriptions for your travel stories
📍 Location tracking for each journey
📅 Date-based organization of trips
🔍 Browse and search through your travel history
📱 Responsive design for mobile and desktop
🔐 User authentication and authorization
✏️ Edit and delete your entries

Tech Stack
Frontend:

React
React Router for navigation
Axios for API requests
CSS3 for styling

Backend:

Node.js
Express.js
MongoDB with Mongoose ODM
JWT for authentication
Multer for image uploads
Cloudinary/AWS S3 for image storage (if applicable)

Deployment:

Frontend: Vercel
Backend: (Render/Railway/Heroku - specify your backend host)
Database: MongoDB Atlas

Development Tools:

Nodemon for auto-reloading
Yarn package manager

Prerequisites
Before running this application locally, ensure you have:

Node.js (v14 or higher)
Yarn package manager
MongoDB (local installation or MongoDB Atlas account)
Cloudinary account (if using for image storage)

Installation

Clone the repository:

bashgit clone <your-repository-url>
cd travel-journal

Install server dependencies:

bashcd server
yarn install

Install client dependencies:

bashcd ../client
yarn install

Create a .env file in the server directory:

envMONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Create a .env file in the client directory (if needed):

envREACT_APP_API_URL=http://localhost:5000/api
Running Locally
Start the development environment:
bash# From the root directory
yarn dev
```

This will start both frontend and backend servers with nodemon for hot-reloading:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`


POST /api/auth/register - Register new user
POST /api/auth/login - User login

Journal Entries

GET /api/entries - Get all entries for authenticated user
GET /api/entries/:id - Get single entry
POST /api/entries - Create new entry (with image upload)
PUT /api/entries/:id - Update entry
DELETE /api/entries/:id - Delete entry

Images

POST /api/upload - Upload images (max 4 per entry)

Usage

Sign Up/Login: Create an account or login to access your journal
Create Entry: Click "New Entry" to document a new travel experience
Add Details: Fill in location, date, description, and upload up to 4 photos
Save & View: Your entry is saved and displayed in your journal timeline
Edit/Delete: Manage your entries as needed

Deployment
The application is deployed on:

Frontend: Vercel
Backend: (Railway)
Database: MongoDB Atlas

Future Enhancements

🗺️ Interactive map view of all travels
🏷️ Tags and categories for entries
🔍 Advanced search and filtering
👥 Social features (following, likes, comments)
📊 Travel statistics and insights
🌐 Public/private entry settings
📱 Mobile app version

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request



Project Link: https://github.com/ayirezang/travel-journal

Made with ❤️ for travel enthusiasts are the se my own env MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret8:54 pmNo, those are placeholder examples that I included in the README. They show what environment variables your app needs, but you need to replace them with your actual values.
Here's what you need to do:
Your Actual .env File Should Look Like:
envMONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster0.xxxxx.mongodb.net/travelJournal?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=mySuper$ecretKey123!RandomString
CLOUDINARY_CLOUD_NAME=your-actual-cloudinary-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz
Where to Get These Values:

MONGODB_URI:

Go to MongoDB Atlas
Your cluster → Connect → Connect your application
Copy the connection string


PORT:

You can keep it as 5000 or use any port you prefer



