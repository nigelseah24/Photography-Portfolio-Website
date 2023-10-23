import '../App.css';
import logo from "../social_icons/N photo logo white.png"

export default function Header({ toggleName, toggleShowGallery, toggleShowAbout, toggleShowContact }) {
    return (
        <div className="header">
            <h1 className="header--text" onClick={toggleShowGallery}><img src={logo} alt='' style={{ width: '35px', height: '25px', paddingRight: '10px', marginTop: '5px'}}/> I G E L</h1>
            <div className="subheader">
                <h3 className="subheader-text" onClick={toggleShowGallery}> Gallery </h3> 
                <h3 className="subheader-text" onClick={toggleShowAbout}> About </h3>
                <h3 className="subheader-text" onClick={toggleShowContact}> Contact </h3>
            </div>
        </div>
    )
}
