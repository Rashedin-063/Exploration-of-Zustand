import { useQuery } from "@tanstack/react-query"

import { getUsers } from "./api/user"
import { useUserStore } from "./state/userStore"


const App = () => {

  const {filters} = useUserStore()

  const { data: users, isLoading } = useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
     
  })

  console.log(filters);
  

  if (isLoading) return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Loading...
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <FiltersComponent />
      {users?.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}


function FiltersComponent() {
  const { setFilters } = useUserStore();

  // Imagine some form inputs here

  return null;
}

export default App