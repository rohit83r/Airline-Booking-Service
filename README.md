# Airline Booking Service

## Overview

The **Airline Booking Service** is a microservices-based application designed to manage various aspects of an airline's operations, including flight booking, user authentication, flight management, and notifications. Each component of the system is designed as a separate service, allowing for scalability, maintainability, and flexibility.

## Table of Contents

1. [Services Overview](#services-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation and Setup](#installation-and-setup)
5. [Configuration](#configuration)
6. [Database Setup](#database-setup)
7. [Running the Application](#running-the-application)
8. [API Endpoints](#api-endpoints)
9. [Contributing](#contributing)
10. [License](#license)

## Services Overview

### 1. API Gateway (`API_GATEWAY`)

The API Gateway serves as the entry point for all client requests. It handles request routing, authentication, rate limiting, and load balancing.

**Features:**
- Request routing to appropriate microservices
- Rate limiting and logging
- Authentication checks for protected routes

### 2. Authentication Service (`AUTHSERVICE`)

Manages user authentication and authorization. Supports user registration, login, and role-based access control.

**Features:**
- User registration and login
- JWT-based authentication
- Role management (Admin, User)

### 3. Booking System (`BookingSystem`)

Handles all booking-related operations, including creating, updating, viewing, and canceling bookings.

**Features:**
- Book, update, and cancel flights
- Retrieve booking history
- Admin functionalities for managing bookings

### 4. Flights and Services Management (`Flights-and-Services`)

Manages all flight-related information, including scheduling, airport details, and airplane details.

**Features:**
- CRUD operations for flights, airports, airplanes
- Flight search with filters

### 5. Reminder Service (`ReminderService`)

Handles notifications and reminders for users about their bookings, flight updates, etc.

**Features:**
- Send email notifications
- Scheduled reminders using cron jobs

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Message Queue**: RabbitMQ for asynchronous task handling
- **Email Service**: NodeMailer for sending emails
- **Cloud Services**: AWS for deployment and other cloud services
- **Version Control**: Git and GitHub

## Project Structure

```plaintext
Airline-Booking-Service/
├── Backend/
│   ├── API_GATEWAY/          # API Gateway service
│   ├── AUTHSERVICE/          # Authentication service
│   ├── BookingSystem/        # Booking management service
│   ├── Flights-and-Services/ # Flights and services management
│   └── ReminderService/      # Reminder notification service
```

Each service folder contains its respective configuration, controllers, models, routes, services, and utility files.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/airline-booking-service.git
   cd Airline-Booking-Service/Backend
   ```

2. **Install dependencies for each service**:

   ```bash
   cd API_GATEWAY && npm install
   cd ../AUTHSERVICE && npm install
   cd ../BookingSystem && npm install
   cd ../Flights-and-Services && npm install
   cd ../ReminderService && npm install
   ```

3. **Create environment files** for each service:

   Copy `.env.example` to `.env` in each service folder and update the configurations accordingly.

## Configuration

Ensure each service has its `.env` file properly configured:

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

1. **Run Migrations**: Set up the database schema for each service using Sequelize CLI:

   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Run Seeders**: Populate the database with initial data:

   ```bash
   npx sequelize-cli db:seed:all
   ```

> Run these commands from the root directory of each service where Sequelize is configured.

## Running the Application

Start each service individually:

```bash
# In the API_GATEWAY directory
npm start

# In the AUTHSERVICE directory
npm start

# In the BookingSystem directory
npm start

# In the Flights-and-Services directory
npm start

# In the ReminderService directory
npm start
```

Each service will run on its configured port as specified in the `.env` file.

## API Endpoints

### API Gateway

- **GET** `/api/v1/proxy` - Proxy requests to other services
- **POST** `/api/v1/auth` - Authenticate user requests

### Authentication Service

- **POST** `/auth/signup` - Register a new user
- **POST** `/auth/login` - Login and receive a JWT token

### Booking System

- **POST** `/bookings` - Create a new booking
- **GET** `/bookings` - Retrieve all bookings for the logged-in user
- **PUT** `/bookings/:id` - Update booking details
- **DELETE** `/bookings/:id` - Cancel a booking

### Flights and Services Management

- **POST** `/flights` - Create a new flight (Admin only)
- **GET** `/flights` - Retrieve all flights or search with filters
- **PUT** `/flights/:id` - Update flight details (Admin only)
- **DELETE** `/flights/:id` - Delete a flight (Admin only)

### Reminder Service

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
