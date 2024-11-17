import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";


const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5"></main>
            <section className="grid-cols-9">
                <h2 className="font-semibold mb-4">Dragon News</h2>
            </section>
            <aside className="3">
            <RightNav></RightNav>
            </aside>
          
        </div>
    );
};

export default NewsDetails;