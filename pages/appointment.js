import Layout from '../components/Layout'
import { useState } from 'react'
import Router from 'next/router'
import Step1 from '../components/Appointment/Step1'
import Step2 from '../components/Appointment/Step2'
import Step3 from '../components/Appointment/Step3'

// import dynamic from 'next/dynamic'
// const Step2 = dynamic(() => import('../components/Appointment/Step2'),
//   { ssr: false })

export default function Appointment() {
  const [info, setInfo] = useState({
    type: '',
    sec: '',
    person: '',
    spec: '',
    specFilter: '',
    step: 1,
    approved: false
  })
  function renderStep(step) {
    switch (step) {
      case 1:
        return <Step1 info={info} setInfo={setInfo}></Step1>
      case 2:
        return <Step2 info={info} setInfo={setInfo}></Step2>
      case 3:
        return <Step3 info={info} setInfo={setInfo}></Step3>
      default:
        return <Step1 info={info} setInfo={setInfo}></Step1>
    }
  }
  return (
    <Layout>
      {renderStep(info.step)}
    </Layout>
  )
}
