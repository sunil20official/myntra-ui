import "./App.css";
import banner from './banner.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function App() {

  return (
    <div className="App">
      <div className="nav flex justify-space-btw">
        <div className="left flex">
          <ul className="flex align-center" style={{paddingLeft:"0px"}}>
            <li><img className="logo" src="https://images.indianexpress.com/2021/01/myntra.png" alt="myntra logo"></img></li>
            <li>Men</li>
            <li>women</li>
            <li>kids</li>
            <li>Home & living</li>
            <li>Beauty</li>
            <li>Studio</li>
          </ul>
        </div>
        <div className="right flex">
          <ul className="flex align-center">
            <li>
              <input 
              style={{padding: "10px 8px" , minWidth: "26vw" , borderRadius:"2px" , border:"none" , background:"#f5f5f6"}}
              className="search"
                placeholder="Search for products brands and more" 
                type="text"/>
            </li>
            <li>
              <div style={{margin:"7px 0px -4px;"}}>
                <AccountCircleOutlinedIcon style={{width:"15px" , height:"15px"}}/>
                </div>
              <div style={{fontSize:"8px"}}>
                Profile
              </div>
              </li>
              <li>
              <div style={{margin:"7px 0px -4px;"}}>
                <FavoriteBorderOutlinedIcon style={{width:"15px" , height:"15px"}}/>
                </div>
              <div style={{fontSize:"8px"}}>
                Wishlist
              </div>
              </li>
              <li>
              <div style={{margin:"7px 0px -4px;"}}>
                <ShoppingBagOutlinedIcon style={{width:"15px" , height:"15px"}}/>
                </div>
              <div style={{fontSize:"8px"}}>
                Bag
              </div>
              </li>
          </ul>
        </div>
      </div>

      <div style={{marginTop:"6rem" , width:"100vw"}}>
        <img src={banner} alt="banner" style={{width:"80vw"}}/>
      </div>

      <div style={{marginTop:"1rem" , width:"100vw"}}>
        <img src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/14/b222ddec-f9aa-4b76-84ac-8122d4a669b61657780527570-get-15-off-desk.jpg' alt="banner" style={{width:"100vw"}}/>
      </div>

      <div style={{ marginTop:"1rem" , width:"100vw"}}>
        <img src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/9bf7f9f1-189e-4990-a830-e8eea8b855671657715178137-OMG--Offers-This-Way.jpg' alt='offers' style={{width:"100vw"}}/>
      </div>

      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap"
      }}>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg' alt="product"/>
      </div>

      <div style={{ marginTop:"1rem" , width:"100vw"}}>
        <img src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/b234ac64-8cf4-4231-ad62-db1bf5b958ed1657715178112-Budget-Buys.jpg' alt='offers' style={{width:"100vw"}}/>
      </div>

      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap"
      }}>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
        <img className="product-repeat-image" src='https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg' alt="product"/>
      </div>
    </div>
  );
}

export default App;
