import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.result;
  const notificationsEntities = normalizedData.entities.notifications;
  const messagesEntities = normalizedData.entities.messages;

  return notifications
    .filter(id => notificationsEntities[id].author === userId)
    .map(id => messagesEntities[notificationsEntities[id].context]);
}

export const notificationsNormalizer = (data) => normalize(data, [notification]);

export { normalizedData };
