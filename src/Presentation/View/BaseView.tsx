import Header from './Component/Header';
import Footer from './Component/Footer';

const BaseView = (props: any) => {
    const { content } = props;
    return (
        <>
            <Header />
            <div className="container mt-4" style={{ marginBottom: "160px" }}>
                <div className='row'>
                    {content}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default BaseView