# 🌟 Unity-Force - Volunteer Management Web App

**Unity-Force** is a fully-featured volunteer management web application where users can post volunteer opportunities, and other users can apply to become volunteers for those posts.

🔗 **Live Site:** [https://unity-foece.web.app](https://unity-foece.web.app)  
🔗 **Server Link (Vercel):** [https://unity-force-server-nine.vercel.app](https://unity-force-server-nine.vercel.app)

---

## 🚀 Tech Stack

### Frontend
- **React** `v19.1.0`
- **Tailwind CSS** `v4.1.11`
- **React Router DOM** `v7.6.3`
- **Firebase Authentication**
- **SweetAlert2**, **AOS**, **Framer Motion**, **Lottie React**
- **React Helmet Async**, **React Icons**, **Axios**
- **Swiper**, **React Datepicker**, **React CountUp**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Firebase Admin SDK**
- **JWT (JSON Web Token)**

---

## 🔐 Key Features

- **User Authentication**
  - Firebase email & password-based login/registration
  - JWT token-secured APIs

- **Home Page**
  - Banner, countdown timer, testimonial section

- **All Posts Page**
  - View all volunteer posts
  - Category filter and search functionality

- **Post Details Page**
  - See complete details about a post
  - Apply to become a volunteer (secure route)

- **Add New Post**
  - Only authenticated users can post

- **My Posts**
  - View, edit, and delete your own posts

- **My Requests**
  - View all posts you have applied for

- **Profile Page**
  - View user information and log out

- **Private Routes**
  - Add Post, My Posts, My Requests, Post Details, and Profile are all private routes

- **JWT-Protected APIs**
  - `GET /myPosts?email=user@example.com`
  - `GET /applications?email=user@example.com`

- **Responsive Design**
  - Works seamlessly on mobile, tablet, and desktop devices

---

## ⚙️ Installation & Run Commands

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Unity-Force-Client.git
cd Unity-Force-Client
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env.local` file in the project root and add:
```env
VITE_API_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### 4️⃣ Run the development server
```bash
npm run dev
```
This will start the project on `http://localhost:5173`.

---

## 🖥 Backend Setup (Optional if running server locally)

```bash
git clone https://github.com/your-username/Unity-Force-Server.git
cd Unity-Force-Server
npm install
```

Create `.env` in the server root:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_ADMIN_KEY=your_firebase_admin_sdk_json
```

Run the server:
```bash
npm start
```

---

✅ **You’re ready to go!** Open your browser and enjoy **Unity-Force** 🚀
