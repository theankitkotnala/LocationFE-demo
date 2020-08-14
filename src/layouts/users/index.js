import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './../../components/header';
import Card from '../../components/card';
import { fetchAllUsersWithinRange } from './../../actions/index';
import { useStateValue } from './../../StateProvider';

const UsersLayout = props => {
    // taking Dublin cords 
    const [cords , setCords ] = useState({ lat : 53.339428, long :  -6.257664 });
    // take intial range of 100kms
    const [range, setRange] = useState(100);

    const [{ users }, dispatch] = useStateValue();

    useEffect(() => {
        console.log('hi runnign')
        fetchAllUsersWithinRange({ ...cords, range } , dispatch);
    },[]);
    console.log(users);
    return (
        <div className="container">
            <Header/>
            <div className="container--body">
                <div className="user--cards">
                        {
                            users.map(({user_id ,name},id) => {
                                return <Card 
                                    key={name+id}
                                    user_id={user_id} 
                                    name={name}/>
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default UsersLayout;