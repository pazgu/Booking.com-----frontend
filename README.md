# 🏨 Booking.com Clone - Frontend

This repository contains the frontend implementation for the Booking.com clone project. Built using React, Redux, and React Query, this frontend is designed to provide a seamless user experience for hotel search, booking, and management.

## Features

- **Responsive UI**: A mobile-friendly, responsive interface for users to browse and book hotels.
- **Hotel Search**: Advanced search with filters for price, rating, location, and amenities.
- **Room Booking**: Users can view room details and make reservations.
- **User Authentication**: Integration with Google OAuth and JWT-based authentication.
- **Reviews Management**: Users can add, view, and manage hotel reviews.
- **Dynamic Pricing and Availability**: Real-time updates for room prices and availability.
- **Interactive Maps**: Integrated Google Maps for hotel location and navigation.

## Tech Stack

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
- **Axios**: Simplified HTTP requests

### ⚡ Installation

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/booking-clone-backend.git
   cd booking-clone-backend```

2. Install dependencies:
   ```npm install ```

3. Configure environment variables: Create a .env file in the root directory with the following variables:
   ```PORT=5000
   MYSQL_HOST=your-mysql-host
   MYSQL_USER=your-mysql-username
   MYSQL_PASSWORD=your-mysql-password
   MYSQL_DATABASE=your-database-name
   JWT_SECRET=your-secret-key
   EMAIL_USER=your-email
   EMAIL_PASS=your-email-password
   ```

4. Set up the database:
  * Use the provided SQL scripts to initialize the MySQL schema.
  * Run the seed scripts to populate sample data:
    ```bash
    npm run seed
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

### API Endpoints
**Authentication**
* POST /api/auth/register: Register a new user.
* POST /api/auth/login: Login and receive a JWT.
  
**Hotels**
* GET /api/hotels: Fetch hotels with filters and pagination.
* POST /api/hotels: Add a new hotel (admin only).
* GET /api/hotels/:id: Get details of a specific hotel.
  
**Rooms**
* GET /api/rooms: Fetch available rooms for a hotel.
* POST /api/rooms: Add a new room to a hotel.
  
**Reservations**
* POST /api/reservations: Create a reservation.
* GET /api/reservations/:id: Get details of a reservation.

**Reviews**
* POST /api/reviews: Add a review for a hotel.
* GET /api/reviews/:hotelId: Fetch reviews for a hotel.
  
### Scripts
* npm run dev: Run the server in development mode with nodemon.
* npm run build: Compile the TypeScript code to JavaScript.
* npm start: Start the production server.
* npm run seed: Seed the database with initial data.
  
### 📂 Folder Structure
   ```bash
      src/
   ├── controllers/       # Define the business logic for API endpoints
   ├── routes/            # Define API routes
   ├── models/            # Database schemas and models
   ├── middleware/        # Custom middleware functions
   ├── utils/             # Utility functions (e.g., email notifications)
   ├── config/            # Database and environment configurations
   └── index.ts           # Entry point of the application 
```

### Future Improvements
   * Add real-time availability updates with WebSockets.
   * Implement other booking functionlities such as rent a car and book an attraction.




