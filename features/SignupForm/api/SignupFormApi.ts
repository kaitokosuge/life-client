import { UserSignup } from '@/models/UserSignup';
import React from 'react';

export default async function SignupFormApi(formData: UserSignup) {
    try {
        const res = await fetch('http://localhost:3005/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const resData = await res.json();
        return resData.message;
    } catch (error) {
        return error;
    }
}
