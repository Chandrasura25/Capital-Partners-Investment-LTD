"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

const url ="https://cap-partners-investment.cyclic.app/api/v0/investors"; 
export async function fetchUser(userId: string) {
  try {
    const url1 = "/get_profile/";
    const response  = await fetch(url + url1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clerk_id: userId }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  firstname: string;
  surname: string;
  home_address: string;
  office_address: string;
  email: string;
  dob: string;
  phone: string;
  imageURL: string;
  gender: string;
  next_of_kin: string;
  education: string;
  mother_middle_name: string;
  path: string;
}
export async function updateUser({
  userId,
  username,
  firstname,
  surname,
  home_address,
  office_address,
  email,
  dob,
  phone,
  imageURL,
  gender,
  next_of_kin,
  education,
  mother_middle_name,
  path,
}: Params): Promise<void> {
  try {
    const url2 ="/create_profile/" ;
    const response  = await fetch(url + url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          clerk_id: userId,
          username: username.toLowerCase(),
          firstname,
          surname,
          home_address,
          office_address,
          email,
          dob,
          gender,
          phone,
          next_of_kin,
          education,
          mother_middle_name,
          imageURL,
        }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
    return result;

  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
