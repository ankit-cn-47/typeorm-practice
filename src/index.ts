import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    connection.runMigrations();

}).catch(error => console.log(error));
