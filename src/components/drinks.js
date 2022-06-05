import './drinks.css'
function Drinks(){
    return(
        <div className='main-drink-item'>
            <div className='drink-item'>
                Mocktail              
            </div>
            <div className='drink-item'>
                <strong>Mojito</strong>
                <img src="mojito.jpg" height="50" className='images'></img>
            </div>
            <button className='drink-item'>INR:60₹</button>
        </div>
    );
}
export default Drinks