import { Button } from '@material-ui/core'
import React from 'react'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import "../styles/products.scss"
import { useTranslation } from 'react-i18next';


function ProductsPage() {
    const {t}=useTranslation()
    return (
        <div className="products">
            <div className="products__header">
                <h2>Products</h2>
                <Button>Back</Button>
            </div>
            <div className="products__table">
                <table className="products__list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th> 
                            <th>category</th>
                            <th>Brand</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tr>
                        <th>ID</th>
                        <th>{t('Name')}</th>
                        <th>{t('Price')}</th> 
                        <th>{t('category')}</th>
                        <th>{t('Brand')}</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Smart Tv</td>
                        <td>500BIF</td>
                        <td>electronic</td>
                        <td>Brand Lorem</td>
                        <td><Button><EditRoundedIcon/></Button> <Button><DeleteRoundedIcon/></Button></td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default ProductsPage
