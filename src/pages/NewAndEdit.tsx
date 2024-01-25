import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { useWikiForm } from '@/hooks/useWikiForm/useWikiForm';
import { WikiSchemaType } from '@/hooks/useWikiForm/wikiFormSchema';

export const NewAndEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditUrl = location.pathname.includes('/wiki/edit');
  const hasData = isEditUrl;
  const handleCancel = () => {
    navigate(-1);
  };
  const data = hasData ? { title: '기존 제목', body: '기존 내용' } : undefined;
  const form = useWikiForm(data);

  const onSubmit = (data: WikiSchemaType) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // 글 추가 로직
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
