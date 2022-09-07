import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <section class="hero is-fullheight-with-navbar is-inline-flex"  id="bread1">
            <div class="hero-body">
                <div class="container">
                    <img src="signature.png" width="50px" height="50px"/>
                <h1 class="title is-1 ">Journal</h1>
                <h2 class="subtitle">A simple platform to put down your thoughts. You control your data.</h2>
                <Link to='/about' className="button is-black is-medium" style={{ marginRight: '1em'}}><span>Learn More</span></Link>
                </div>
            </div>
            </section>
    </div>
    );
}

export default Home;