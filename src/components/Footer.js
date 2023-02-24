import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#f5f5f5',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            marginLeft: '8px',
            marginRight: '8px',
        },
    };

    return (
        <footer style={styles.footer}>
            <IconButton
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <TwitterIcon />
            </IconButton>
            <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <YouTubeIcon />
            </IconButton>
            <IconButton
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener"
                style={styles.icon}
            >
                <PinterestIcon />
            </IconButton>
        </footer>
    );
}

export default Footer;
