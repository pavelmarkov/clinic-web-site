
const AboutUs = () => {
  return (
    <>
      <div className="section about_us_section">
        <div className="section_header">О нас</div>
        <p className="about_us_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga eligendi doloribus tenetur voluptatem iste ipsa consectetur ullam, sequi est?
          Molestias nobis harum veritatis quam eligendi pariatur impedit, asperiores cumque exercitationem?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae inventore exercitationem,
          odio vel esse fugiat sunt expedita consectetur assumenda odit magni perspiciatis voluptas soluta
          quaerat dolore totam, consequuntur aut! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga eligendi doloribus tenetur voluptatem iste ipsa consectetur ullam, sequi est?
          Molestias nobis harum veritatis quam eligendi pariatur impedit, asperiores cumque exercitationem?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae inventore exercitationem,
          odio vel esse fugiat sunt expedita consectetur assumenda odit magni perspiciatis voluptas soluta
          quaerat dolore totam, consequuntur aut!</p>
        <div className="about_us_rect"></div>
        <img className="chief_image" src="/img/chief.png"></img>
        <div className="chief_signature">
          <div className="chief_name">Фёдор Григорьевич Углов</div>
          <div className="chief_spec">Главный врач</div>
        </div>
      </div>
      <style jsx>{`
        .about_us_text {
          /* font-size: 16px;
          line-height: 24px; 
          font-size: 1.5vw;
          line-height: 2.2vw;*/
          font-size: 1.1vw;
          line-height: 1.7vw;
          color: #333333;
          width: 60%;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .about_us_section {
          background-color: rgba(128, 125, 125, 0.05);
          position: relative;
        }
        .about_us_rect {
          position: absolute;
          width: 38%;
          height: 63%;
          bottom: 0;
          right: 0;
          background: #14b48c;
          border-radius: 220px 0px 0px 0px;
        }

        .chief_image {
          position: absolute;
          width: 25%;
          bottom: 0;
          right: 11%;
          filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.1));
        }
        .chief_signature {
          position: absolute;
          width: 30%;
          height: 18%;
          bottom: 0%;
          right: 8%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px 100px 0px 10px;
          padding: 0.8rem;
        }
        .chief_name {
          /*font-size:  16px;
          line-height: 24px; */

          font-size: 1.3vw;
          line-height: 2.2vw;
          color: #333333;
        }
        .chief_spec {
          /* font-size: 14px;
          line-height: 24px; */

          font-size: 1.3vw;
          line-height: 2.1vw;
          color: #555555;
        }
        @media (max-width: 1200px) {
          .about_us_text {
            font-size: 14px;
            line-height: 16px;
            text-align: justify;
          }
        }
        @media (max-width: 900px) { 
          .about_us_text {
            position: static;
            width: 100%;
            font-size: 14px;
            line-height: 16px;
            text-align: justify;
          }
          .about_us_rect {
            display: none;
          }
          .chief_image {
            display: none;
          }
          .chief_signature {
            display: none;
          }
        }        
      `}</style>
    </>
  )
}

export default AboutUs;