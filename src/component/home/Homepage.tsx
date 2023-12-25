import React from 'react'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "./../../redux/slice/slice";
import type { RootState } from "./../../redux/store/store";

type Props = {}


const Homepage = (props: Props) => {

    const dispatch = useDispatch();


    const Users = useSelector((state: RootState) => state.users.users);
    useEffect(() => {
        dispatch(getUsersData() as any);
    }, [dispatch]);

    console.log(Users)
    return (
        <section id='home_section'>
            <div className='home_children'>
                <h1>Home</h1>
            </div>
        </section>
    )
}

export default Homepage