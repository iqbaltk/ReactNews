import Header from './Component/Header';
import Footer from './Component/Footer';

const BaseView = (props: any) => {
    const { content } = props;
    return (
        <>
            <Header />
            <div className="container">
                <div className='row'>

                {content}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default BaseView