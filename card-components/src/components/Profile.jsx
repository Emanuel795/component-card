import React from 'react'
import './styles/Profile.css'

export default function Profile() {
    return (
        <>
            <div class='card'>
                <div class='profile-header card-header'>
                    <p class='title'>Project Members</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" fill="#BDBDBD"/><path d="M19.5 14.25C20.7426 14.25 21.75 13.2426 21.75 12C21.75 10.7574 20.7426 9.75 19.5 9.75C18.2574 9.75 17.25 10.7574 17.25 12C17.25 13.2426 18.2574 14.25 19.5 14.25Z" fill="#BDBDBD"/><path d="M4.5 14.25C5.74264 14.25 6.75 13.2426 6.75 12C6.75 10.7574 5.74264 9.75 4.5 9.75C3.25736 9.75 2.25 10.7574 2.25 12C2.25 13.2426 3.25736 14.25 4.5 14.25Z" fill="#BDBDBD"/></svg>
                </div>
                <div className="profile-content">
                    <div className="profile">
                        <img src="https://i83.servimg.com/u/f83/20/31/79/72/prof310.png" alt="" />
                        <div class='data'>
                            <p class='name'>Brooklyn</p>
                            <p class='job'>proyect Owner</p>
                        </div> 
                    </div>
                    <div className="profile">
                        <img src="https://i83.servimg.com/u/f83/20/31/79/72/prof210.png" alt="" />
                        <div class='data'>
                            <p class='name'>Arlene McCoy</p>
                            <p class='job'>Web Designer</p>
                        </div>                        
                    </div>
                    <div className="profile">
                        <img src="https://i83.servimg.com/u/f83/20/31/79/72/prof110.png" alt="" />
                        <div class='data'>
                            <p class='name'>Jerome Bell</p>
                            <p class='job'>Developer </p>
                        </div>                    
                    </div>
                    <div className=" profile op add-profile">
                        <div class='image-add'>
                            <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6875 5.625C14.5344 7.69023 12.9688 9.375 11.25 9.375C9.53125 9.375 7.96289 7.69063 7.8125 5.625C7.65625 3.47656 9.17969 1.875 11.25 1.875C13.3203 1.875 14.8438 3.51562 14.6875 5.625Z" stroke="#4F4F4F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.25 11.875C7.85157 11.875 4.40235 13.75 3.76406 17.2891C3.68594 17.7156 3.92852 18.125 4.37539 18.125H18.125C18.5719 18.125 18.8133 17.7156 18.7363 17.2891C18.0977 13.75 14.6484 11.875 11.25 11.875Z" stroke="#4F4F4F" stroke-width="1.2" stroke-miterlimit="10"/><path d="M5.625 9.0625H1.25M3.4375 6.875V11.25V6.875Z" stroke="#4F4F4F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <p class='txt-add'>Add member</p>
                    </div>
                </div>           
            </div>  
        </>
    )
}
