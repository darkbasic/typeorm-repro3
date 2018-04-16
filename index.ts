// For TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(() => {
  console.log('Running...');
});