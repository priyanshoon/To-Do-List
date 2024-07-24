# To-Do App in Express.js, Postgresql and React.js

**Note: This project is for only learning purpose and nothing eles;**

## API Endpoints

- [X] POST '/api/register'
    - Request Body:
    ```json
    {
        "name": "name",
        "email": "email",
        "password": "password"
    }
    ```
    - Response:
    ```json
    {
        "status": "success",
        "message": "User Registered Successfully"
    }
    ```
- [X] POST '/api/login'
    - Request Body:
    ```json
    {
        "email": "email",
        "password": "password"
    }
    ```
    - Response:
    ```json
    {
        "status": "success",
        "message": "User Logged In Successfully",
    }
    ```
- [ ] GET '/api/todo-list/:user_id'
    - Request Body:
    ```json
    {
        "user_id": "user_id"
    }
    ```
    - Response:
    ```json
    {
        "status": "success",
        "message": "Todo List Fetched Successfully",
        "data": [
            {
                "id": "id",
                "title": "title",
                "description": "description",
                "status": "status",
                "created_at": "created_at",
                "updated_at": "updated_at"
            }
        ]
    }
    ```

# TODO:
## On Server Side
- [X] Create Registration POST '/api/register'
- [X] Create Login Functionality POST '/api/login'
- [ ] Create api endpoint to fetch TODO LIST GET '/api/todo-list/:user_id'
- [ ] JWT Token for instant login and cookie generation
## On Client Side
- [ ] Create login/registration page
- [ ] Create homepage for users
