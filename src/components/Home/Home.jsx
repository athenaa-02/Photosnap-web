import '../pros/Pros.jsx'
import Pros from '../pros/Pros.jsx'
import Childcomponent from '../shared/childcomponent/Childcomponent.jsx'

function Home(){
    return(
        <>
        <Pros></Pros>
        <section style={{width:'100%', height:'fit-content', display:'flex', flexWrap:'wrap'}}>
            <Childcomponent img='../../../starter-code/assets/stories/desktop/mountains.jpg' header='The Mountains' author='by John Appleseed'></Childcomponent>
            <Childcomponent img='../../../starter-code/assets/stories/desktop/cityscapes.jpg' header='Sunset Cityscapes' author='by Benjamin Cruz'></Childcomponent>
            <Childcomponent img='../../../starter-code/assets/stories/desktop/18-days-voyage.jpg' header='18 Days Voyage' author='by Alexei Borodin'></Childcomponent>
            <Childcomponent img='../../../starter-code/assets/stories/desktop/architecturals.jpg' header='Architecturals' author='by Samantha Brooke'></Childcomponent>
        </section>
        </>
    )
}

export default Home