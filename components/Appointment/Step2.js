import { useState } from 'react'
// import getDates from './dates'
// import getTimes from './times'
// let {dates, doc_num} = getDates()
// let times = getTimes()

//import dynamic from 'next/dynamic'
//import React from 'react'
const Step2 = (props) => {
  console.log(props)
  const {info, setInfo} = props
  // Transform
  // const [transformStyle, setTransform] = useState({
  //   style: {transform: `translate(${0}px)`},
  //   t_value: 0
  // })
  // // console.log(transformStyle.t_value)
  // function trans(step){
  //   // console.log(step)
  //   if((transformStyle.t_value < -1500 && step < 0)
  //   || (transformStyle.t_value > 0 && step > 0)) {
  //     return
  //   }
  //   let new_t = transformStyle.t_value + step
  //   // console.log(transformStyle.t_value)
  //   setTransform({
  //     style: {transform: `translate(${new_t}px)`},
  //     t_value: new_t
  //   })
  // }
  // ----------------------------------------------------
  return (
    <>
      <div className="section register_section" >
        <div className="section_header_container">
          <button className="btn" onClick={() => setInfo({...info, step: 1})}>Назад</button>
          <div className="section_header">Онлайн-запись на приём – Выбор врача</div>
        </div>
        <div className="tt_days">
          <div className="wheel left"></div>
          <div id="scroll" className="days_container">
          </div>
          <div className="wheel right"></div>
        </div>
        <div className="doc_table">
          <div className="serv_doc_container">
            <img src="/img/time_table/vrach1.png" alt=""></img>
            <div className="doc_desc">
              <div className="doc_name">Маллаев Руслан Шахбанович</div>
              <div className="doc_spec">Главный врач, Хирург</div>
              <div className="price">2500 руб</div>
            </div>
          </div>
          <div className="table" id="table">
          </div>
        </div>
        <div className="doc_table">
          <div className="serv_doc_container">
            <img src="/img/time_table/vrach1.png" alt=""></img>
            <div className="doc_desc">
              <div className="doc_name">Маллаев Руслан Шахбанович</div>
              <div className="doc_spec">Главный врач, Хирург</div>
              <div className="price">2500 руб</div>
            </div>
          </div>
          <div className="table" id="table1">
          </div>
        </div>
      </div>
      <style jsx>{`
        .table {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background-color: #F8F8F8;
          padding: 20px;
          max-width: 680px;
          /* margin-top: 20%; */
        }
        .elem {
          display: flex;
          justify-content: center;
          padding: 8px;
          margin: 8px;
          text-align: center;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 0.9rem;
          font-size: 16px;
          line-height: 24px;
          cursor: pointer;
        }
        .transparent {
          opacity: 0;
          cursor: default;
        }
        /*-------------*/
        .serv_doc_container {
          display: flex;
          justify-content: start;
          align-items: center;
        }
        .doc_desc {
          margin: 2rem;
        }
        .doc_spec {
          font-size: 14px;
          line-height: 24px;
          color: #555555;
        }
        .doc_name {
          font-size: 16px;
          line-height: 24px;
          color: #000000;
        }
        /*-------------*/
        .doc_desc > * {
          margin-top: 5px;
        }
        .price {
          color: #2A37AB;
          font-weight: bold;
        }

        .tt_days {
          width: 100%;
          position: relative;
          height: 100px;    
          overflow-x: auto;
          overflow-y: hidden;
          display: flex;
          align-items: center;
          justify-content: center; 
          text-align: center; 
        }
        .days_container {
          position: absolute;
          display: flex;
          left: -20px;  
          /* transform: translate(-30px); */
        }
        .day {
          width: 150px;
          height: 50px;
          margin: 15px;
          float: left;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          background-color: white;
          border-radius: 10px;
          justify-content: space-around;
          cursor: pointer;
        }
        .day_name {
          position: static;
          color: #0F8764;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .doc_count {
          position: static;
          color: #333333;
          opacity: 0.7;
          flex: none;
          order: 1;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .left {
          left: 0;
        }
        .right {
          right: 0;
        }
        .left::before {
          content: "<<";
          color: #0F8764;
        }
        .right::after {
          content: ">>";
          color: #0F8764;
        }
        .wheel {
          position: absolute;
          z-index: 5;
          padding: 30px 15px;
        }
        .wheel:hover {
          background-color: rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
        .doc_table {
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid rgba(15,135,100,0.4);
        }
        .register_section {
          margin-top: 10%;
        }
      `}</style>
    </>
  )
}

// const NoSsr = props => (
//   <React.Fragment>{props.children}</React.Fragment>
// )

// export default dynamic(() => Promise.resolve(NoSsr), {
//   ssr: false
// })
export default Step2;

