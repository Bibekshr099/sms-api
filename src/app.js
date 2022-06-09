import api from './api.js';
import errorHandler from './errors/error-handler.js';

addEventListener('fetch', (event) => {
  return event.respondWith(api.handle(event.request).catch(errorHandler));
});
