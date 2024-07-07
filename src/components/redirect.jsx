import { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
function GitHubCallback() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            localStorage.setItem('github-code', code);
            window.location.href = '/starred';
        }
    }, []);

    return <div>Processing GitHub login...</div>;
}

export default GitHubCallback;