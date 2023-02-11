import { useQuery } from "react-query"
import { api } from "../api"

type userProps = {
    id: string,
    name: string,
    email: string,
    createdAt: string
  }

  type getUsers = {
    totalCount: number
    users:userProps[]
  }

 export async function getUsers(page: number): Promise<getUsers> {
    const { data, headers} = await api.get("http://localhost:3000/api/users", {
      params: {
        page,
      }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map((user: userProps ) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        } )
      }
    })

    return {
      users, 
      totalCount
    }
  }

  export function useUsers(page: number) {
    return useQuery<getUsers>(['users', page] , () => getUsers(page), {
      staleTime: 1000 * 60 * 10
      })
    
}