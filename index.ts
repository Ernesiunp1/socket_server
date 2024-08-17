import bodyParser, { urlencoded } from "body-parser";
import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import  router  from "./routes/routes";
import cors from 'cors';




const server = new Server();



server.app.use(bodyParser.urlencoded({ extended: true }))
server.app.use(bodyParser.json())

server.app.use(cors({ origin: true, credentials: true }))

server.app.use("/", router)





server.start(() => {
    console.log(`Server corriendo en el puerto ${SERVER_PORT}`);
});