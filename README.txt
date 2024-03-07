# Recipe Management API

This API provides functionality for managing users and recipes within a platform. It includes classes for User and Recipe management with methods for CRUD operations.

## Models

### User Class

Represents individuals who interact with the platform. It includes methods for user authentication, profile management, and interaction with recipes.

### Recipe Class

Contains details of a recipe, including title, description, ingredients, instructions, and optional images. It includes methods for CRUD operations on recipes.

## Functionality

### User Class Functionality

- **User Registration**: Method for registering new users.
- **User Login**: Method for authenticating users.
- **Profile Management**: Methods for updating user profiles.
- **Authentication Mechanisms**: Implements JWT token generation and validation for secure authentication.

### Recipe Class Functionality

- **CRUD Operations**: Methods for creating, reading, updating, and deleting recipes.
- **Validation and Error Handling**: Ensures proper validation and error handling for recipe-related operations.
- **Encapsulation**: Utilizes encapsulation to interact with the database within the Recipe class methods.

## Documentation

### Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your database and configure the connection in the `config.js` file.
4. Run the server using `npm start`.

### API Endpoints

#### User Endpoints

- `POST /user/register`: Register a new user.
- `POST /user/login`: Login as an existing user.
- `PUT /user/updateuser/:id`: Update user profile information.

#### Recipe Endpoints

- `GET /recipe/:userId`: Get recipes associated with a user.
- `POST /recipe`: Create a new recipe.
- `GET /recipe/:recipieId`: Get details of a recipe by ID.
- `GET /recipe`: Get all recipes.
- `PUT /recipe/:recipieId`: Update an existing recipe.
- `DELETE /recipe/:recipieId`: Delete a recipe by ID.

### Examples

#### User Registration

```http
POST /user/register
Content-Type: application/json

{
  "username": "example_user",
  "firstname":"example"
  "email": "user@example.com",
  "password": "password123"
}

POST /user/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

PUT /user/updateuser/123
Content-Type: application/json

{
  "username": "new_username",
  "email": "new_email@example.com"
}



POST recipe/
Content-Type: application/json

{
  "title": "Delicious Pasta",
  "description": "A classic pasta dish with a rich tomato sauce.",
  "ingredients": ["pasta", "tomatoes", "garlic", "olive oil"],
  "instructions": "1. Cook pasta according to package instructions. 2. Heat olive oil in a pan, add minced garlic and tomatoes. 3. Mix in cooked pasta. 4. Serve hot.",
}

PUT /recipe/:recipieId
Content-Type: application/json

{
  "title": "Spicy Pasta",
  "description": "A fiery version of the classic pasta dish with extra chili.",
  "ingredients": ["pasta", "tomatoes", "garlic", "chili", "olive oil"],
  "instructions": "1. Cook pasta according to package instructions. 2. Heat olive oil in a pan, add minced garlic, tomatoes, and chili. 3. Mix in cooked pasta. 4. Serve hot.",
  "image": "https://example.com/spicy_pasta_image.jpg"
}

DELETE /recipe/:recipieId

OOP Concepts Utilization
Encapsulation: Classes encapsulate related functionality and data, providing a clear interface for interaction.
Abstraction: Users interact with the API through high-level methods, abstracting away complex implementation details.
Modularity: Separation of concerns between User and Recipe classes allows for easier maintenance and scalability.
Inheritance: If applicable, inheritance could be utilized for extending functionality, such as different types of recipes inheriting from a base Recipe class.
