import React, { useState } from 'react';
import axios from 'axios';

function CaptionGenerator() {
  const [platform, setPlatform] = useState('');
  const [niche, setNiche] = useState('');
  const [tone, setTone] = useState('');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const handleGenerateCaption = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/caption', {
        platform,
        niche,
        tone,
      });
      setCaption(response.data.caption);
      setHashtags(response.data.hashtags);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Social Caption Generator</h1>
      <form>
        <label>Platform:</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="">Select a platform</option>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="YouTube">YouTube</option>
        </select>
        <br />
        <label>Niche:</label>
        <select value={niche} onChange={(e) => setNiche(e.target.value)}>
          <option value="">Select a niche</option>
          <option value="Fitness">Fitness</option>
          <option value="Marketing">Marketing</option>
          <option value="Technology">Technology</option>
        </select>
        <br />
        <label>Tone:</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="">Select a tone</option>
          <option value="Funny">Funny</option>
          <option value="Inspirational">Inspirational</option>
          <option value="Professional">Professional</option>
        </select>
        <br />
        <button type="button" onClick={handleGenerateCaption}>
          Generate Caption
        </button>
      </form>
      <h2>Generated Caption:</h2>
      <p>{caption}</p>
      <h2>Hashtags:</h2>
      <ul>
        {hashtags.map((hashtag, index) => (
          <li key={index}>{hashtag}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaptionGenerator;