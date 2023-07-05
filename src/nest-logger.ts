import { LoggerService } from "@nestjs/common";
import { appLog } from "./context";

export class NestLogger implements LoggerService {
	/**
	 * Write a 'log' level log.
	 */
	log(message: any, ...optionalParams: any[]) {
		appLog.debug("[NESTJS-LOG]: ", message, optionalParams);
	}

	/**
	 * Write an 'error' level log.
	 */
	error(message: any, ...optionalParams: any[]) {
		appLog.error("[NESTJS-LOG]: ", message, optionalParams);
	}

	/**
	 * Write a 'warn' level log.
	 */
	warn(message: any, ...optionalParams: any[]) {
		appLog.warn("[NESTJS-LOG]: ", message, optionalParams);
	}

	/**
	 * Write a 'debug' level log.
	 */
	debug?(message: any, ...optionalParams: any[]) {
		appLog.debug("[NESTJS-LOG]: ", message, optionalParams);
	}

	/**
	 * Write a 'verbose' level log.
	 */
	verbose?(message: any, ...optionalParams: any[]) {
		appLog.debug("[NESTJS-LOG]: ", message, optionalParams);
	}
}
