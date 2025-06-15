import '../pros/Pros.jsx'
import Pros from '../pros/Pros.jsx'
import Childcomponent from '../shared/childcomponent/Childcomponent.jsx'

function Home(){
    return(
        <>
        <Pros></Pros>
        <section style={{display:flex,}}>
            <Childcomponent img='../../../starter-code/assets/stories/desktop/mountains.jpg'></Childcomponent>
        </section>
        </>
    )
}

export default Home