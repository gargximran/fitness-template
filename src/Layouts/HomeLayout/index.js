import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";

const HomeLayout = ({children}) => {
    return (
        <div className={'bg-secondary'}>
            <Header />
            {children}
            <SubFooter />
            <Footer />
        </div>
    );
};

export default HomeLayout;
