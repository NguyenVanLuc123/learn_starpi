import { Context } from 'koa';
import { generateMessage } from '../services/chat';

function generateDocumentId(length = 24) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export default {
  async ask(ctx: Context) {
    const { message } = ctx.request.body;

    if (!message || typeof message !== 'string') {
      return ctx.badRequest('Missing or invalid message');
    }

    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('Bạn chưa đăng nhập');
    }

    try {
      const reply = await generateMessage(message);
      const chat_id = generateDocumentId();

      const saved = await strapi.entityService.create('api::chat.chat', {
        data: {
          message,
          reply,
          users_permissions_user: user.id,
          chat_id
        },
      });

      return ctx.send({
        success: true,
        message: saved.reply,
        chat_id: saved.chat_id,
      });

    } catch (err) {
      strapi.log.error('Lỗi xử lý chat:', err);
      return ctx.internalServerError('Lỗi khi xử lý hoặc lưu chat');
    }
  },
};
