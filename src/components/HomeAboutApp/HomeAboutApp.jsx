import css from './HomeAboutApp.module.css';

export default function HomeAboutApp() {
    return (
        <div>
            <p className={css.text}>
                {' '}
                Manage your contacts effortlessly with ContactBook app. Whether
                for work or personal connections, it simplifies contact
                management with a touch of fun.
            </p>
            <h2>Registration and Login:</h2>
            <p className={css.text}>
                New here?{' '}
                <span className={css.link}>
                    <a href="/register">Sign up</a>
                </span>{' '}
                to unlock all the features!
                <br />
                Already have an account?{' '}
                <span className={css.link}>
                    <a href="/login">Log in</a>
                </span>{' '}
                to continue seamlessly.
            </p>
            <h2>Get Started:</h2>
            <p className={css.text}>
                Dive in by adding your first contact and explore
                ContactBook&apos;s exciting features!
            </p>
            <h2>Features:</h2>
            <ul>
                <li className={css.text}>
                    <span style={{ fontWeight: 600 }}>Memorable Contacts:</span>{' '}
                    Say goodbye to boring lists! Personalize with custom avatars
                    and tags. Make your contact list uniquely yours!
                </li>
                <li className={css.text}>
                    <span style={{ fontWeight: 600 }}>Easy Organization:</span>{' '}
                    Sorting through your contacts has never been easier.
                    Categorize and mark favorites. Your contacts, your way.
                </li>
                <li className={css.text}>
                    <span style={{ fontWeight: 600 }}>Smart Search:</span> Find
                    contacts instantly. No more endless scrolling – simply type
                    a name or keyword and let ContactBook do the rest.
                </li>
                <li className={css.text}>
                    <span style={{ fontWeight: 600 }}>
                        Sync Across Devices:
                    </span>{' '}
                    Access your contacts anytime, anywhere. Whether you&apos;re
                    on your phone, tablet, or computer, your contacts are always
                    synced and up-to-date.
                </li>
            </ul>
            <h2>Stay Connected!</h2>
            <p className={css.text}>The ContactBook Team</p>
        </div>
    );
}
