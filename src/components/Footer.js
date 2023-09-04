import '../App.css';
import flickr from "../social_icons/Flickr-Logo1.png"
import twitter from "../social_icons/twitter x logo1.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-links">
                <a href="https://www.flickr.com/people/nigelseah24/" target="_blank" rel="noreferrer"><img style={{ marginTop: '2px' }} className="social-link-image" src={flickr} alt=""/></a> 
                <a href="https://www.instagram.com/nigelslens/" target="_blank" rel="noreferrer"><img className="social-link-image" src="https://www.transparentpng.com/thumb/logo-instagram/ERHHfn-png-logo-instagram-black.png" alt=""/></a> 
                <a href="https://twitter.com/nigels_photos" target="_blank" rel="noreferrer"><img style={{ marginBottom: '2px'}} className="social-link-image" src={twitter} alt=""/></a> 
            </div>
        </div>
    )
}