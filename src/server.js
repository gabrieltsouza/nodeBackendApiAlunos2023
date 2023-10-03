import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log(`Listenning on port ${port}`);
  console.log(`CTRL + Click on http://localhost:${port}`);
});
