import { useQuery } from "@tanstack/react-query"

import { getUsers } from "./api/user"


const App = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })

  if (isLoading) return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Loading...
    </div>
  );

  return <div className="flex flex-col justify-center items-center min-h-screen">{data?.map((user) => <div key={user.id}>
    {user.name}
  </div>)}</div>;
}
export default App