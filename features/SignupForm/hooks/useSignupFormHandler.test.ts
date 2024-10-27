import { it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useSignupFormHandler from './useSignupFormHandler';
import SignupFormApi from './api/SignupFormApi';
import { ChangeEvent } from 'react';

// // モックAPI
// vi.mock('./SignupFormApi');

it('フォーム入力ハンドラーが正常に動作するか', () => {
    const { result } = renderHook(() => useSignupFormHandler());

    act(() => {
        result.current.handleChangeForm({
            target: { name: 'email', value: 'test@test.com' },
        } as ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formData.email).toBe('test@test.com');

    act(() => {
        result.current.handleChangeForm({
            target: { name: 'password', value: 'testpassword' },
        } as ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formData.password).toBe('testpassword');
});

it('フォーム送信ハンドラーのリクエスト成功時、正常に動作するか', async () => {
    const { result } = renderHook(() => useSignupFormHandler());

    await act(async () => {
        await result.current.handleSubmit();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(SignupFormApi).toHaveBeenCalled();
});

// it('フォーム送信ハンドラーがリクエスト失敗時、正常に動作するか', async () => {
//     SignupFormApi.mockRejectedValueOnce(new Error('新規登録に失敗しました'));

//     const { result } = renderHook(() => useSignupFormHandler());

//     await act(async () => {
//         await result.current.handleSubmit();
//     });

//     expect(result.current.loading).toBe(false);
//     expect(result.current.error).toBe('新規登録に失敗しました');
// });
