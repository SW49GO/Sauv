import { useEffect, useState } from "react"

export function useFetch(url) {

    // Declaration of three states to handle loading, data and errors
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
  
    useEffect(() => {
      if (!url) return
      setLoading(true)
  
      // Defining an asynchronous fetchData function to perform the query
      async function fetchData() {

        try {
          const response = await fetch(url)
          const data = await response.json()
          // Update data status with received data
          setData(data)
        } catch (err) {
          console.log(err)
          // On error, update error status to true
          setError(true)
        } finally {
          // End of loading, reset isLoading
          setLoading(false)
        }
      }
      fetchData()
    }, [url]) // The useEffect hook depends on the URL
    
    // Return object containing the three states
    return { isLoading, data, error }
  }