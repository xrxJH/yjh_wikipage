import { z } from 'zod';

export type WikiSchemaType = z.infer<typeof FormSchema>;

export const FormSchema = z.object({
  description: z
    .string()
    .min(10, {
      message: '본문은 10자 이상 작성해주세요.',
    })
    .max(2000, {
      message: '본문은 2000자 이상 작성할 수 없습니다.',
    }),
  title: z
    .string()
    .min(5, {
      message: '제목은 5자 이상 작성해주세요.',
    })
    .max(100, {
      message: '제목은 100자 이상 작성할 수 없습니다.',
    }),
});
