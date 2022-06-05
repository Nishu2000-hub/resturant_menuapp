import './fooditems.css'
function Fooditems(){
    return(
        <div className='main-food-item'>
            <div className='food-item'>
                Vegetarian                
            </div>
            <div className='food-item'>
            <strong>Dal makhni</strong>
            <img src="daal.jpg" height="50" className='images'></img>
            </div>
            <button className='food-item'>INR:120₹</button>
        </div>

    );
}
export default Fooditems;