const User = require('../models/usermodel');

// Controller to create a new user
const createUser = async (req, res) => {
  try {
    const { Username, Usermail } = req.body;
    const newUser = new User({ Username, Usermail });
    await newUser.save();
    res.status(201).json({ message: 'Submitted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await User.findByIdAndDelete(userId);  
      if (!result) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Respond with success message
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };

  const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { Username, Usermail } = req.body;
      // console.log('Received data:', { Username, Usermail });
      const user = await User.findByIdAndUpdate(userId, { Username, Usermail }, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user', error });
    }
  };


module.exports = {
  createUser,deleteUser,updateUser
};
