interface Wiki {
  id: string;
  title: string;
  date: string;
  description: string;
  author: {
    id: string;
    name: string;
  };
}

interface NewWikiBody {
  title: string;
  description: string;
  date: string;
  author: {
    id: string;
    name: string;
  };
}

type WikiTitles = Pick<Wiki, 'id' | 'title'>;
