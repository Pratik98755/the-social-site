import React from 'react'
import { useAuth } from '../context/authContext'

const Profile = () => {

    const {user} = useAuth()
    console.log(user)

    return (
        <div className="profile_page">
            <div className="pp_container py-5">
                <h1 className='text-3xl mt-4 mb-2 font-semibold'>{user.username}'s Profile</h1>
                <div className="section flex rounded-md">
                    <div className="photo">
                        <img src="/imgs/user.png" alt="" />
                    </div>
                    <div className="posts item">
                        <h2 className='text-xm'>Posts</h2>
                        <div className="counts">7</div>
                    </div>
                    <div className="likes item">
                        <h2>Likes</h2>
                        <div className="counts">7</div>
                    </div>
                    <div className="alu item">
                        <h2>Alu</h2>
                        <div className="counts">7</div>
                    </div>
                </div>


                <div className="updates section">
                    <div className="pp_container">
                        <div className="update_buttons mt-4 py-3 flex flex-col">
                            <div className="update_dp my-2 flex">
                                <h3 className='font-semibold'>Update DP :</h3>
                                <input type="file" name="" id="" />
                            </div>
                            <div className="update_pass my-2 flex">
                                <h3 className='font-semibold'>Update Pass :</h3>
                                <input type="file" name="" id="" />
                            </div>
                        </div>
                        <div className="btn text-center pb-3">
                            <button className='save_changes text-center border-2 border-red-800 text-amber-400'>Save_changes</button>
                        </div>
                    </div>
                </div>


                <h2 className='text-2xl mt-4 mb-2 font-semibold'>Your Activity</h2>
                <div className="section my-1 py-1 rounded-md">
                    <div className="titles flex py-2 font-bold">
                        <h2 className='column'>POSTS</h2>
                        <h2 className='column'>TITLE</h2>
                        <h2 className='column'>Date Created</h2>
                    </div>
                </div>


                <div className="post_lists">
                    <div className="section my-2 py-2 rounded-md">
                        <div className="data flex py-2">
                            <h2 className='column'>
                                <a href="" className='button'>Visit</a>
                            </h2>
                            <h2 className='column'>See what I found</h2>
                            <h2 className='column'>Dec 12, 2024</h2>
                        </div>
                    </div>
                    <div className="section my-2 py-2 rounded-md">
                        <div className="data flex py-2">
                            <h2 className='column'>
                                <a href="" className='button'>Visit_2</a>
                            </h2>
                            <h2 className='column'>Hello Guyz! Chai Pilo...</h2>
                            <h2 className='column'>Dec 12, 2024</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile