# 🏨 Booking.com Clone - Frontend

This repository contains the frontend implementation for the Booking.com clone project. Built using React, Redux, and React Query, this frontend is designed to provide a seamless user experience for hotel search, booking, and management.

## 🚀 Features

- **Responsive UI**: A mobile-friendly, responsive interface for users to browse and book hotels.
- **Hotel Search**: Advanced search with filters for price, rating, location, and amenities.
- **Room Booking**: Users can view room details and make reservations.
- **User Authentication**: Integration with Google OAuth and JWT-based authentication.
- **Reviews Management**: Users can add, view, and manage hotel reviews.
- **Dynamic Pricing and Availability**: Real-time updates for room prices and availability.
- **Interactive Maps**: Integrated Google Maps for hotel location and navigation.

## 🛠️ Tech Stack

- **React**: Component-based frontend framework.
- **Redux Toolkit**: State management for global state like filters and authentication.
- **React Query**: Efficient server-state management for fetching and caching.
- **TypeScript**: Strongly typed codebase for reliability and scalability.
- **Tailwind CSS**: Utility-first framework for styling.
- **Vite**: Lightning-fast development server and build tool.

## UI Libraries
- **Shadcn**: Prebuilt, customizable components.
- **Radix UI**: Accessible components for dialogs, sliders, and popovers.
- **React Icons**: Extensive collection of SVG icons.
- **Embla Carousel**: Smooth, responsive carousel for image galleries.

## Integrations
- **Google Maps API**: Location mapping.
- **React Hook Form & Zod**: Form management with schema validation.
- **Axios**: Simplified HTTP requests.

## ⚡ Installation
### Prerequisites
* **Node.js** (v18 or later)
* **NPM or Yarn**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/booking-clone-frontend.git
   cd booking-clone-frontend
   ```

2. Install dependencies:
   ```npm install ```

3. Configure environment variables: Create a .env file in the root directory with the following variables:
   ```
   VITE_GOOGLE_MAPS_API_KEY = your_api_key
   VITE_GOOGLE_CLIENT_ID= your_google_client_id
   VITE_API_URL=  https://your-backend-api-url.com
   ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Build and run the production server:
    ```bash
    npm run build
    npm start
    ```

### 🌐 API Endpoints
* Communicates with the backend for:
* Fetching hotel and room details.
* User authentication.
* Reviews and ratings.
* Booking reservations and availability checks.
  
### 🔧 Scripts
* npm run dev: Starts the development server.
* npm run build: Builds the app for production.
* npm start: Start the production server.
  
### 📂 Folder Structure
   ```bash
     src/
      ├── api/                 # API service functions
      ├── assets/              # Static assets like images and fonts
      ├── components/          # Reusable components
      ├── contexts/            # Context providers
      ├── hooks/               # Custom React hooks
      ├── pages/               # Application pages (e.g., Home, Search, Booking)
      ├── redux/               # Redux slices and store configuration
      ├── styles/              # Global and component-specific styles
      ├── utils/               # Utility functions
```

### 📜 License
This project is licensed under the MIT License.



