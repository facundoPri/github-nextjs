import useSWR from 'swr'
import axios from 'axios'

export function useFetch(url: string) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await axios.get(`/api/${url}`)

    return response.data
  })

  return { data, error, mutate }
}
