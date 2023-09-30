
function FluidImage(props) {
    return (
        <img style={{height:props.url.height,width:props.url.width}} src={props.url.url} class="img-fluid" alt="Responsive image"></img>
    );
}
function ThumbnailImage(props) {
    return (
        <img src={props.url.url} alt="Image comes here" class="img-thumbnail"></img>
    );
}

export {
    FluidImage,
    ThumbnailImage
}