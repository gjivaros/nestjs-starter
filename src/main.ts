import { NestFactory } from "@nestjs/core";
import { ExpressAdapter, NestExpressApplication } from "@nestjs/platform-express";
import express from "express";
import { AppModule } from "./app.module";
import { appConf, appLog } from "./context";
import { NestLogger } from "./nest-logger";

async function bootstrap() {
	const expressApp = express();
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
		new ExpressAdapter(expressApp),
		{
			logger: new NestLogger(),
		},
	);
	app.enableCors({ credentials: true, origin: "*" });
	if (appConf.thisServer.hostName) {
		await app.listen(appConf.thisServer.port, appConf.thisServer.hostName);
	} else {
		await app.listen(appConf.thisServer.port);
	}

	appLog.info(`Server up and running on port '${appConf.thisServer.port}'`);
}
bootstrap().catch(appLog.error);
