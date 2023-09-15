import './home.scss';
import Input from "../../component/Input";
import Display from "../../component/Display";

const Home = () => {

    return (
        <div className={'page_container'}>
            <div className={'texture'}>
            </div>
            <div className={'page_header'}>
                <Input />
            </div>
            <div className={'page_body'}>
                <Display />
            </div>
        </div>
    )
}
export default Home