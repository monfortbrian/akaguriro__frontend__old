import { Button } from '@material-ui/core'
import React from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import "../styles/users.scss"


function UsersPage() {
    return (
        <div className="users">
            <div className="users__header">
                <h2>Users</h2>
                <Button>Back</Button>
            </div>
            <div className="users__table">
                <table className="users__list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th> 
                            <th>Admin</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Smith</td>
                        <td>smth@gmail.com</td>
                        <td><CloseRoundedIcon/></td>
                        <td><Button><EditRoundedIcon/></Button> <Button><DeleteRoundedIcon/></Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Eve</td>
                        <td>Eve@gmail.com</td>
                        <td><CheckRoundedIcon/></td>
                        <td><Button><EditRoundedIcon/></Button> <Button><DeleteRoundedIcon/></Button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default UsersPage
