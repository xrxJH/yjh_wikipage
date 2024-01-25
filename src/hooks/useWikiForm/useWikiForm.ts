import { useForm } from 'react-hook-form';
import { FormSchema, WikiSchemaType } from './wikiFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useWikiForm = (wikiDetail?: { title: string; body: string }) => {
  return useForm<WikiSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: wikiDetail && wikiDetail.title,
      body: wikiDetail && wikiDetail.body,
    },
  });
};
