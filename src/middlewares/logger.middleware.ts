import { logger } from "@/utils/logger";
import { NextFunction, Request, Response } from "express";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const logMessage = `${req.method} ${
    req.originalUrl
  } - ${new Date().toISOString()} from ${req.ip}`;
  logger.info(logMessage);
  next();
};
