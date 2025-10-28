const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from bb2!');
});

// 测试其他路由
app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Vercel 专用导出方式
module.exports = app;
