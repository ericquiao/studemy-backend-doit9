const http = require("http")
let random;


const server = http.createServer((req,res) => {
    random = Math.floor(Math.random()*1000);
    return res.end(random.toString());
})



server.listen(4000, () => {
  console.log(`Server listening to port 4000`);
});
