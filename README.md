# Nest JS Backend Application.

## List of required Modules.

npm i -g @nestjs/cli

## Database.

1. mongoos is used to create the schema
2. to transfer the data from client to server, the best practice is to use DTO’s, therefore DTO are used for validation.
3. Class Validation is used globally.
    1. In the main.ts file.  **app.useGlobalPipes(new ValidationPipe())** 
    2. Controller level validation using @UsePipes(new ValidationPipe()) decorator.

I preferred the first approach.

## Exception Handling.

Usually when there is constraint violation in the model, the server fires an Internal Server Error (500), but to make the response fore clear and informative for the end users, custom exception handling is implemented using

## Caching

## Incident Reporting.

https://drive.google.com/file/d/1pKhnCSlOxbkYmKdoh5Qqfb11qWiGbCAF/view?usp=sharing

When An incident is reported the backend microservice will emit an event for another microservice, which is responsible to listen new incident event and compose an email and send to list of responsible incident response team.