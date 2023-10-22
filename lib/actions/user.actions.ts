"use server";

import { revalidatePath } from "next/cache";

const url = "https://cap-partners-investment.cyclic.app/api/v0/investors";
export async function fetchUser(userId: string) {
  try {
    const response = await fetch("https://cap-partners-investment.cyclic.app/api/v0/investors/get_profile/", {
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
export async function fetchBankDetails(email: string) {
  try {
    const url4 = "/fetch_bank_details/";
    const response = await fetch(url + url4, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
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
export async function addBankDetail({
  userID,
  bankName,
  accountNumber,
  accountName,
  email,
  username,
}: {
  userID: number;
  bankName: string;
  accountNumber: string;
  accountName: string;
  email: string;
  username: string;
}) {
  try {
    const response = await fetch(
      "https://cap-partners-investment.cyclic.app/api/v0/investors/add_bank_details/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          bankName,
          accountNumber,
          accountName,
          email,
          username,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to add Bank Details: ${error.message}`);
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
    const url2 = "/create_profile/";
    const response = await fetch(url + url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
    const result = await response.json();
    return result.payload;
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
interface cardParams {
  userID: string;
  email: string;
  fullname: string;
  amount: string;
  phone_number: string;
  cvv: string;
  pin: string;
  expiry_month: string;
  expiry_year: string;
  card_number: string;
}
export async function purchaseInvestment({
  userID,
  email,
  fullname,
  amount,
  phone_number,
  cvv,
  pin,
  expiry_month,
  expiry_year,
  card_number,
}: cardParams) {
  try {
    const response = await fetch(
      "https://cap-partners-investment.cyclic.app/api/v0/investors/invest/purchase_investment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          email,
          fullname,
          amount,
          phone_number,
          cvv,
          pin,
          expiry_month,
          expiry_year,
          card_number,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to purchase investment: ${error.message}`);
  }
}
interface validateParams {
  userID: string;
  email: string;
  username: string;
  amount: string;
  unitType: string;
  date: string;
  otp: string;
  flw_ref: string;
}
export async function ValidatePurchase({
  userID,
  email,
  username,
  amount,
  unitType,
  date,
  otp,
  flw_ref,
}: validateParams) {
  try {
    const response = await fetch(
      "https://cap-partners-investment.cyclic.app/api/v0/investors/invest/validate_purchase",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userData: {
            userID,
            email,
            username,
          },
          unitType,
          amount,
          date,
          otp,
          flw_ref,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result, response);
    return result;
  } catch (error: any) {
    throw new Error(`Failed to validate payment: ${error.message}`);
  }
}
export async function fetchInvestments(email: string) {
  try {
    const response = await fetch("https://cap-partners-investment.cyclic.app/api/v0/investors/invest/fetch_investments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch Investment: ${error.message}`);
  }
}