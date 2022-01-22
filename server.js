const http = require("http");
let random;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    random = Math.floor(100 * Math.random());
    return res.end(random);
  }

  if (req.url === "/end") {
    return res.end(
      JSON.stringify({
        message: "Bye",
      })
    );
  } else {
    res.end(`Bye2`);
  }
});

server.listen(4000, () => {
  console.log(`Server listening to port 4000`);
});
