import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Modal, TextField } from '@mui/material';
import LogoImg from '../assets/Cat-N-Dog-Logo copy.png';
import DogBg1 from '../assets/Group.png';
import DogBg2 from '../assets/Group 2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const dogBackgrounds = [DogBg1, DogBg2];
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setContactModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert("From Submitted");
    setFormData({ name: '', email: '', message: '' });
    handleCloseModal();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Dog background image carousel */}
      <Slider {...sliderSettings} style={{ width: '50%', maxWidth: '800px', height: '100vh', position: 'absolute', right: 0, top: 0, zIndex: -1 }}>
        {dogBackgrounds.map((dogBg, index) => (
          <img key={index} src={dogBg} alt={`Dog Background ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ))}
      </Slider>

      {/* Left side heading */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '50%', backgroundColor: '#F5E5E5', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', width: '100%' }}>
          <Typography variant="h4" sx={{ color: '#3E3E3E', opacity: 1, width: '100%', letterSpacing: '0px', textAlign: 'left', marginTop: 0 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Typography>

          <Typography variant="h6" sx={{ color: '#3E3E3E', opacity: 0.5, width: '100%', letterSpacing: '0px', textAlign: 'left', marginTop: 0 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Typography>

          <Box sx={{ display: 'flex', gap: '10px', marginTop: '50px' }}>
            <Button variant="contained" color="primary" sx={{ backgroundColor: 'black', color: 'white', margin: '0px', width: '40%' }}>
              Download on the App Store
            </Button>
            <Button variant="contained" color="secondary" sx={{ backgroundColor: 'black', color: 'white', margin: '0px', width: '40%' }}>
              Play on the Play Store
            </Button>
          </Box>
        </Box>
      </Box>

      
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', zIndex: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', display: 'flex', alignItems: 'center' }}>
            <img src={LogoImg} alt="Logo" style={{ marginRight: '10px' }} />
          </Typography>

          <Button href="#" sx={{ color: 'white' }}>About</Button>
          <Button href="#" sx={{ color: 'white' }}>Blog</Button>
          <Button href="#" sx={{ color: 'white' }}>Career</Button>
          <Button href="#" sx={{ color: 'white' }} onClick={handleContactClick}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contact Modal */}
      <Modal open={isContactModalOpen} onClose={handleCloseModal} aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', minWidth: '300px' }}>
          <Typography variant="h5" id="contact-modal-title" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
            />
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Hero;
