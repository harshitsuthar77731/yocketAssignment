const express = require("express");
const app = express();
app.use(express.json())
const PORT = 3001;

const cityRoutes = require('./routes/cityRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const captureRoutes = require('./routes/captureRoutes');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use('/api/cities', cityRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/capture', captureRoutes);

let server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server