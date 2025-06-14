import './Pros.css'

function Pros(){
    return(
        <>
        <div className="container">
            <aside className='dark'>
                <h2>CREATE AND SHARE YPUR PHOTO STORIES.</h2>
                <article>
                    Photosnap is a platform for 
                    photographers and visual storytellers.
                    We make it easy to share photos, tell
                    stories and connect with others.
                </article>
                <a href="#">GET AN INVITE <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></a>
            </aside>
            <img src="../../../starter-code/assets/home/desktop/create-and-share.jpg" alt="" />

        </div>
        <div className="container">
            <img src="../../../starter-code/assets/home/desktop/beautiful-stories.jpg" alt="" />
            <aside className='light'>
                <h2>BEAUTIFUL STORIES EVERY TIME</h2>
                <article>
                    We provide design templates 
                    to ensure your stories look terrific.
                    Easily add photos, text, embed maps and media 
                    from other networks. Then share your story with everyone.
                </article>
                <a href="#">GET AN INVITE <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></a>
            </aside>
        </div>
        <div className="container">
            <aside className='light'>
                <h2>DESIGNED FOR EVERYONE</h2>
                <article>
                    Photosnap can help you create stories that
                    resonate with your audience. 
                    Our tool is designed for photographers
                    of all levels, brands, businesses you name it. 
                </article>
                <a href="#">GET AN INVITE <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></a>
            </aside>
            <img src="../../../starter-code/assets/home/desktop/designed-for-everyone.jpg" alt="" />
        </div>
        
        </>
    )
}

export default Pros