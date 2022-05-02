const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(express.json());
app.use(cors());

let friends = [`nitin`, `cameron`, `jack`, `ron`, `riley`, `jeddy`, `harry`, `jess`, `lily`, `hermoine`];

app.get(`/api/users`, (req, res) => {
    res.status(200).send(friends)
});

app.get(`/weather/:temperature`, (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
})



let SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => console.log(`server running on port 4000`));
