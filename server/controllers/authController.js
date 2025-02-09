import users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

     // Generate JWT
     const generateAccessToken = (userId) => {
        return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
    };
    
    const generateRefreshToken = (userId) => {
        return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d'});
    };


export const logoutUser = (req,res) =>{
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.status(200).json({message:'Loggged out Successfully'});
    console.log("Logged Out");
};


export const checkAuth = async(req,res) =>{
    try{
        const token = req.cookies.accessToken;
        if(!token){
            return res.status(401).json({isAuthenticated:false});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET );
        const user = await users.findById(decoded.userId);
        if(!user){
            return res.status(401).json({isAuthenticated:false});
        }
        res.status(200).json({ isAuthenticated: true, user: { id: user._id, email: user.email } });
    }catch(error){
        console.error('Auth Check failed',error);
        res.status(401).json({isAuthenticated:false});
    }
}

export const registerUser = async(req,res) =>{
    console.log(req.body);
    try{
        const { email , password } = req.body;
        if(!email || !password){
            return res.status(400).json({error:'All fields are required'});
        }
        const user = await users.findOne({email});
        if(user){
            return res.status(400).json({error:'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = new users({email,password:hashedPassword});
        await newUser.save();

        const accessToken = generateAccessToken(newUser._id);
        const refreshToken = generateRefreshToken(newUser._id);
     
        res.cookie('accessToken', accessToken, { httpOnly: true , secure:true, maxAge:500000, sameSite:'None'});
        res.cookie('refreshToken', refreshToken, { httpOnly: true , secure:true, maxAge:604800000, sameSite:'None'});
        console.log(accessToken);
        res.status(201).json({message:'User registered successfully'});
        console.log("User Registered")
    }catch(error){
        console.error(error);
        res.status(500).json({error:'Failed to register user'});
    }

};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        res.cookie('accessToken',accessToken,{httpOnly:true,secure:true,maxAge:500000,sameSite:'None'});
        res.cookie('refreshToken',refreshToken,{httpOnly:true,secure:true,maxAge:604800000,sameSite:'None'});    

        res.status(200).json({ message: 'Logged in successfully' });
        console.log("User Logged in");

    } catch (error) {
        console.error(error); // Use console.error for logging errors
        res.status(500).json({ error: 'Failed to login user' });
    }
};
