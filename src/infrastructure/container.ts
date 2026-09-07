import { GetLatestPostsUseCase } from "@/application/use-cases/get-latest-posts.use-case";
import { SendContactMessageUseCase } from "@/application/use-cases/send-contact-message.use-case";
import { HashnodeBlogRepository } from "./blog/hashnode-blog-repository";
import { NodemailerMessageSender } from "./mail/nodemailer-message-sender";

/**
 * The only place in the app that knows which concrete adapter backs each
 * port. `app/` (routes and server components) should import use-cases from
 * here rather than reaching into `infrastructure/*` directly — that keeps
 * the wiring in one spot if an adapter is ever swapped out.
 */
const blogRepository = new HashnodeBlogRepository();
const messageSender = new NodemailerMessageSender();

export const getLatestPostsUseCase = new GetLatestPostsUseCase(blogRepository);
export const sendContactMessageUseCase = new SendContactMessageUseCase(messageSender);
