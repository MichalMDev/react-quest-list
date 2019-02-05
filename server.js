const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/tasks', (req, res) => {
// 	res.send({ express: 'Backend Tasks' });
// });

// app.get('/tasks1', (req, res) => {
// 	res.send({ express: 'Backend Tasks1' });
// });
