import express from 'express';
import ApiVersion1 from './routes/firstApi';
import ApiVersion2 from './routes/secondApi';

const imports = {};
export { imports };

const app = express();
const port = 3000;

app.use('/', ApiVersion1);

app.use('/v2', ApiVersion2);

const server = app.listen(port, () => {
    console.log('server is running on port', port);
});

export function closeSever() {
    server.close();
}
export default app;