import HomeAboutApp from '../components/HomeAboutApp/HomeAboutApp';
import PageTitle from '../components/PageTitle/PageTitle';

export default function Home() {
    return (
        <div>
            <PageTitle>
                Welcome to{' '}
                <span style={{ color: 'rgba(60 72 170)' }}>ContactBook</span>{' '}
                app!
            </PageTitle>
            <HomeAboutApp />
        </div>
    );
}
