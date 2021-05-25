const app = require("express")();
const routes = require("./routes");
const cors = require("cors");
const DownloadCsvFile = require("./services/DownloadCsvFile");

const port = 3000;

app.use(cors());
app.use(routes);

app.listen(port, async () => {
  const downloadCsvFile = new DownloadCsvFile();
  await downloadCsvFile.run();

  console.log(`Server is running on port ${port}`);
});
