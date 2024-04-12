import PageTitle from '../components/PageTitle/PageTitle';

export default function Home() {
    return (
        <div>
            <PageTitle>
                Welcome to{' '}
                <span style={{ color: 'rgba(60 72 170)' }}>ContactBook</span>{' '}
                app!
            </PageTitle>
            <p>
                {' '}
                Manage your contacts effortlessly with ContactBook app. Whether
                for work or personal connections, it simplifies contact
                management with a touch of fun.
            </p>
            <h3>Registration and Login:</h3>
            <p>
                New here?{' '}
                <span>
                    <a href="#">Sign up</a>
                </span>{' '}
                to unlock all the features!
                <br />
                Already have an account?{' '}
                <span>
                    <a>Log in</a>
                </span>{' '}
                to continue seamlessly.
            </p>
            <h3>Get Started:</h3>
            <p>
                Dive in by adding your first contact and explore
                ContactBook&apos;s exciting features!
            </p>
            <h3>Features:</h3>
            <ul>
                <li>
                    <span style={{ fontWeight: 600 }}>Memorable Contacts:</span>{' '}
                    Say goodbye to boring lists! Personalize with custom avatars
                    and tags. Make your contact list uniquely yours!
                </li>
                <li>
                    <span style={{ fontWeight: 600 }}>Easy Organization:</span>{' '}
                    Sorting through your contacts has never been easier.
                    Categorize and mark favorites. Your contacts, your way.
                </li>
                <li>
                    <span style={{ fontWeight: 600 }}>Smart Search:</span> Find
                    contacts instantly. No more endless scrolling – simply type
                    a name or keyword and let ContactBook do the rest.
                </li>
                <li>
                    <span style={{ fontWeight: 600 }}>
                        Sync Across Devices:
                    </span>{' '}
                    Access your contacts anytime, anywhere. Whether you&apos;re
                    on your phone, tablet, or computer, your contacts are always
                    synced and up-to-date.
                </li>
            </ul>
            <h3>Stay Connected!</h3>
            <p>The ContactBook Team</p>
        </div>
    );
}
