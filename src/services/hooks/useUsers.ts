import { useQuery } from "react-query"
import { api } from "../api"

interface userProps {
    id: string,
    name: string,
    email: string,
    createdAt: string
  }

 export async function getUsers() {
    const { data } = await api.get("http://localhost:3000/api/users")

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

    return users
  }

export function useUsers() {
    return useQuery<userProps[]>("users", getUsers, {
        staleTime: 1000 * 5,
      })
    
}