import { IErrorHandler, ISuccessHandler } from "@/types";
import { logger } from "./logger";

export const errorHandler = ({
  req,
  res,
  statusCode = 500,
  message = "Internal Server Error",
  error,
}: IErrorHandler) => {
  if (error && error.code?.startsWith("P") && error?.clientVersion) {
    message = "Database error";
    statusCode = 500;
  }

  if (error && error instanceof Error) {
    message = error.message;
  }

  if (error?.statusCode && typeof error.statusCode === "number") {
    statusCode = error.statusCode;
  }

  logger.error(`${req.method} ${req.originalUrl} -> ${message}`);

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export const successHandler = ({
  res,
  statusCode = 200,
  message = "Data fetched successfully",
  data = null,
}: ISuccessHandler) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
