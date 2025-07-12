export interface INotificationChannel {
  send(message: string): void;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  send(message: string): void;
}
