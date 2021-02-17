
//import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Servs from '../components/Servs'
import AboutUs from '../components/AboutUs'

export default function Home({ads}) {
  return (
    <Layout>
      {Slider(ads)}
      <Servs/>
      <AboutUs/>
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
    {image:{url: "img6.jpg"}, text: '20% скидка на первый прием', button: true},
    {image:{url: "img4.jpg"}, text: 'Caption Two number #', button: false},
    {image:{url: "img8.jpg"}, text: 'Caption Three number #', button: false},
  ]
  return {
    props: {
      one: 1, 
      str: "",
      ads: data
    }
  }
}
