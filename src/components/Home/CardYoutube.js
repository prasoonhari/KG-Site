import Card from "@material-ui/core/Card"
import React from "react"
import VideoPlayer from 'react-video-js-player'


function CardYoutube() {
    return (
       <Card className={"card-root"}>
      <VideoPlayer scr={""}/>
    </Card>
    )
}

export default CardYoutube
