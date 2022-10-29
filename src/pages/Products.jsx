import {useLocation} from "react-router-dom";

const Products = () => {
    const location = useLocation();

    return (  <>
        <img src="https://factorialhr.co.uk/wp-content/uploads/2022/02/21172841/imgonline-com-ua-CompressToSize-6AYMq7wDHaN.jpg" width="2270vw"Height="1150vh"/>
        <h1>team. </h1>
        <p>Instant collaborations<br/> for remote teams</p>
        <a>All in one for your remote team chats, </a><br/><a>collaboration and track projects</a><br/>
        <input type="email" placeholder="Email" id='in1'/>
        <button id='bx'>Get early access</button>
    </>)
}

export default Products;