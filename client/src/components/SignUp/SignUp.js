import './SignUp.scss';

function SignUp() {
    return (
        <form>
            <label>
              Username
              <input type='text' name='user_name'></input>
            </label>
            <label>
              Email
              <input type='text' name='user_email'></input>
            </label>
            <label>
              Epic Id
              <input type='text' name='epic_id'></input>
            </label>
            <label>
              Discord
              <input type='text' name='discord_name'></input>
            </label>
            <label>
              Standard MMR
              <input type='text' name='mmr_standard'></input>
            </label>
            <label>
              Bio
              <textarea type='text' name='user_name'></textarea>
            </label>
            <label>
              Password
              <input type='password' name='user_password'></input>
            </label>
            <label>
              Confirm Password
              <input type='password' name='user_password-confirm'></input>
            </label>
            <p>Do you wish to coach?</p>
            <label>
              Yes
              <input type='radio' name='user_coach' value='yes'></input>
            </label>
            <label>
                No
                <input type='radio' name='user_coach' value='no'></input>
            </label>

        </form>
    );
};

export default SignUp;