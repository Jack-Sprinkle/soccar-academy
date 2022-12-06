import './SignUp.scss';

function SignUp() {
    return (
        <form className='signup'>
            <label className='signup__label'>
              Username
              <input className='signup__input' type='text' name='user_name'></input>
            </label>
            <label className='signup__label'>
              Email
              <input className='signup__input' type='text' name='user_email'></input>
            </label>
            <label className='signup__label'>
              Epic Id
              <input className='signup__input' type='text' name='epic_id'></input>
            </label>
            <label className='signup__label'>
              Discord
              <input className='signup__input' type='text' name='discord_name'></input>
            </label>
            <label className='signup__label'>
              Standard MMR
              <input className='signup__input' type='text' name='mmr_standard'></input>
            </label>
            <label className='signup__label'>
              Bio
              <textarea className='signup__input' type='text' name='user_name'></textarea>
            </label>
            <label className='signup__label'>
              Password
              <input className='signup__input' type='password' name='user_password'></input>
            </label>
            <label className='signup__label'>
              Confirm Password
              <input className='signup__input' type='password' name='user_password-confirm'></input>
            </label>
            <p>Do you wish to coach?</p>
            <label className='signup__label'>
              Yes
              <input className='signup__input--radio' type='radio' name='user_coach' value='yes'></input>
            </label>
            <label className='signup__label'>
                No
                <input className='signup__input--radio' type='radio' name='user_coach' value='no'></input>
            </label>

        </form>
    );
};

export default SignUp;