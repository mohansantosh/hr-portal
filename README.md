https://github.com/mohansantosh/hr-portal

# Backend to develop Business Suite Web Application

# Usage:
    npm install
    npx sequelize-cli db:seed:all
    npm start

# Project Description
This is a backend server I'm building for developing a HR Portal written in pure Javascript.

This has all the infra structure as below:
1. Authorization
    1. Role based accesed to every Model/Table - Works with multiple Models/Table. User is given access only if user has access on all the Models for that specific request method.
    2. Every user's role permissions is customizable - Currently stored in file as object. Will migrate this to Database to that user can change the permission configuration anytime for any role.
2. Authentication
    1. Local Authentication for login
    2. JWT authentication
3. Swagger
4. Open API
5. Router Framework:
    1. Can easily plugin/plugout any router from the main Router - Centralized Router module to control all routes
    2. Customize every Router -  any number of middleware as per the requirement for that specific route.
6. Plugin any schema and model.

# To create any route say foo:
    1. Create a folder "foo" in controllers
    2. Create foo.router.js and foo.schema.js
    3. Add foo router in controller/router.js and add the authorization/auth as per your needs.
    4. Create model for "foo" in models as foo.js
    5. Define the model schema in models/foo.js
    6. Write your routes as per your needs in foo.router.js - post, patch, etc
    7. Add necessary permissions for every role for that Model "foo" in config/roles_permissions.js
    8. npm start

# Authentication
    1. Create JWT Token by accessing POST /user/login with body username: admin and password: default
    2. Set the JWT token the swagger by clicking on the Authorize button - So that every request is authenticated.
    3. Start Testing!!
