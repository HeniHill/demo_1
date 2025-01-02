import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
  } from '@nestjs/common';
  import { MongoError } from 'mongodb';
  
  @Catch(MongoError)
  export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      let message = 'Database error occurred';
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
  
      // Check for duplicate key error
      if (exception.code === 11000) {
        message = 'Duplicate value for unique field detected';
        status = HttpStatus.CONFLICT; // HTTP 409 Conflict
      }
      if(exception.code === 2){
        message = 'Bad Value Provided';
        status = HttpStatus.BAD_REQUEST;
      }

      if(exception.code === 50){
        message="Timeout Error";
        status=HttpStatus.REQUEST_TIMEOUT;
      }
  
      response.status(status).json({
        statusCode: status,
        message,
        path: request.url,
      });
    }
  }
  