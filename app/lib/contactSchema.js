import z from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().max(254).email(),
  message: z.string().trim().min(10).max(1000),
  website: z.string().optional(), // honeypot: must be empty
});
export default contactSchema;
