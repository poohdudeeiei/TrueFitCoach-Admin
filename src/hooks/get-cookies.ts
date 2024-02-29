'use server'
 
import { cookies } from 'next/headers'
 
export const GetCookies = () => {
    const refreshToken = cookies().get('refreshToken')
  return refreshToken
}