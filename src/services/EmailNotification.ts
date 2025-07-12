import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class EmailNotification implements INotificationChannel {
  constructor(private user: User, private logger: ILogger) {}

  send(message: string): void {
    this.logger.log(`Sending EMAIL to ${this.user.email}`);
    console.log(`Email sent to ${this.user.email}: ${message}`);
  }
}
