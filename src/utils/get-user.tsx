/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/user";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "sonner";

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
      } catch (error: any) {
        console.error("Error fetching user data: ", error);
        if (error.response.status === 429) {
          toast.error(`${error.response.data.message}`);
        } else if (error.response.status === 403) {
          toast.error(`${error.response.data.message}`);
        }
      }
    };
    if (user.isSignedIn) {
      fetchUserData();
    }
  }, [user.isSignedIn, dispatch, user.user?.emailAddresses]);
  return <div>{children}</div>;
};

export default GetUserData;
