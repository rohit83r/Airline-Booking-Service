### **Project Overview**
The Reminder Service is designed to send email notifications based on specified conditions and times. It leverages cron jobs to regularly check for pending notifications and send them when the conditions are met.

### **Key Components**

#### 1. **Notification Tickets**
   - **Model:** `NotificationTicket.js`
     - Stores the details of each notification, such as subject, content, recipient email, status, and the time at which the notification is supposed to be sent (`notificationTime`).

   - **Fields:**
     - `subject` - Title of the notification.
     - `content` - Content of the email.
     - `recepientEmail` - The email address of the recipient.
     - `status` - The current status of the notification (e.g., `Pending`).
     - `notificationTime` - The time when the notification is supposed to be sent.

#### 2. **Cron Job**
   - **Purpose:** 
     - A cron job runs every 5 minutes to check for any pending emails that are due to be sent based on their `notificationTime`.
   - **Implementation:** 
     - The cron job fetches all tickets with a `Pending` status and a `notificationTime` that has already passed.
     - These tickets are then processed, and emails are sent using a mail service.

#### 3. **Notification Service**
   - **Functionality:** 
     - Handles the business logic of the application, particularly managing notifications (e.g., creating a new notification ticket, sending notifications).
   - **Key Methods:**
     - `createNotificationTicket(data)` - Creates a new notification ticket in the database.
     - `sendPendingNotifications()` - Processes and sends all pending notifications.

#### 4. **Error Handling**
   - **Custom Errors:** 
     - The project includes custom error classes such as `ClientError` and `ValidationError` for handling different types of errors more effectively.
   - **Error Handling Structure:**
     - Errors are captured and handled at various layers, ensuring that the appropriate status codes and messages are returned to the client.

#### 5. **Routes**
   - **API Endpoints:**
     - An endpoint is provided to create a new notification ticket. The endpoint validates the input data before creating a record in the database.

#### 6. **Environment Configuration**
   - **dotenv:** 
     - The project uses `dotenv` to manage environment variables, ensuring sensitive information such as email credentials is not hardcoded.

### **Usage Notes**
- **Starting the Server:** 
  - Ensure that all environment variables are set correctly in the `.env` file before starting the server.
- **Testing:** 
  - Use Postman or similar tools to test the API endpoints. When creating a new notification, ensure that the `notificationTime` is a valid datetime value.
- **Error Debugging:**
  - If you encounter a `SequelizeDatabaseError`, check the value of `notificationTime` and ensure it's correctly formatted as a datetime string.
