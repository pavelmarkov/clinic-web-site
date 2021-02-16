import {useState} from 'react'
import Link from 'next/link';
function Slider(ads) {
  let url = "./img/carousel/"//"http://localhost:1337"
  const [state, setState] = useState({
    currentSlide: 1,
    numSlides: ads.length
  })

  // Next/previous controls
  function plusSlides(step) {
    let nextSlide = state.currentSlide + step
    if(nextSlide > state.numSlides) nextSlide = 1
    if(nextSlide < 1) nextSlide = state.numSlides
    currentSlide(nextSlide)
  }

  // Thumbnail image controls
  function currentSlide(n) {
    if(n == state.currentSlide) return
    setState((state)=>{
      return {
        ...state,
        currentSlide: n
      }
    })
  }
  return (       
      <div className="slideshow-container">
        {ads.map((ad, i)=>
          (
          <div className={state.currentSlide == i+1 ? "mySlides fade displayBlock" : "mySlides fade displayNone"} key={i+1}>
            <img src={url+ad.image.url} className="img_100"></img>
            <div className="caption"></div>
            <div className="caption_text">{ad.text}</div>
            { ad.button ? 
              (<Link href="/appointment"><button className="action_button slideshow_button">Записаться на прием</button></Link>)
              :
              ''
            }
          </div>
          )
        )}

        <a className="prev" onClick={()=>plusSlides(-1)}><img src="img/arrow_back_24px.svg" alt="&#10094;" srcSet=""></img></a>
        <a className="next" onClick={()=>plusSlides(1)}><img src="img/arrow_forward_24px.svg" alt="&#10095;" srcSet=""></img></a>

        <div className="center_align" className="dots">
          {ads.map((ad, i)=>
            (<span className={state.currentSlide == i+1 ? 'dot active' : 'dot'}
                  onClick={()=>currentSlide(i+1)} key={i+1}>
            </span>)
          )}
        </div>

        <style jsx>{`
          .slideshow-container {
            width: 100vw;
            max-width: 1440px;
            position: relative;
            margin: auto;
            margin-top: 88px;
            overflow: hidden;
          }
          .img_100 {
            width: 100%;
          }
          .center_align {
            text-align:center;
          }
          /* Hide the images by default 
          .mySlides {
            display: none;
          }*/
          .displayNone {
            display: none;
          }
          displayBlock {
            display: block;
          }
          /* Next & previous buttons */
          .prev,
          .next {
            cursor: pointer;
            position: absolute;
            top: 80%;
            right: 128px;
            z-index: 4;
            width: 32px;
            height: 32px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            transition: 0.6s ease;
            border-radius: 50%;
            user-select: none;
            display: flex;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.2);
            border: 2px solid #ffffff;
          }

          /* Position the "next button" to the right */
          .next {
            right: 64px;
            border-radius: 50%;
          }

          /* On hover, add a black background color with a little bit see-through */
          .prev:hover,
          .next:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
          /* Caption text */
          .caption {
            color: #f2f2f2;
            z-index: 3;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            text-align: center;

            /* width: 963px; */
            width: 53%;
            height: 504px;
            /* left: -196px; */
            top: 0px;

            /* Color / Green / Light */

            background: #14b48c;
            border-radius: 0px 1500px 0px 0px;
          }
          .caption_text {
            position: absolute;
            left: 64px;
            top: 30%;
            color: #ffffff;
            z-index: 7;
            font-weight: bold;
            font-size: 64px;
            line-height: 72px;
            max-width: 40%;
          }

          /* Number text (1/3 etc) */
          .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
          }
          .dots {
            position: absolute;
            top: 80%;
            left: 64px;
            z-index: 4;
          }
          /* The dots/bullets/indicators */
          .dot {
            cursor: pointer;
            height: 8px;
            width: 8px;
            margin: 0 2px;
            background: rgba(255, 255, 255, 0.7);
            opacity: 0.5;
            display: inline-block;
            transition: background-color 0.6s ease;
          }

          .active,
          .dot:hover {
            background-color: #ffffff;
            opacity: 1;
          }

          /* Fading animation */
          .fade {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 1.5s;
            animation-name: fade;
            animation-duration: 1.5s;
          }

          @-webkit-keyframes fade {
            from {
              opacity: 0.4;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fade {
            from {
              opacity: 0.4;
            }
            to {
              opacity: 1;
            }
          }

          .mySlides > img {
            max-height: 504px;
            object-fit: cover;
          }

          .slideshow_button {
            z-index: 7;
            position: absolute;
            left: 64px;
            bottom: 25%;
            background: #b43778;
          }

          @media (min-width: 950px) {
            .slideshow_button {
              width: 303px;
              height: 56px;
            }
          }
          @media (max-width: 1335px) {
            .caption_text {
              font-size: 48px;
            }
            .action_button {
              padding: 6px 8px;
              margin-left: 4px;
            }
          }
          @media (max-width: 950px) {
            .caption_text {
              font-size: 32px;
              line-height: 32px;
              left: 5%;
            }
            .action_button {
              padding: 6px 8px;
              margin-left: 4px;
            }
          }
        @media (max-width: 600px) {
          .caption_text {
            font-size: 20px;
            line-height: 28px;
          }
          .slideshow_button {
            left: 5% !important;
          } 
        } 
        `}</style>
      </div>
  )
      
    
}

export default Slider