1. Создать кастом хук для поиска по таблице
2. useSearch(text,items,keys)
const keys=['name','spell'] и тд

 const filteredItems = props.items.filter((item) =>
      keys.some((key)=>item[key].toLowerCase().includes(text)
                                          team.name.toLowerCase().includes(searchText.toLowerCase())
    );



const [teamList, setTeamList] = useState(slicedTeams);
const [searchText, setSearchText] = useState('');

const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const filteredTeams = props.teams.filter((team) =>
      team.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setTeamList(filteredTeams);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText.length <= 2) {
      setTeamList(slicedTeams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText.length]);
