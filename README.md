# Ring SDK
[The One API](https://the-one-api.dev/) Typescript wrapper 

## Installing

Using npm:
```bash
npm install ring-api
```

Using yarn:
```bash
yarn add ring-api
```


## Usage

### Obtain an API key
For more information on how to obtain an API key, visit [The One API](https://the-one-api.dev/)

### Create a client
```typescript
import { getClient } from 'ring-api';
// ...
const client = getClient({API_KEY: 'xxx'});
```

## Modules

### Movie

Get a list of all movies in the API
```typescript
const movies = await client.movie.getAll();
```

Get a specific movie by ID
```typescript
const movie = await client.movie.getById('5cd95395de30eff6ebccde5c');
```

Get a list of all quotes in a movie
```typescript
const quotes = await client.movie.getQuoteById('5cd95395de30eff6ebccde5c');
```

### Quote

Get a list of all quotes in the API
```typescript
const movies = await client.quote.getAll();
```

Get a specific quote by ID
```typescript
const movie = await client.quote.getById('5cd96e05de30eff6ebcce917');
```

## Testing
```bash
npm run test
```
