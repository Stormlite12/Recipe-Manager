import User from '../models/Users.js';

export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password'); // Exclude the password field
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.status(500).json({ error: 'Failed to fetch user information' });
  }
};