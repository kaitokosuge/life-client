'use client';
import useSignupFormHandler from './hooks/useSignupFormHandler';

export default function SignupForm() {
    const { formData, handleChangeForm, handleSubmit, message, loading } =
        useSignupFormHandler();
    return (
        <div className="text-black">
            <input
                type="email"
                name="email"
                value={formData?.email}
                onChange={(e) => handleChangeForm(e)}
            />
            <input
                type="password"
                name="password"
                value={formData?.password}
                onChange={(e) => handleChangeForm(e)}
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'ロード中' : '新規登録'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}
