const express = require("express");

const server = express();

const PORT = process.env.PORT || 4002;
server.listen(PORT, () => console.log(`server is on port${PORT}`));
