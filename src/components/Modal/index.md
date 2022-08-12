---
order: 2
group:
  path: /response
  title: 反馈
  order: 3
---

## Modal

```tsx
import React, { useState } from 'react';
import { Button, Modal, Message } from 'l-ui';
export default () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Button type="success" onClick={() => setVisible1(true)}>
        打开弹窗2
      </Button>

      <Modal
        visible={visible}
        title="Basic Modal"
        onCancel={() => setVisible(false)}
        onOk={() => {
          Message.success('confirm');
          setVisible(false);
        }}
      >
        我是弹窗呀
      </Modal>
      <Modal
        visible={visible1}
        title="Basic Modal2"
        onCancel={() => setVisible1(false)}
        onOk={() => {
          Message.success('confirm');
          setVisible1(false);
        }}
      >
        我是弹窗2呀
      </Modal>
    </>
  );
};
```
