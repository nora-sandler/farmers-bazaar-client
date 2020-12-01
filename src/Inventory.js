import React from "react"
import config from "./config"
import TokenService from "./services/token-service"
import ValidationError from "./validationError"
import { Link } from 'react-router-dom'

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsByUserId: [],

        };
    }



    componentDidMount() {

        let currentUser = TokenService.getUserId();
        console.log(currentUser)

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }





        let getItemsByUserIdUrl = `${config.API_ENDPOINT}/items/user/${currentUser}`;

        fetch(getItemsByUserIdUrl)
            .then((itemsInList) => itemsInList.json())
            .then((itemsInList) => {
                console.log(itemsInList)
                this.setState({
                    itemsByUserId: itemsInList,
                });
                console.log(this.state);
            })

            .catch((error) => this.setState({ error }));
    }



    render() {



        // console.log(this.state.itemsByUserId.length)
        let showItemsPage = ''
        //by default show there are no items
        if (this.state.itemsByUserId.length === 0) {
            showItemsPage =
                <div className="itemsByUser">
                    No items here
             </div>
        }
        // if there are items 
        else {

            // display details for each one of the items
            showItemsPage = this.state.itemsByUserId.map((item, key) => {
                let itemDetailsUrl = `/item-details/${item.id}`
                if (item) {
                    return (
                        <tr key = {key}>  
                            <td><Link to={itemDetailsUrl}>{item.name} </Link></td>
                            <td>{item.description} </td>
                            <td>{item.itemprice} </td>
                            <td>{item.itemcount} </td>
                        </tr>
                    )
                }
            })
        }


        return (
            <div className="Inventory">
                <section id="InventoryPage">
                <table className ="inventoryTable">
                <colgroup>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                </colgroup>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Description
                    </th>

                    <th>
                        Price
                    </th>
                    <th>
                        Count
                    </th>
                </tr>
                    {showItemsPage}
                    </table>

                </section>
            </div>
        );
    }
}

export default Inventory;