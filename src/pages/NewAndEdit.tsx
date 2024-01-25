import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownCustom } from '@/components/wikiDetail/DropdownCustom';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useLocation, useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  body: z
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

export const NewAndEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditUrl = location.pathname.includes('/wiki/edit');
  const hasData = isEditUrl;
  const handleCancel = () => {
    navigate(-1);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: hasData ? 'hasData' : '',
      body: hasData ? 'hasData' : '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="flex flex-col justify-start w-full h-full gap-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full gap-6 "
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-end ">
                <FormControl className="flex flex-col flex-grow ">
                  <Input placeholder="제목" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-end flex-grow h-full ">
                <FormControl className="flex flex-col flex-grow ">
                  <Textarea
                    placeholder="코딩허브의 강의와 관련된 정보를 자유롭게 나누어주세요."
                    {...field}
                    className="resize-none"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex self-end w-1/3 gap-2">
            <Button variant="secondary" onClick={handleCancel} className="flex flex-1">
              취소
            </Button>
            <Button type="submit" className="flex flex-1">
              {isEditUrl ? '수정' : '등록'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
