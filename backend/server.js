const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('<your MongoDB Atlas connection string>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
