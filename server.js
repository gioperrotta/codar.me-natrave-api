import { app } from './setup.js';

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});