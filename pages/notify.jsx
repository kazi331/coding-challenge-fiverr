import { Button, notification, Space } from 'antd';
import React from 'react';

const Notify = ({user}) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: `${user} Appointed!`,
      description:
        'Say thanks to him!',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      </Space>
    </>
  );
};
export default Notify;