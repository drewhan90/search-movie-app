# Search Movie Apps

## Stack
1. [Next.js](https://nextjs.org/) - React framework
2. [MaterialUI](https://mui.com/) - UI library
3. [Emotion](https://emotion.sh/docs/introduction) - CSS Library
4. [OMDb API](http://www.omdbapi.com/)

## Getting Started
1. Get free api key from http://www.omdbapi.com/apikey.aspx
2. Create `.env` file at root directory and add `OMDB_API_KEY={your_api_key}`
3. Then, run the development server:

```bash
# if first time running project
npm install
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
