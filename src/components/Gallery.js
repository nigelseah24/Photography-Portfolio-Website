import '../App.css';

export default function Gallery(props) {
    return (
        <img src={props.item.imageUrl} alt={props.item.title} />
    )   
}
