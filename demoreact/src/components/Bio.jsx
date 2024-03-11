
import { useEffect, useState } from 'react';
import profileIcon from '../assets/profileIcon.svg';

const Bio = () => {

    const defaultBioFormState = {
        name: "John Doe",
        about: "Building Demo Insta app."
    }
    
    const [bioFormVisible, setBioFormVisibility] = useState(false)

    const [bioDetails, setBioDetails] = useState(defaultBioFormState)


    const updateBioDetails = (event) => {
        event.preventDefault()
        setBioDetails({
            name: event.target.nameOfUser.value,
            about: event.target.aboutOfUser.value
        })
        hideBioForm()
    }

    const showBioForm = () => {
        setBioFormVisibility(true);
    }

    const hideBioForm = () => {
        setBioFormVisibility(false);
    }

    const editForm =
        <form className="edit-bio-form" onSubmit={(e) => updateBioDetails(e)} >
            <input id="" name="nameOfUser" type="text" placeholder="Name" />
            <input id="" name="aboutOfUser" type="text" placeholder="About you" />
            <br />
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="cancel-button" onClick={() => hideBioForm()}>Cancel</button>
        </form>
    
    const contents =
        <section className="bio">
            <div className="profile-photo" role="button" title="click to edit photo">
                <img src={profileIcon} alt="profile pic" />
                
            </div>
            <div className="profile-info">
                <p className="name">{bioDetails.name}</p>
                <p className="about">{bioDetails.about}</p>
                {bioFormVisible ? editForm : <button onClick={() => showBioForm()}>Edit</button>}
            </div>
        </section>


    return (contents);

     
}

export default Bio;