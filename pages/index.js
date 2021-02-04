
//import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Servs from '../components/Servs'

export default function Home({ads}) {
  return (
    <Layout>
      {Slider(ads)}
      <Servs/>
    </Layout>
  )
}

export async function getServerSideProps () {
  // console.log(200)
  // let url = "http://localhost:1337/advertisements"
  // let res = await fetch(url)
  // let data = await res.json()
  // console.log(data)
  const data = [
    {image:{url: "img6.jpg"}, text: '123', button: true},
    {image:{url: "img4.jpg"}, text: '123', button: false},
    {image:{url: "img8.jpg"}, text: '123', button: false},
  ]
  return {
    props: {
      one: 1, 
      str: "",
      ads: data
    }
  }
}
