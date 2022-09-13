import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "01 slide title", des: "01 slide is slide.", link: "/1" },
    { slideid: 2, content: "02 slide title", des: "02 slide is slide.", link: "/2" },
    { slideid: 3, content: "03 slide title", des: "03 slide is slide.", link: "/3" },
]

const MainSlider = () => {
    const [num, setNum] = useState(0);
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, []);
    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
    }
    return (
        <section className='MainVisual'>
            <Slider {...slideSet} ref={slideRef} className='main_slider'>
                {
                    SLIDE.map(
                        (slide, idx) =>
                        <figure className={`itm0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                            <div className='inner'>
                                <h2>{slide.content}</h2>
                                <p>{slide.des}</p>
                                <a href={slide.link}>more</a>
                            </div>
                        </figure>
                    )
                }
            </Slider>
            <div className="num">0{num + 1} / <span>0{SLIDE.length}</span></div>
            <div className="slide_handler">
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>
            <ul className="slide_dots">
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>
            
        </section>
    )
}

export default MainSlider;