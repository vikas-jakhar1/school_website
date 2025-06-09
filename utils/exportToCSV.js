const { Parser } = require("json2csv");

module.exports = (res, data, filename) => {
  try {
    const parser = new Parser();
    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment(filename);
    return res.send(csv);
  } catch (err) {
    res.status(500).send("Error generating CSV");
  }
};