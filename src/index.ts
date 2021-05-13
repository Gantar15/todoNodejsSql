
export{};
const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todo');
const sequelize = require('./utils/db');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);
app.use((req: any, resp: any, next: any) => {
    resp.sendFile('/index.html');
    next();
});

!async function start() {
    try {
        await sequelize.sync();
    } catch (error) {
        console.log(error);
    }
}();

const POST = process.env.PORT ?? 5000; 
app.listen(POST, () => {
    console.log("Server running!!!");
});