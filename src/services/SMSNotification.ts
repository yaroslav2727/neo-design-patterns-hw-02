import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class SMSNotification implements INotificationChannel {
  constructor(private user: User, private logger: ILogger) {}

  send(message: string): void {
    this.logger.log(`Sending SMS to ${this.user.phone}`);
    console.log(`SMS sent to ${this.user.phone}: ${message}`);
  }
}
