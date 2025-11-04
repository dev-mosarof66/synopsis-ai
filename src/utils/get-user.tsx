"use client";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/user";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

const GetUserData = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const user = useUser();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post("/api/me", {
          email: user.user?.emailAddresses[0].emailAddress,
        });

        dispatch(setUser(response.data.user));
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    if (user.isSignedIn) {
      fetchUserData();
    }
  }, [user.isSignedIn, dispatch, user.user?.emailAddresses]);
  return <div>{children}</div>;
};

export default GetUserData;
