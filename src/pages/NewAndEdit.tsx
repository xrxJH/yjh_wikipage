import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useWikiForm } from '@/hooks/useWikiForm/useWikiForm';
import { WikiSchemaType } from '@/hooks/useWikiForm/wikiFormSchema';
import { useGetWikiDetail, useWikiEditor } from '@/service/queries/wiki';

export const NewAndEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams() as { id: string };
  const { data } = useGetWikiDetail(id);
  const { mutate: wikiMutate } = useWikiEditor(id);

  const isEditUrl = location.pathname.includes('/wiki/edit');
  const handleCancel = () => {
    navigate(-1);
  };
  const form = useWikiForm(data);

  const onSubmit = (value: WikiSchemaType) => {
    const body = {
      title: value.title,
      description: value.description,
      date: new Date().toISOString(),
      author: {
        id: crypto.randomUUID(),
        name: '코비' + crypto.getRandomValues(new Uint8Array(1))[0],
      },
    };

    wikiMutate(body);
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
            name="description"
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
