## Server
1. yarn init

2. npx typescript --init

3. yarn add express http-status-codes pino @typegoose/typegoose mongoose express-async-errors zod zod-express-middleware argon2 jsonwebtoken cookie-parser mongoose-slug-generator nanoid busboy cors helmet @mantine/form

4. yarn add typescript ts-node-dev pino-pretty @types/express @types/jsonwebtoken @types/cookie-parser @types/busboy @types/cors -D

## Client
1. yarn create next-app client --typescript

2. yarn add @mantine/hooks @mantine/core @mantine/next react-query axios @mantine/notifications tabler-icons-react @mantine/dropzone

3. Setup Mantine https://mantine.dev/theming/next/


## ts-node

- ts execution engine and PEPL for Node.js, transforms typescript into js, enabling you to directly execute ts on node.js without precompiling

## ts-node-dev
 - Compiles your TS app and restarts when files are modified. Compiles your TS app and restarts when files are modified.

## --exit-child 
- Adds 'SIGTERM' exit handler in a child process.