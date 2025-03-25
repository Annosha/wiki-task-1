
import './App.css';
import Hobby from './components/hobby/Hobby';
import Form from './components/form/Form';
import { useState,useEffect } from 'react';

function App() {
  const [background, setBackground] = useState('#3498db');  
  const [bannerText, setBannerText] = useState('My hobby is Coding');  
  const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'); 

  useEffect(() => {
    const getGitHubProfilePicture = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/Annosha`);
        const data = await response.json();
        const profilePictureUrl = data.avatar_url;
        setImageUrl(profilePictureUrl);  
      } catch (error) {
        console.error('Error fetching GitHub profile:', error);
      }
    };

    getGitHubProfilePicture(); 

  }, []); 

  const handleBackgroundChange = (event) => {
    setBackground(event.target.value);
  };


  const handleTextChange = (event) => {
    setBannerText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome to My Page, My name is Annosha</h1>


      <Hobby background={background} bannerText={bannerText} imageUrl={imageUrl} />


      <Form 
        onBackgroundChange={handleBackgroundChange} 
        onTextChange={handleTextChange} 
        onImageChange={handleImageChange} 
      />
    </div>
  );
}

export default App;
