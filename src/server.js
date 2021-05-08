const express = require("express");
const app = express();
const path = require("path");
const DownloadCsvFile = require("./services/DownloadCsvFile");

const routes = require("./routes");

const port = 3000;

app
  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .use(routes)

  .listen(port, async () => {
    const downloadCsvFile = new DownloadCsvFile();
    await downloadCsvFile.run();

    console.log(`Server is running on port ${port}`);
  });
