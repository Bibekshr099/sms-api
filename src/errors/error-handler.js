import { ValidationError } from 'yup';

function genericErrorHandler() {
  return new Response('Internal Server Error', { status: 500 });
}

function validationErrorHandler(error) {
  return new Response('Unprocessable Entity', { status: 422 });
}

export default async function errorHandler(error) {
  if (error instanceof ValidationError) {
    return validationErrorHandler(error);
  }

  return genericErrorHandler(error);
}
