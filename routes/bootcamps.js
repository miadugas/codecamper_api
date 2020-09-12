const express = require('express');
const router = express.Router();

//Adding routes
//Get all bootcamps route
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

//Get single bootcamp route
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

//Create a new bootcamp route
router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

//Update a bootcamp route
router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

//Delete a bootcamp route
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
