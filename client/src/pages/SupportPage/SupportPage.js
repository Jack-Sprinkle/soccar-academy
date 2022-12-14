import './SupportPage.scss';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

function SupportPage({isLoggedIn}) {
    return (
        <main className='support'>
            <TabletMenu isLoggedIn={isLoggedIn} />
            <div className='support--tablet'>
                <h2 className='support__heading'>Support</h2>
                <div className='support__info'>
                    <p className='support__text'>Any issues on the site or with another user, 
                    please fill out the form below.</p>
                </div>
                <div className='support__form-container'>
                    <h2 className='support__form-heading'>Contact Us</h2>
                    <form action="https://getform.io/f/05e2a40f-b1da-4bf4-9ffd-96d223abc4c5" method="POST" className='support__form'>
                        <label className='support__form-label'>
                            Name
                            <input className='support__form-input' type='text' name='name' placeholder='Name/Username'></input>
                        </label>
                        <label className='support__form-label'>
                            Email
                            <input className='support__form-input' type='email' name='email' placeholder='Email'></input>
                        </label>
                        <label className='support__form-label'>
                            Message
                            <textarea className='support__form-input--large' name='message' placeholder='Message...'></textarea>
                        </label>
                        <input className='support__form-input--special' type='hidden' name='_gotcha'></input>
                        <button className='support__form-submit' type='submit'>Send</button>
                    </form>
                </div> 
            </div>
        </main>
    );
};

export default SupportPage;