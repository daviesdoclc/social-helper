import React, {useEffect, useState} from 'react'

const Home = function Home() {

  const [data, setData] = useState("")

  useEffect(() => {

    const fetchData = async() => {

      try {

        const response = await fetch('/api/vercel')

        const text = await response.text()

        setData(text)

      } catch(error) {

        console.log(error)
      }
    }

    fetchData()

  }, [])

  return <>
    <div dangerouslySetInnerHTML={{ __html: data}} />
  </>
}

export default Home
