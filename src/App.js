import { useState } from "react"
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import data from "./data"
import './App.css';


function App() {
  const itemsPerSection = 5; // Number of items to display in each section
    const sections = Math.ceil(data.length / itemsPerSection); // Calculate the number of sections

    const renderGallerySections = () => {
        const sectionsArray = [];

        for (let sectionIndex = 0; sectionIndex < sections; sectionIndex++) {
            const startIndex = sectionIndex * itemsPerSection;
            const endIndex = startIndex + itemsPerSection;

            const sectionData = data.slice(startIndex, endIndex);

            sectionsArray.push(
                <div className="dream" key={sectionIndex}>
                    {sectionData.map(item => (
                        <Gallery key={item.id} item={item} />
                    ))}
                </div>
            );
        }

        return sectionsArray;
    };

    const [showGallery, setShowGallery] = useState(true);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const toggleShowGallery = () => {
        setShowAbout(false);
        setShowGallery(true);
        setShowContact(false);
    };

    const toggleShowAbout = () => {
        setShowGallery(false);
        setShowAbout(true);
        setShowContact(false);
    };

    const toggleShowContact = () => {
        setShowGallery(false);
        setShowAbout(false);
        setShowContact(true);
    };

    return (
        <main>
            <Header 
            toggleName={toggleShowGallery}
            toggleShowGallery={toggleShowGallery}
            toggleShowAbout={toggleShowAbout}
            toggleShowContact={toggleShowContact}
            />
            <div className="container">
                {showGallery && (
                    <div className="box">
                        {renderGallerySections()}
                    </div>
                )}
                {showAbout && <AboutMe />}
                {showContact && <Contact />}
            </div>
            <Footer />
        </main>
        
    );
}

export default App;
