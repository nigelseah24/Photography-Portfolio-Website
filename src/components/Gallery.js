import '../App.css';

export default function Gallery(props) {
    return (
        <div>
            {/* <a data-flickr-embed="true" href={props.item.href} title={props.item.title} target='_blank'> */}
                <img src={props.item.imgSrc} alt={props.item.title}/>
            {/* </a> */}
            {/* <script async src={props.item.scriptSrc} charset="utf-8"></script>            */}
        </div>
    )   
}
