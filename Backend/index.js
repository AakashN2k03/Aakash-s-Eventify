const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const PeopleModel=require('./models/people')
const ImageModel=require('./models/image')
const GalleryModel=require('./models/gallery')
const ReviewModel=require('./models/feedback')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const multer=require('multer')
require("dotenv").config();

const app=express()
app.use(cors({
    origin: 'https://aakash-s-eventifyfrontend.onrender.com', // Allow requests from this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    credentials: true // Optional: if you need to send cookies or HTTP Auth info
}));
app.use(express.json())


app.use(bodyParser.json());
app.use('/imguploads', express.static('imguploads'));
app.use('/galleryuploads', express.static('galleryuploads'));


mongoose.connect("mongodb://localhost:27017/MERN_stack")

app.post('/registration',(req,res)=>
{
  PeopleModel.create(req.body)
  .then(people=>res.json(people))
  .catch(err=>res.json(err))
})
app.post('/login',(req,res)=>
{
    const {email,password}=req.body;
    PeopleModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password===password)
        {
            res.json("success")
        }
        else{
            res.json("pass incorrect")
        }
    }
       else{
        res.json("NO USER FOUND")
       }
    })
})
app.post('/send-email', async (req, res) => {
  try {
    // Extract required data from request body
    const { firstname, surname, email, sub, msg } = req.body;

    // Check if required data is provided
    if (!firstname || !surname || !email || !sub || !msg) {
      return res.status(400).send('Missing required fields');
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'aakofficial007@gmail.com', // Enter your Gmail address here
        pass: 'ntkr wcaz sqoo cdwx' // Enter your Gmail password here or use an app-specific password
      }
    });

    // Configure mail options
    const mailOptions = {
      from:email,
      to: 'aakofficial007@gmail.com', // Send the email to the provided email address
      subject: sub,
      text: `Name: ${firstname} \n\nLastName: ${surname}\n\nMessage: ${msg}\n\n${email}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});

app.post('/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100, // Razorpay expects amount in paise
    currency,
    receipt
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const crypto = require('crypto');

  const hmac = crypto.createHmac('sha256',  process.env.RAZORPAY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === razorpay_signature) {
    res.json({ status: 'success' });
  } else {
    res.json({ status: 'failure' });
  }
});

//image upload -->subgallery

const Storage=multer.diskStorage({
   destination:'imguploads',
   filename:(req,file,cb)=>{
    cb(null,file.originalname)
   },
});

const upload=multer({
  storage:Storage
}).single('imageupload')

app.get("/",(req,res)=>{
  res.send("file uploaded")
})
app.post("/upload",(req,res)=>{
  upload(req,res,(err)=>{
    if(err)
      {
        console.log(err)
      }
    
    else
    {
      const newimage=new ImageModel({
        name:req.body.name,
        image:{
          data:req.file.filename,
          contentType:'image/png'
        }
      })
      newimage.save()
      .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
    }
  })
})
//retreiving img from backend to imgslider component
app.get('/images', async (req, res) => {
  try {
    const images = await ImageModel.find();
    const imagesWithUrls = images.map(image => ({
      name: image.name,
      imageUrl: `https://aakash-s-eventifyfrontend.onrender.com/imguploads/${image.image.data}`
    }));
    res.json(imagesWithUrls);
  } catch (err) {
    res.status(500).send(err);
  }
});


// images for gallery
const Storage1=multer.diskStorage({
  destination:'galleryuploads',
  filename:(req,file,cb)=>{
   cb(null,file.originalname)
  },
});

const galleryupload=multer({
 storage:Storage1
}).single('galleryupload')

app.get("/",(req,res)=>{
 res.send("file uploaded")
})
app.post("/galleryupload",(req,res)=>{
 galleryupload(req,res,(err)=>{
   if(err)
     {
       console.log(err)
     }
   
   else
   {
     const newimage=new GalleryModel({
       name:req.body.name,
       image:{
         data:req.file.filename,
         contentType:'image/png'
       }
     })
     newimage.save()
     .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
   }
 })
})
//retrieving img from db to subgallery
app.get('/gallery', async (req, res) => {
  try {
    const images = await GalleryModel.find();
    const imagesWithUrls = images.map(image => ({
      name: image.name,
      imageUrl: `https://aakash-s-eventifyfrontend.onrender.com/galleryuploads/${image.image.data}`
    }));
    res.json(imagesWithUrls);
  } catch (err) {
    res.status(500).send(err);
  }
});

//
// GET route to fetch all feedback
app.get('/feedback', async (req, res) => {
  try {
    const feedback = await ReviewModel.find();
    res.status(200).json(feedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/feedback', async (req, res) => {
  try {
      const { message } = req.body;

      // Create a new feedback instance
      const newFeedback = new ReviewModel({
          message
      });

      // Save feedback to database
      const savedFeedback = await newFeedback.save();

      res.status(201).json(savedFeedback);
  } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
