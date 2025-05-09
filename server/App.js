const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/social-caption-generator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const captionSchema = new mongoose.Schema({
  platform: String,
  niche: String,
  tone: String,
  caption: String,
  hashtags: [String],
});

const Caption = mongoose.model('Caption', captionSchema);

app.post('/api/caption', async (req, res) => {
  try {
    const { platform, niche, tone } = req.body;
    const openaiResponse = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Generate a social media caption for ${platform} in the ${niche} niche with a ${tone} tone.`,
      max_tokens: 2048,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        'Content-Type': 'application/json',
      },
    });
    const caption = openaiResponse.data.choices[0].text;
    const hashtags = ['#socialmedia', '#caption', '#generator'];
    res.json({ caption, hashtags });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating caption' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});