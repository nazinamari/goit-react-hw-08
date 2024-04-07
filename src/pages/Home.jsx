import PageTitle from '../components/PageTitle/PageTitle';

export default function Home() {
    return (
        <div>
            <PageTitle>
                This is my{' '}
                <span style={{ color: 'rgba(60 72 170)' }}>ContactBook</span>{' '}
                app. Welcome!
            </PageTitle>
        </div>
    );
}
