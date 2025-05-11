import React, { useState } from 'react';
import axios from 'axios';

const CaptionGenerator = () => {
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

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Social Caption Generator'),
    React.createElement(
      'form',
      null,
      React.createElement('label', null, 'Platform:'),
      React.createElement(
        'select',
        {
          value: platform,
          onChange: (e) => setPlatform(e.target.value),
        },
        React.createElement('option', { value: '' }, 'Select a platform'),
        React.createElement('option', { value: 'Instagram' }, 'Instagram'),
        React.createElement('option', { value: 'TikTok' }, 'TikTok'),
        React.createElement('option', { value: 'YouTube' }, 'YouTube')
      ),
      React.createElement('br', null),
      React.createElement('label', null, 'Niche:'),
      React.createElement(
        'select',
        {
          value: niche,
          onChange: (e) => setNiche(e.target.value),
        },
        React.createElement('option', { value: '' }, 'Select a niche'),
        React.createElement('option', { value: 'Fitness' }, 'Fitness'),
        React.createElement('option', { value: 'Marketing' }, 'Marketing'),
        React.createElement('option', { value: 'Technology' }, 'Technology')
      ),
      React.createElement('br', null),
      React.createElement('label', null, 'Tone:'),
      React.createElement(
        'select',
        {
          value: tone,
          onChange: (e) => setTone(e.target.value),
        },
        React.createElement('option', { value: '' }, 'Select a tone'),
        React.createElement('option', { value: 'Funny' }, 'Funny'),
        React.createElement('option', { value: 'Inspirational' }, 'Inspirational'),
        React.createElement('option', { value: 'Professional' }, 'Professional')
      ),
      React.createElement('br', null),
      React.createElement(
        'button',
        {
          type: 'button',
          onClick: handleGenerateCaption,
        },
        'Generate Caption'
      )
    ),
    React.createElement('h2', null, 'Generated Caption:'),
    React.createElement('p', null, caption),
    React.createElement('h2', null, 'Hashtags:'),
    React.createElement(
      'ul',
      null,
      hashtags.map((hashtag, index) =>
        React.createElement('li', { key: index }, hashtag)
      )
    )
  );
};

export default CaptionGenerator;