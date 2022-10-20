import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import * as cors from 'cors';
import helmet from 'helmet';
import routes from "./routes/index";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();

    //Middlewares
    app.use(cors());
    app.use(helmet());

    app.use(express.json());

    //Routes
    app.use('/', routes);

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
