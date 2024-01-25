import { useForm } from 'react-hook-form';
import { FormSchema, WikiSchemaType } from './useWikiFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useWikiForm = () => {
  return useForm<WikiSchemaType>({
    resolver: zodResolver(FormSchema),
  });
};
