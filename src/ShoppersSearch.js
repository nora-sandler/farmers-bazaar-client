import React from "react"
import config from "./config"
import TokenService from "./services/token-service"
import { Link } from 'react-router-dom'

class ShoppersSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsByUserId: [],

        };
    }
    componentDidMount() {
        let getItemsByUserIdUrl = `${config.API_ENDPOINT}/items/`;

        fetch(getItemsByUserIdUrl)
            .then((itemsInList) => itemsInList.json())
            .then((itemsInList) => {
                // console.log(itemsInList)
                this.setState({
                    itemsByUserId: itemsInList,
                });
                // console.log(this.state);
            })

            .catch((error) => this.setState({ error }));
    }



    render() {



        // console.log(this.state.itemsByUserId.length)
        let showItemsPage = ''
        //by default show there are no items
        if (this.state.itemsByUserId.length === 0) {
            showItemsPage =
            <tbody>
                <tr className="itemsByUser">
                    <td>No items here</td>
             </tr>
            </tbody>
                
        }
        // if there are items 
        else {

            // display details for each one of the items
            showItemsPage = this.state.itemsByUserId.map((item, key) => {
                // console.log(item)
                let itemDetailsUrl = `/contact/${item.users_id}`
                if (item) {
                    return (
                        <tbody key = {key}>
                        <tr>  
                            <td>{item.name} </td>
                            <td>{item.description} </td>
                            <td>{item.itemprice} </td>
                            <td>{item.itemcount} </td>
                            <td><Link to={itemDetailsUrl}>contact </Link></td>
                        </tr>
                        </tbody>
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
                
                <tbody>
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
                </tbody>
                    {showItemsPage}
                    </table>

                </section>
            </div>
        );
    }
}

export default ShoppersSearch;
