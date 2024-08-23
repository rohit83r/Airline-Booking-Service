# Airline Booking System

## Overview

The Airline Booking System is a comprehensive application designed to handle the booking and management of flights for an airline. The system allows users to search for flights, make bookings, and manage their itineraries. Additionally, it includes an administration panel for managing flight schedules, airport information, and user roles.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation and Setup](#installation-and-setup)
5. [Configuration](#configuration)
6. [Database Setup](#database-setup)
7. [Running the Application](#running-the-application)
8. [API Endpoints](#api-endpoints)
9. [Contributing](#contributing)


## Features

- **User Registration and Authentication**: Secure user sign-up and login using JWT token-based authentication.
- **Role Management**: Admin and user roles with distinct privileges.
- **Flight Management**: Create, update, delete, and search for flights.
- **Booking Management**: Users can book, update, cancel, and view their flight reservations.
- **Notifications**: Automated email notifications for booking confirmations, reminders, and cancellations.
- **Admin Dashboard**: Manage flights, users, and bookings.
- **Search Filters**: Search flights based on criteria such as departure airport, arrival airport, price range, and date.
- **Rate Limiting**: Prevent abuse by limiting the number of requests per user/IP.
- **Error Handling**: Comprehensive error management and logging.
- **Scalability and Performance**: Optimized for high performance and scalability using microservices architecture.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Message Queue**: RabbitMQ for handling asynchronous tasks and notifications
- **Email Service**: NodeMailer for sending email notifications
- **Cloud Services**: AWS for deployment and other services
- **Version Control**: Git and GitHub

## Project Structure

```plaintext
airline-booking-system/
├── src/
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middlewares/       # Middleware functions
│   ├── migrations/        # Database migration files
│   ├── models/            # Sequelize models
│   ├── repositories/      # Data access layer
│   ├── routes/            # API routes
│   ├── seeders/           # Database seeding scripts
│   ├── services/          # Business logic layer
│   ├── utils/             # Utility functions
│   └── index.js           # Entry point
├── tests/                 # Unit and integration tests
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── package.json           # NPM package file
└── README.md              # Project documentation
```

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/airline-booking-system.git
   cd airline-booking-system
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create an environment file**:

   Copy the `.env.example` to `.env` and update the configuration according to your setup.

## Configuration

Update the `.env` file with your specific configuration details:

```plaintext
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=airline_booking
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
RABBITMQ_URL=amqp://localhost
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

## Database Setup

1. **Run Migrations**: To set up the database schema, run the following command:

   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Run Seeders**: Populate the database with initial data:

   ```bash
   npx sequelize-cli db:seed:all
   ```

## Running the Application

To start the application, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 3000).

## API Endpoints

### Authentication

- **POST** `/auth/signup` - Register a new user
- **POST** `/auth/login` - Login and receive a JWT token

### Flights

- **POST** `/flights` - Create a new flight (Admin only)
- **GET** `/flights` - Retrieve all flights or search with filters
- **GET** `/flights/:id` - Retrieve flight details by ID
- **PUT** `/flights/:id` - Update flight details (Admin only)
- **DELETE** `/flights/:id` - Delete a flight (Admin only)

### Bookings

- **POST** `/bookings` - Create a new booking
- **GET** `/bookings` - Retrieve all bookings for the logged-in user
- **GET** `/bookings/:id` - Retrieve booking details by ID
- **PUT** `/bookings/:id` - Update booking details
- **DELETE** `/bookings/:id` - Cancel a booking

### Notifications

- **GET** `/notifications` - Retrieve all notifications
- **POST** `/notifications` - Create a new notification
- **DELETE** `/notifications/:id` - Delete a notification

## Contributing

We welcome contributions from the community. If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please make sure your code adheres to our coding guidelines and includes appropriate tests.
