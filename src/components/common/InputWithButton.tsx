import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {
  placeholder: string;
  buttonText: string;
  onClick: () => void;
};

export function InputWithButton({ placeholder, buttonText, onClick }: Props) {
  return (
    <div className="flex w-full  items-center space-x-3">
      <Input type="text" placeholder={placeholder} className="w-full h-14" />
      <Button type="button" variant="secondary" onClick={onClick} className=" w-1/6 h-14">
        {buttonText}
      </Button>
    </div>
  );
}
