const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Backend dịch thuật đang hoạt động!');
});

const PORT = process.env.PORT || 3000; // dùng cổng do Render cung cấp

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
