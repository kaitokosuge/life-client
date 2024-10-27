import { useState } from 'react';
import { UserSignup } from '@/models/UserSignup';
import SignupFormApi from '../api/SignupFormApi';

export default function useSignupFormHandler() {
    const [formData, setFormData] = useState<UserSignup>({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
            if (e.target.name === 'email') {
                return { ...prev, email: e.target.value };
            } else if (e.target.name === 'password') {
                return { ...prev, password: e.target.value };
            }
            return prev;
        });
    };
    const handleSubmit = async () => {
        setLoading(true);
        setMessage(null);
        const res = await SignupFormApi(formData);
        setMessage(res);
        setLoading(false);
        setFormData({
            email: '',
            password: '',
        });
    };
    return { formData, handleChangeForm, handleSubmit, loading, message };
}
