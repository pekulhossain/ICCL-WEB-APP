const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self' https://www.google.com/maps");
    next();
});