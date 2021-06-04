import { Button } from '@material-ui/core'
import React from 'react'
import {useTranslation} from "react-i18next"
import i18n from '../i18n'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import "../styles/orders.scss"


function OrdersPage() {
    const { t } = useTranslation();
    // HANDLE CHANGE LANGUAGE
        
    return (
        <div className="orders">
            <div className="orders__header">
                <h2>{t('orders')}</h2>
                <Button>{t('Back')}</Button>
            </div>
            <table className="orders__list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{t('User')}</th>
                        <th>Date</th> 
                        <th>Total</th>
                        <th>{t('Paid')}</th>
                        <th>{t('Delivered')}</th>
                    </tr>
                </thead>
                
            </table>
        </div>
    )
}

export default OrdersPage
