import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "./logger";

async function connect() {
    
const dbUri = config.get<string>("dbUri")
    try {
        
        await mongoose.connect(dbUri)
        Logger.info("Banco connectado");

    } catch (e) {
        Logger.error("Não foi possivel connectar");
        Logger.error(`Erro ${e}`);
        process.exit(1);
    }

}

export default connect;