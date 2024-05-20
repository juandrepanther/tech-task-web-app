# Tech Task Web App

## Deploy

Already deployed on Vercel: `https://tech-task-web-app.vercel.app/`

## Run

- clone the repository (use HTTPS)
- `npm install`
- `npm run start`
- open in the browser `http://localhost:5173/`

## Tests

- `npm run test:ui` (Vitest UI)
- open to see the report of testing result: `http://localhost:9527/__vitest__/#/`

All tests files are located in `src/tests` folder.

## Build

- `npm run build`

If you have installed docker & docker-compose you can build a container:

- make sure you have installed docker-compose
- at the root of the project, run `docker-compose up -d --build`
- open `http://localhost:4000/` in the browser

## Additionally, have been added:

- Dockerfile
- nginx.conf
- .prettierrc
- added husky + commitlint

## Notes

- `.env` variable for this project is included in the repository (only for this purpose)
- Developed by using Node 20.7.0 (Currently using 64-bit executable)
- free images were taken from `https://unsplash.com/`
- free video was taken from `https://www.pexels.com/search/videos/business/`
