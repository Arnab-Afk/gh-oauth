import { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
function GitHubCallback() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            axios.post('http://localhost:5000/auth/github/callback',{
            code
            }).then(response => {
            console.log(response.data);
            localStorage.setItem('github-code', response.data.accessToken);
            window.location.href = '/starred';
            }).catch(error => {
            console.error('Error getting starred repos:', error);
            });
            console.log('code', response.data.accessToken);
            
        }
    }, []);

    return <div>Processing GitHub login...</div>;
}

export default GitHubCallback;