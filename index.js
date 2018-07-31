'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const { CLIENT_ORIGIN } = require('./config');

const data = [
  {
    'id': 1,
    'posted_date': '2015-12-01T05:00:00.000Z',
    'organization': 'Optix Family Eye Care',
    'location': 'Plainview, NY',
    'applicants': 5,
    'score': 95,
    'contract_type': 'FT',
    'job_title': 'Optometrist',
    'image': 'https://crawfordeyecare.com/wp-content/uploads/Office_Interior_Small.jpg'
  },
  {
    'id': 2,
    'posted_date': '2015-11-15T05:00:00.000Z',
    'organization': 'Optix Family Eye Care',
    'location': 'Plainview, NY',
    'applicants': 5,
    'score': 90,
    'contract_type': 'FT',
    'job_title': 'Optician',
    'image': 'https://crawfordeyecare.com/wp-content/uploads/Office_Interior_Small.jpg'
  },
  {
    'id': 3,
    'posted_date': '2015-11-10T05:00:00.000Z',
    'organization': 'SVS Vision',
    'location': 'San Diego, CA',
    'applicants': 2,
    'score': 88,
    'contract_type': 'PT',
    'job_title': 'Optician',
    'image': 'http://drvooptometry.com/wp-content/uploads/2013/05/Office2.jpeg'
  },
  {
    'id': 4,
    'posted_date': '2015-11-07T05:00:00.000Z',
    'organization': 'Mott Optical',
    'location': 'San Diego, CA',
    'applicants': 10,
    'score': 80,
    'contract_type': 'FT',
    'job_title': 'Opthalmic Technician',
    'image': 'http://www.stcharlesvision.com/wp-content/uploads/2016/03/140410-boutte-027-1024x681.jpg'
  },
  {
    'id': 5,
    'posted_date': '2015-11-05T05:00:00.000Z',
    'organization': 'Mott Optical',
    'location': 'San Diego, CA',
    'applicants': 8,
    'score': 75,
    'contract_type': 'FT',
    'job_title': 'Front Desk Receptionist',
    'image': 'http://www.stcharlesvision.com/wp-content/uploads/2016/03/140410-boutte-027-1024x681.jpg'
  }
];

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

/* ========== GET/READ ALL ITEMS ========== */
app.get('/api/data', (req, res) => {
  res.json(data);
});
  
app.listen(8080, () => console.log('App listening on port 8080'));