---
order: 1
group:
  path: /data
  title: 数据展示
  order: 2
---

## Tooltip

Demo:

```tsx
import React from 'react';
import { Tooltip, Button } from 'chazi-ui';

export default () => (
  <>
    <p>
      <Tooltip content="bottom" color="red">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip content="bottomLeft" placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Tooltip>
      <Tooltip content="bottomRight" placement="bottomRight" color="#58bc58">
        <Button>bottomRight</Button>
      </Tooltip>
    </p>
    <p style={{ marginTop: 50 }}>
      <Tooltip content="bottom" placement="left">
        <Button type="success">left</Button>
      </Tooltip>
      <Tooltip content="bottom" placement="right">
        <Button type="success">right</Button>
      </Tooltip>
    </p>
    <p style={{ marginTop: 50 }}>
      <Tooltip content="top" placement="top">
        <Button type="warning">top</Button>
      </Tooltip>
      <Tooltip content="topLeft" placement="topLeft">
        <Button type="info">topLeft</Button>
      </Tooltip>
      <Tooltip content="topRight" placement="topRight">
        <Button type="warning">topRight</Button>
      </Tooltip>
    </p>
  </>
);
```

<API></API>
