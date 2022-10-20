
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteMenuItemThunk } from '../../store/menuItem'
import './MenuItemCard.css'


const MenuItemCard = ({ menuItems }) => {
    const dispatch = useDispatch();
    const businessId = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => (state.users))
    const allBusinesses = useSelector(state => state.business)
    const currentBusiness = allBusinesses[businessId.businessId]



    const imageLogic = () => {
        if (menuItems.image_url){
            return menuItems.image_url
        }
        else{
            return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
        }
    }

    // const menuPrice = useSelector(state => state.menuItems)
    // console.log("menuPrice********", menuPrice)
    // const menuPricearry
    // const decPrice = menuPrice.price

    // console.log("decprice********", decPrice)
    // const conDecPrice = decPrice?.toFixed(2)

    return (

    <div className='menu-item-card'>
        <img
        className='menu-item-image'
        src={imageLogic()}
        alt=' '
        >
        </img>

        <div className='menu-item-description'>
            <div className='menu-item-name'>{menuItems?.name}</div>
            <div className='menu-item-price'>{`Price: $${menuItems?.price}`}</div>

                {/* {sessionUser?.id == currentBusiness?.owner_id && (
                    <button onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}>Delete Menu Item</button>
                )} */}

                {sessionUser?.id == currentBusiness?.owner_id && (
                    <i class="fa-solid fa-trash fa-lg menu-item-delete" onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}></i>
                    // <button onClick={() => dispatch(deleteMenuItemThunk(menuItems?.id))}>Delete Menu Item</button>
                )}

        </div>
    </div>
    )
}


export default MenuItemCard
