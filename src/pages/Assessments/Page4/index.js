import styles from './style.module.css'
// import TitleRead from '../../../components/common/TitleRead'
import SubmitBtn from '../../../components/common/SubmitBtn'
import { useContext, useEffect, useState } from 'react'
import '../../../components/api/UmooveApi'
// import { Link } from 'react-router-dom'
import UmooveApi from '../../../components/api/UmooveApi'
import { useNavigate, useLocation } from 'react-router-dom';


// Creator : Team A - Amos
// const [pageName, setPageName] = useContext(pageNameContext)

function Page4() {
    const l = useLocation()
    console.log(l);
    const navigate = useNavigate();

    const nextPage = () => {
        console.log("clicked");
        // UmooveApi.API_stopReading();//לבדוק
        // UmooveApi.API_stopUmoove();
        navigate('/teama/page5', { state: { data: l.data.questions } });
        console.log("that what i send :", { state: { data: l.data.questions } });
    }

    useEffect(() => { UmooveApi.API_startReading() }, [])

    const image = require(`../../../assets/img/exams/${l.state.data.data.img}`)

    return <>
        <div className="Page4" >

            {/* //Header - import whith props - "comprehensions" */}

            <div className="TitleRead">
                {/* <TitleRead /> */}
            </div>
            <div>
                <img className={styles.img} src={image} alt="" />
            </div>
            <SubmitBtn startFunction={() => { nextPage() }} name={"Done"} />
        </div>
    </>
}
export default Page4