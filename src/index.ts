import { writeFileSync } from "fs";
import { log } from "./log.js";

const message: string = "hello world again";

writeFileSync("./test.txt", "this is test data");

log(message);
