const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/transcribe', (req, res) => {
    const { audioData, api } = req.body;
    // 根據所選的語音識別API進行語音轉文字
    // 這裡應該有一段代碼來調用相應的API
});

app.post('/translate', (req, res) => {
    const { text, api } = req.body;
    // 根據所選的翻譯API進行翻譯
    // 這裡應該有一段代碼來調用相應的API
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
