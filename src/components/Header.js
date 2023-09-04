import '../App.css';
import logo from "../social_icons/N photo logo white.png"

export default function Header({ toggleName, toggleShowGallery, toggleShowAbout }) {
    return (
        <div className="header">
            <h1 className="header--text" onClick={toggleShowGallery}><img src={logo} alt='' style={{ width: '35px', height: '25px', paddingRight: '10px', marginTop: '5px'}}/> I G E L</h1>
            <div className="my-info">
                <h3 className="my-info-data" onClick={toggleShowGallery}> Gallery </h3> 
                <h3 className="my-info-data" onClick={toggleShowAbout}> About </h3>
            </div>
        </div>
    )
}
