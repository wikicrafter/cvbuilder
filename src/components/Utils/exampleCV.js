// Import necessary packages
import { v4 as uuidv4 } from 'uuid';
import examplePhoto from '../../assets/example_photo.jpg';

// Define the exampleCV object with default values
const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Senior Web Developer',
    photo: examplePhoto,
    address: 'Example Street 10',
    phoneNumber: '123456789',
    email: 'john.doe@gmail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Web Developer',
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      from: '2015',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company name',
      city: 'City name',
      from: 'From',
      to: 'To',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Technology',
      city: 'Oklahoma',
      degree: 'Master',
      subject: 'Science',
      from: '2008',
      to: '2010',
    },
    {
      id: uuidv4(),
      universityName: 'University of Design Art',
      city: 'New York',
      degree: 'Bachelor',
      subject: 'Visual Art',
      from: '2005',
      to: '2008',
    },
    {
      id: uuidv4(),
      universityName: 'University name',
      city: 'City name',
      degree: '',
      subject: '',
      from: 'From',
      to: 'To',
    },
  ],
  projects: [
    {
      id: uuidv4(),
      projectName: 'Portfolio Website',
      date: '2024',
      description:
        'Built a responsive portfolio with React and styled-components; implemented dynamic routing and optimized Lighthouse scores to 95+.',
    },
    {
      id: uuidv4(),
      projectName: 'E-commerce Dashboard',
      date: '2023',
      description:
        'Developed an analytics dashboard visualizing sales KPIs; integrated REST APIs and added role-based access control.',
    },
    {
      id: uuidv4(),
      projectName: 'Landing Page Redesign',
      date: '2022',
      description:
        'Redesigned marketing site with A/B tested hero copy and modular components; delivered 18% uplift in conversions.',
    },
  ],
};

// Export the exampleCV object
export default exampleCV;
