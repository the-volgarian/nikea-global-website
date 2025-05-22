import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation(); 
    return (
        <div className="about-page">
            <div className='info-container'>
            <h2 className='about-title'>ABOUT US</h2>
            <p className="info-text">{t("company-info")}</p>
            </div>
            <div className='our-team-container'>
            <h2 className='about-title'>OUR TEAM</h2>
            <div className='shit'>
            <div className='row-container'>
               
                <div className='team-member'>
                            <img src="/avatars/niki.png" height={150} alt="" />
                                <div className='member-info-container'>
                                    <h3 className='team-name'>Nikolay Popov</h3>
                                    <h4 className='team-position'>Logistics Team Leader</h4>
                                </div>
                        </div>
                
    
                        <div className='team-member'>
                            <img src="/avatars/iliyan.png" height={150} alt="" /> 
                                <div className='member-info-container'>
                                    <h3 className='team-name'>Iliyan Nikolov</h3>
                                    <div><h4 className='team-position'>Technical Assistant</h4></div>
                                    
                                </div>
                            
                        </div>
            
            </div>
            <div>
               
               
                    <div className='team-member'>
                        <img src="/avatars/vladi.png" height={150} alt="" />
                            <div className='member-info-container'>
                                <h3 className='team-name'>Vladimir Vladimirov</h3>
                                <div><h4 className='team-position'>Freight Forwarder</h4></div>
                            </div>
                    </div>

                    <div className='team-member'>
                        <img src="/avatars/martin.png" height={150} alt="" />
                            <div className='member-info-container'>
                                <h3 className='team-name'>Martin Samodumov</h3>
                                <div><h4 className='team-position'>Billing Specialist</h4></div>
                            </div>
                    </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default About;