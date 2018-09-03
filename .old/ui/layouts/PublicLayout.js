import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const PublicLayout = (properties) => (
    <main>
        <Head>
            <title>Promote Her</title>
        </Head>

        <div className="container">
            <Header />

            {properties.children}
        </div>

        <Navigation />
    </main>
);

export default PublicLayout;