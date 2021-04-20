import './Resume.css';
import {Component} from 'react';

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            educationDisplay: false,
            exhibitionDisplay: false,
            publicInstallDisplay: false,
            scholarshipDisplay: false,
            awardsGrantsDisplay: false,
            publicationsDisplay: false,
            professionalExperienceDisplay: false,
            relatedExperienceDisplay: false,
            skillsDisplay: false,
        }
    }

toggleDisplay = (ev) => {
    console.log(ev.target.id);
    if (ev.target.id === "education-header"){
        this.setState({
            ...this.state,
            educationDisplay: !this.state.educationDisplay
        })
    }
    if (ev.target.id === "exhibition-header"){
        this.setState({
            ...this.state,
            exhibitionDisplay: !this.state.exhibitionDisplay
        })
    }
    if (ev.target.id === "public-installs-header"){
        this.setState({
            ...this.state,
            publicInstallDisplay: !this.state.publicInstallDisplay
        })
    }
    if (ev.target.id === "scholarships-header"){
        this.setState({
            ...this.state,
            scholarshipDisplay: !this.state.scholarshipDisplay
        })
    }
    if (ev.target.id === "awards-grants-header"){
        this.setState({
            ...this.state,
            awardsGrantsDisplay: !this.state.awardsGrantsDisplay
        })
    }
    if (ev.target.id === "publications-header"){
        this.setState({
            ...this.state,
            publicationsDisplay: !this.state.publicationsDisplay
        })
    }
    if (ev.target.id === "professional-experience-header"){
        this.setState({
            ...this.state,
            professionalExperienceDisplay: !this.state.professionalExperienceDisplay
        })
    }   
    if (ev.target.id === "related-experience-header"){
        this.setState({
            ...this.state,
            relatedExperienceDisplay: !this.state.relatedExperienceDisplay
        })
    }
    if (ev.target.id === "skills-header"){
        this.setState({
            ...this.state,
            skillsDisplay: !this.state.skillsDisplay
        })
    }
}

    render() {
        return (
            <div className="resume">
                <h2 className="view-header">Resume/CV:</h2>
                <h2 className="resume-section-header" id="education-header" onClick={this.toggleDisplay}>
                    {this.state.educationDisplay?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Education
                </h2>
                <div className={this.state.educationDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="education-content">
                    <p className="resume-bold">2021: BFA - Photography and Digital Imaging</p>
                    <ul className="outerul">
                        <li>Minor in Sculpture Intermedia</li>
                        <li>University of Utah - SLC UT</li>
                    </ul>
                </div>

                <h2 className="resume-section-header" id="exhibition-header"  onClick={this.toggleDisplay}>
                    {this.state.exhibitionDisplay?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Exhibitions
                        </h2>
                <div className={this.state.exhibitionDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="exhbitions-content">
                    <p className="resume-bold">2021: 2nd Annual The Art of Instant Photography Exhibition</p>
                    <ul className="outerul">
                        <li>-Analog Film Photography Association - Orlando, FL</li>
                    </ul>

                    <p className="resume-bold">2021:  **Exhibition Title TBD**</p>
                    <ul className="outerul">
                        <li>-Finch Lane Gallery - Salt Lake City, UT</li>
                    </ul>

                    <p className="resume-bold">2020:  Interior Life</p>
                    <ul className="outerul">
                        <li>-Strange Fire Collective, Filter Photo - Chicago, IL</li>
                    </ul>

                    <p className="resume-bold">2020: Queer Spectra Arts</p>
                    <ul className="outerul">
                        <li>-Festival 2020, Online Exhibition - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2020: 12th Anniversary Group Exhibition</p>
                    <ul className="outerul">
                        <li>-(f)RACTION Magazine, Online Exhibition
                        </li>
                    </ul>

                    <p className="resume-bold">2020: Project apART, Sorenson Impact Center
                    </p>
                    <ul className="outerul">
                        <li>-Online Exhibition - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2020: Juried Student Exhibition
                    </p>
                    <ul className="outerul">
                        <li>-Alvin Gittin’s Gallery - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2020: Things and Pictures of Things
                    </p>
                    <ul className="outerul">
                        <li>-Alvin Gittin’s Gallery - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2020: The Birthday Show
                    </p>
                    <ul className="outerul">
                        <li>-Private Exhibition - South Jordan, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2019 Expressions of Pride
                    </p>
                    <ul className="outerul">
                        <li>-Draw Inc. Gallery - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2019: Queer Spectra Arts Festival
                    </p>
                    <ul className="outerul">
                        <li>-Commonwealth Studios - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2019: Call It Art
                    </p>
                    <ul className="outerul">
                        <li>-The University of Utah - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2019: Presence-Impact
                    </p>
                    <ul className="outerul">
                        <li>-The University of Utah - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2019: Art In Form
                    </p>
                    <ul className="outerul">
                        <li>-Trolley Square - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2018: Making Waves
                    </p>
                    <ul className="outerul">
                        <li>-J. Willard Marriott Library - Salt Lake City, UT
                        </li>
                    </ul>

                    <p className="resume-bold">2018: Juried Student Exhibition
                    </p>
                    <ul className="outerul">
                        <li>-The Gittin’s Gallery - Salt Lake City, UT
                        </li>
                    </ul>
                </div>

                <h2 className="resume-section-header" id="public-installs-header" onClick={this.toggleDisplay}>
                    {this.state.publicInstallDisplay?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Public Installations
                        </h2>
                <div className={this.state.publicInstallDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="public-installations-content">
                    <p className="resume-bold">2020-2021  Queer Visibility: Disrupting Public Space
                    </p>
                    <ul className="outerul">
                        <li>-J. Willard Marriott Library - Salt Lake City, UT
                        </li>
                    </ul>
                    
                    <p className="resume-bold">2018: Wake Up!
                    </p>
                    <ul className="outerul">
                        <li>-J. Willard Marriott Library - Salt Lake City, UT
                        </li>
                    </ul>
                </div>

                <h2 className="resume-section-header" id="scholarships-header" onClick={this.toggleDisplay}>
                    {this.state.scholarshipDisplay?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Scholarships
                        </h2>
                <div className={this.state.scholarshipDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="scholarships-content">
                    <p className="resume-bold">2020-2021  Carmen Morton Christensen Scholarship Recipient
                    </p>

                    <p className="resume-bold">2019-2020  Carmen Morton Christensen Scholarship Recipient
                    </p>

                    <p className="resume-bold">2019-2020  Kamille Corry Endowment Scholarship Recipient
                    </p>

                    <p className="resume-bold">2017-2018  Trustee’s Scholarship Recipient
                    </p>

                    <p className="resume-bold">2016-2017  Trustee’s Scholarship Recipient
                    </p>
                </div>

                <h2 className="resume-section-header"  id="awards-grants-header" onClick={this.toggleDisplay}>
                    {this.state.awardsGrantsDisplay ?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Awards &#38; Grants
                        </h2>
                <div className={this.state.awardsGrantsDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="awards-grants-content">
                    <p className="resume-bold">2021  University of Utah Undergraduate Research Opportunity Recipient (UROP)
                    </p>

                    <p className="resume-bold">2021  University of Utah Undergraduate Research Grant
                    </p>

                    <p className="resume-bold">2020 University of Utah Undergraduate Research Opportunity Recipient (UROP)
                    </p>

                    <p className="resume-bold">2020  University of Utah Undergraduate Research Grant
                    </p>

                    <p className="resume-bold">2019 J. Willard Marriott Library Public Art Grant
                    </p>

                    <p className="resume-bold">2018 Merit Award, 2018 Juried Student Exhibition, University of Utah, Salt Lake City, UT
                    </p>

                </div>

                <h2 className="resume-section-header"  id="publications-header" onClick={this.toggleDisplay}>
                    {this.state.publicationsDisplay ?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Publications
                        </h2>
                <div className={this.state.publicationsDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="publications-content">
                    <p className="resume-bold">2021 The Art of Instant Photography
                    </p>
                    <ul className="outerul">
                        <li>-Analog Film Photography Association
                        </li>
                    </ul>

                    <p className="resume-bold">2021 Contemporary Photography Projects Multibook Publication
                    </p>

                    <p className="resume-bold">2020 HYPER/FOCAL, Issue 3
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah Photo Club Annual Zine Publication
                        </li>
                    </ul>

                    <p className="resume-bold">2020 The Art of Trauma
                    </p>
                    <ul className="outerul">
                        <li>-Exhibition Catalog
                        </li>
                    </ul>

                    <p className="resume-bold">2020 (f)RACTION Magazine, 12th Anniversary, Issue 134
                    </p>

                    <p className="resume-bold">2019 Art In Form - Exhibition Catalog
                    </p>
                    <ul className="outerul">
                        <li>-Art In Form,University of Utah Student Exhibition
                        </li>
                    </ul>

                    <p className="resume-bold">2019 HYPER/FOCAL, Issue 2
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah Photo Club Annual Zine Publication
                        </li>
                    </ul>

                    <p className="resume-bold">2018 HYPER/FOCAL, Issue 1
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah Photo Club Annual Zine Publication
                        </li>
                    </ul>

                </div>

                <h2 className="resume-section-header" id="professional-experience-header" onClick={this.toggleDisplay}>
                    {this.state.professionalExperienceDisplay ?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Professional Experience
                        </h2>
                <div className={this.state.professionalExperienceDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="professionaly-experience-content">
                    <p className="resume-bold">2021 - Digital Assets Intern
                    </p>
                    <ul className="outerul">
                        <li>-Utah Museum of Fine Arts
                        </li>
                    </ul>

                    <p className="resume-bold">2020-2021 - Assistant Preparator
                    </p>
                    <ul className="outerul">
                        <li>-Utah Museum of Fine Arts
                        </li>
                        <ul className="innerul">
                            <li>Confluence</li>
                            <li>Black Refractions: Highlights from the Studio Museum in Harlem</li>
                            <li>Regular Rotations for the UMFA permanent collection gallery spaces</li>
                        </ul>
                    </ul>

                    <p className="resume-bold">2018-2021 - Visitor Services and Private Events Assistant
                    </p>
                    <ul className="outerul">
                        <li>-Utah Museum of Fine Arts
                        </li>
                    </ul>

                    <p className="resume-bold">2020 -  Studio Lighting Teaching Assistant
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah
                        </li>
                    </ul>

                    <p className="resume-bold">2020 - Curator and Preparator
                    </p>
                    <ul className="outerul">
                        <li>-Things and Pictures of Things
                        </li>
                    </ul>

                    <p className="resume-bold">2019 - Curator
                    </p>
                    <ul className="outerul">
                        <li>-Call It Art
                        </li>
                    </ul>

                    <p className="resume-bold">2019 - Preparator
                    </p>
                    <ul className="outerul">
                        <li>-Art In Form
                        </li>
                    </ul>

                    <p className="resume-bold">2019 - Art Series Facilitator
                    </p>
                    <ul className="outerul">
                        <li>-Encircle Together Love Loud
                        </li>
                    </ul>
                </div>

                <h2 className="resume-section-header" id="related-experience-header" onClick={this.toggleDisplay}>
                    {this.state.relatedExperienceDisplay ?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Related Experience
                        </h2>
                <div className={this.state.relatedExperienceDisplay?"accordion-content-displayed":"accordian-content-hidden"} id="related-experience-content">
                    <p className="resume-bold">2018-2021 - Sculpture Club Member
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah
                        </li>
                    </ul>

                    <p className="resume-bold">2019-2021 - Photo Club Member
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah 
                        </li>
                    </ul>

                    <p className="resume-bold">2019-2020 - Sculpture Club Co-President
                    </p>
                    <ul className="outerul">
                        <li>-University of Utah 
                        </li>
                    </ul>

                    <p className="resume-bold">2019-2020 - Member
                    </p>
                    <ul className="outerul">
                        <li>-Society for Photographic Education 
                        </li>
                    </ul>

                    <p className="resume-bold">2019 - Regional Conference
                    </p>
                    <ul className="outerul">
                        <li>-Society for Photographic Education 2019 
                        </li>
                    </ul>

                    <p className="resume-bold">2019 - Performance workshop with Felix Gonzalez-Torrez
                    </p>
                </div>

                <h2 className="resume-section-header" id="skills-header" onClick={this.toggleDisplay}>
                    {this.state.skillsDisplay ?
                        <span className='accordion-icon'>-</span>:
                        <span className='accordion-icon'>+</span>}
                        Skills
                        </h2>
                <div className={this.state.skillsDisplay?"accordion-content-displayed":"accordian-content-hidden"}id="skills-content">
                    <p className="resume-bold">Software
                    </p>
                    <ul className="outerul">
                        <li>-Photoshop</li>
                        <li>-Illustrator</li>
                        <li>-Bridge</li>
                        <li>-InDesign</li>
                        <li>-Camera Raw</li>
                        <li>-Premier Pro</li>
                        <li>-Laser Cutting</li>
                        <li>-Vinyl Cutting</li>
                    </ul>

                    <p className="resume-bold">Cameras
                    </p>
                    <ul className="outerul">
                        <li>-Canon R5</li>
                        <li>-Canon DSLR</li>
                        <li>-Fuji GFX 100</li>
                        <li>-35mm</li>
                        <li>-120mm</li>
                        <ul className="innerul">
                            <li>Mamiya</li>
                            <li>Hasselblad</li>
                            <li>Rolleiflex</li>
                        </ul>
                        <li>-Large Format</li>
                        <ul className="innerul">
                            <li>4x5 monorail</li>
                            <li>4x5 land camera</li>
                        </ul>
                    </ul>

                    <p className="resume-bold">Other
                    </p>
                    <ul className="outerul">
                        <li>-Alternative Photo Processes</li>
                        <li>-B&#38;W Film Developing</li>
                        <li>-Darkroom</li>
                        <li>-Epson Printing</li>
                        <li>-Studio Lighting</li>
                        <ul className="innerul">
                            <li>Profoto</li>
                            <li>Profoto B10</li>
                            <li>Westcott LED</li>
                        </ul>
                        <li>-Sekonic Light Metering</li>
                        <li>-Vinyl Installation</li>
                        <li>-Woodshop</li>
                        <li>-Welding</li>
                    </ul>
                </div>

            </div>
        )
    }
  }
  
  export default Resume;