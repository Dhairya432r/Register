const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
  res.send(`hello world router`);
});

router.post('/register', async (req, res) => {





  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.json({ error: "plz fill it" });

  }

  try {

    const userExist = await User.findOne({ email: email });


    if (userExist) {
      return res.status(422).json({ error: "email is already used" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({ message: successfully });



  }
  catch (err) {
    console.log(err);
  }

});
module.exports = router;
