// src/api/chat/routes/chat.ts
export default {
    routes: [
      {
        method: 'POST',
        path: '/chat/ask',
        handler: 'chat.ask',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  