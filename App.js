//pegando as configuraçãoes do server

const app = require("./src/config/server");
const porta = process.env.PORTA;

app.listen(porta, () => console.log("API rodando na porta : http://localhost:" + porta))

