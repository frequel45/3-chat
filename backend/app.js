const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const assistantRoutes = require('./routes/assistantRoutes.js');

require('dotenv').config();

const app = express();

app.use(helmet())
 // directives: {
  //  defaultSrc: ["'self'"],
    //styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
   // scriptSrc: ["'self'", "'sha256-ABC123...'", 'maxcdn.bootstrapcdn.com'], // Replace with actual hash of your script
  //},
//);
app.use(cors());
app.use(express.json());

app.use('/api/assistant', assistantRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
