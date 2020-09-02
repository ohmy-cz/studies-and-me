import React, { useState, useEffect } from "react";
import User from "./User";
import { IGitUser } from "../interfaces/IGitUser";
import { IUser } from "../interfaces/IUser";

export type GitUserProps = {
  login: string
}

export default function GitUser(props: GitUserProps): JSX.Element {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<IGitUser | null>(null);
  
    useEffect(() => {
      fetch(`https://api.github.com/users/${props.login}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            return Promise.reject(response.statusText)
          }
        })
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result);
          },
          (error) => {
            setIsLoaded(true);
            setData(null);
            console.warn(error);
          }
        )
    }, [props.login]);

    return (    
      !isLoaded 
        ? <p>Loading&hellip;</p>
        : (data !== null ? <User user={(data as IUser)} /> : <p>User not found</p>)      
    );
}