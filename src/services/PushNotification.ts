import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class PushNotification implements INotificationChannel {
  constructor(private user: User, private logger: ILogger) {}

  send(message: string): void {
    this.logger.log(`Sending PUSH to ${this.user.deviceToken}`);
    console.log(`Push sent to ${this.user.deviceToken}: ${message}`);
  }
}
