import type { NextPage } from 'next';
import React from 'react';
import Card from '../components/Card';

const Home: NextPage = () => (
  <div>
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-16 flex-wrap justify-center">
        {/* Dummy Data */}
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
        <Card
          name="youtube"
          url="https://www.youtube.com"
          image="http://www.vectorico.com/download/social_media/youtube-icon.png"
        />
      </div>
    </div>
  </div>

);

export default Home;
