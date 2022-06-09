import { reach } from 'yup';

function hasKey(schema, key) {
  try {
    reach(schema, key);
    return true;
  } catch {
    return false;
  }
}

export default async function validateSanitize(request, schema) {
  const body = hasKey(schema, 'body') ? await request.json() : undefined;

  const query = hasKey(schema, 'query')
    ? Object.fromEntries(new URL(request.url).searchParams)
    : undefined;

  return await schema.validate({ body, query });
}
