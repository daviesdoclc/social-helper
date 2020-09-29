import React, {useEffect, useState} from 'react'

export async function getServerSideProps(context) {
  return {
    props: {
      url: context.query.url
    }
  }
}

const Home = (props) => {

  const [data, setData] = useState("")

  useEffect(() => {

    const fetchData = async() => {

      try {

        const response = await fetch('/api/vercel?url=' + props.url)

        const text = await response.text()

        setData(text)

      } catch(error) {

        console.log(error)
      }
    }

    fetchData()

  }, [])

  // useEffect(() => {
  //   document.open()
  //   document.write(data)
  //   document.close()
  // }, [data])

  return <>
    <div dangerouslySetInnerHTML={{ __html: data}} />
  </>
}

export default Home
