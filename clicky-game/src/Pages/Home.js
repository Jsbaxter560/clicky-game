import React from "react";
import Images from "./images.json";
import Displayimage from "../Components/Displayimage";

class Home extends React.Component {
    state = {
        pictures: Images,
        score: 0,
        topScore: 0
    }

    imageShuffle = () => {
        
    }

    didClick = (id) => {
        var images = this.state.pictures
        for (let i = 0; i < images.length; i++) {
            if (id === images[i].id) {
                images[i].click = true
            }
        }
        this.setState({ pictures: images })
        console.log(this.state.pictures)
    }

    render() {
        return (<main className="d-flex flex-wrap align-content-stretch">
            {this.state.pictures.map((img, key) =>
                <Displayimage
                    didClick={this.didClick}
                    key={key}
                    id={img.id}
                    click={img.click}
                    url={img.url}
                />)}
        </main>)
    }
}

export default Home;
