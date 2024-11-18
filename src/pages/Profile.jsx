import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import UploadAvatar from "../components/UploadAvatar";
import Header from '../components/Header';

const Profile = ({ token }) => {
    const [user, setUser] = useState({});
    const [isUserUpdated, setIsUserUpdated] = useState(false);
  
    useEffect(() => {
      const getProfileData = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5173/api/users/me`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          });
          setUser(data);
          setIsUserUpdated(false);
        } catch (error) {
          console.log({ error });
        }
      };
      getProfileData();
    }, [token, isUserUpdated]);
  
    return (
        <>
            <Header />
            <div className="profile">
                <div className="avatar">
                <div className="avatar-wrapper">
                    {user.avatarUrl ? (
                    <img
                        src={`http://localhost:5173${user.avatarUrl}`}
                        alt={`${user.username} avatar`}
                    />
                    ) : (
                    <IoPersonCircleOutline />
                    )}
                    <UploadAvatar
                    token={token}
                    userId={user.id}
                    username={user.username}
                    avatarUrl={user.avatarUrl}
                    setIsUserUpdated={setIsUserUpdated}
                    />
                </div>
                </div>
                <div className="body">
                <p>FullName: {user.fullName}</p>
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>PhoneNumber: {user.phoneNumber}</p>
                </div>
            </div>
        </>
      
    );
  };
  
  export default Profile;