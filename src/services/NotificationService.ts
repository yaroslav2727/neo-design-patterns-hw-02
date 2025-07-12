import { INotificationChannel, INotificationService } from "../core/interfaces";

export class NotificationService implements INotificationService {
  private channels: INotificationChannel[] = [];

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  send(message: string): void {
    this.channels.forEach((channel) => channel.send(message));
  }
}
