import { useForm } from 'react-hook-form';
import { FormSchema, WikiSchemaType } from './wikiFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useWikiForm = (wikiDetail?: Wiki) => {
  return useForm<WikiSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: wikiDetail && wikiDetail.title,
      description: wikiDetail && wikiDetail.description,
    },
  });
};
