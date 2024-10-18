import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react';

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow';
  user: string;
  content: string;
  time: string;
}

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'like', user: 'Jane Doe', content: 'liked your post', time: '2 hours ago' },
    { id: 2, type: 'comment', user: 'John Smith', content: 'commented on your photo', time: '4 hours ago' },
    { id: 3, type: 'follow', user: 'Alice Johnson', content: 'started following you', time: '1 day ago' },
    { id: 4, type: 'like', user: 'Bob Wilson', content: 'liked your comment', time: '2 days ago' },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart size={20} className="text-red-500" />;
      case 'comment':
        return <MessageCircle size={20} className="text-blue-500" />;
      case 'follow':
        return <UserPlus size={20} className="text-green-500" />;
      default:
        return <Bell size={20} className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="bg-white rounded-lg shadow-md">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center p-4 border-b last:border-b-0">
            <div className="mr-4">{getIcon(notification.type)}</div>
            <div className="flex-grow">
              <p className="font-semibold">{notification.user} <span className="font-normal text-gray-600">{notification.content}</span></p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;