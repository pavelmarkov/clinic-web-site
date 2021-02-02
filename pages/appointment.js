import Layout from '../components/Layout'
import { useState } from 'react'
import Router from 'next/router'

const specs = ["Психотеропевт",
      "ЛОР",
      "Эндокринолог",
      "Психиатр",
      "Кардиолог",
      "Уролог-хирург",
      "Проктолог",
      "Инфекционист",
      "Уролог",
      "Офтальмолог",
      "Дерматолог",
      "Терапевт",
      "Онколог",
      "Гинеколог-хирург",
      "Ревматолог",
      "Нейрохирург",
      "Гинеколог",
      "Пульманолог",
      "Невролог",
      "Семейный врач"]
export default function Appointment() {
  const [info, setInfo] = useState({
    type: '',
    sec: '',
    person: '',
    spec: '',
    specFilter: ''
  })
  const [filt_specs, setSpecs] = useState(specs)
  function handleInput (e) {
    setInfo({
      ...info,
      specFilter: e.target.value
    })
    let filteredSpecs = specs.filter((name) => {
      return name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setSpecs(filteredSpecs)
  }
  return (
    <Layout>
      <div className="section register_section">
        <div className="section_header_container">
          <button className="btn" onClick={() => Router.push('/')}>Назад</button>
          <div className="section_header">Онлайн-запись на приём</div>
        </div>
        <div className="timeline_wrapper">
          <div className="node" id="node_1">
            <h3>Тип приёма</h3>
            <div>
              <button className={"choice_button" + (info.type == 'Консультация' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, type: 'Консультация'})}>Консультация</button>
              <button className={"choice_button" + (info.type == 'Диагностика' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, type: 'Диагностика'})}>Диагностика</button>
            </div>
            <div>
              <button className={"choice_button" + (info.sec == 'Первичный' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, sec: 'Первичный'})}>Первичный</button>
              <button className={"choice_button" + (info.sec == 'Вторичный' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, sec: 'Вторичный'})}>Вторичный</button>
            </div>
          </div>
          <div className="node" id="node_2">
            <h3>Кто к нам придёт?</h3>
            <div>
              <button className={"choice_button" + (info.person == 'Взрослый' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, person: 'Взрослый'})}>Взрослый</button>
              <button className={"choice_button" + (info.person == 'Ребёнок' ? ' chosen_btn' : '')}
                onClick={() => setInfo({...info, person: 'Ребёнок'})}>Ребёнок</button>
            </div>
          </div>
          <div className="node" id="node_3">
            <h3>Выберите специалиста</h3>
            <input 
              type="text" 
              className="search_spec" 
              placeholder="Поиск по специальности или ФИО"    
              value={info.specFilter} 
              onChange={handleInput}>
            </input>
            <div id="spec_list">
              {filt_specs.map((name, i)=>
                (
                  // className={state.currentSlide == i+1 ? "mySlides fade displayBlock" : "mySlides fade displayNone"} key={i+1}
                  <div className={"spec_group_name" + (info.spec == name ? " chosen_spec" : "")}
                        onClick={() => setInfo({...info, spec: name})}
                        key={i}>
                    {name}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="node" id="node_4">
            <button 
              className="action_button crimson_button find_spec_button"
              onClick={()=>{console.log(info)}}
            >Найти врача</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .timeline_wrapper {
          margin-left: 8.5rem;
          /* border-left: 3px solid #ddd; */
          border-left: 1px solid rgba(128, 125, 125, 0.5); /*#807D7D;*/
          margin-top: 3rem;
          margin-bottom: 3rem;
        }
        .node {
          padding-left: 4.5rem;
          padding-bottom: 1.5rem;
          position: relative;
        }
        .node h3,
        .node p {
          margin: 0;
        }
        .node::before {
          content: "";
          width: 1.5rem;
          height: 1.5rem;
          background: #fff;
          /* border: 2px solid #ccc; */
          border-radius: 50%;
          position: absolute;
          top: 0.1rem;
          left: -0.8rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d697b8;
          color: #fff;
        }
        #node_1::before {content: "1";}
        #node_2::before {content: "2";}
        #node_3::before {content: "3";}
        #node_4::before {content: "4";}
        h3 {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
        }
        .choice_button {
          padding: 8px 16px;
          margin: 0.5rem;
          /* Color / Green / Light */
          background: #fff;
          /* Shadow / card */
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 1.8rem;
          border: none;
          color: #14b48c;
          cursor: pointer;
        }
        .chosen_btn {
          background-color: #14b48c;
          color: #fff;
        }
        .search_spec {
          background: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 1.8rem;
          width: 40%;
          border: none;
          margin: 0.5rem;
          outline: none;
          padding: 0.3rem;
          padding-left: 0.8rem;
          color: rgba(51, 51, 51, 0.5);
        }
        .search_spec::placeholder {
          color: rgba(51, 51, 51, 0.5);
        }
        #spec_list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 70%;
          padding: 2rem;
        }
        .spec_group_name {
          flex: 0 32%;
          margin-bottom: 2%; /* (100-32*3)/2 */
          color: #333333;
          cursor: pointer;
        }
        .spec_group_name:hover {
          color: black;
          font-weight: bold;
        }  
        .chosen_spec {
          color: black;
          font-weight: bold;
        }       
        .find_spec_button {
          padding: 1rem 4rem;
        }
        .register_section {
          margin-top: 10%;
        }
      `}</style>
    </Layout>
  )
}
