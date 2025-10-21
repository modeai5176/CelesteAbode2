# Environment Setup Instructions

## Create .env.local file

Create a file named `.env.local` in the root directory with the following content:

```env
# Email Configuration
EMAIL_USER=support@celesteabode.com
EMAIL_PASS=uzez qtjp gwbo yodb
ADMIN_EMAIL=support@celesteabode.com

# Phone Number
PHONE_NUMBER=+919818735258

# Website Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Celeste Abode

# Database (if needed in future)
# DATABASE_URL=your-database-url

# Analytics (if needed)
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Setup Instructions

### 1. Email Configuration
- **EMAIL_USER**: Your Gmail address (e.g., yourname@gmail.com)
- **EMAIL_PASS**: Your Gmail App Password (not your regular password)
- **ADMIN_EMAIL**: Email where advisory session requests will be sent

### 2. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password as EMAIL_PASS

### 3. Phone Number
- Update PHONE_NUMBER with your business phone number
- Format: +919818735258 (with country code)

### 4. Website Configuration
- **NEXT_PUBLIC_SITE_URL**: Your website URL
- **NEXT_PUBLIC_SITE_NAME**: Your website name

## Important Notes

- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- Restart your development server after creating the file
- All environment variables are automatically loaded by Next.js

## Testing Email Functionality

After setting up the environment variables:
1. Start your development server: `npm run dev`
2. Go to `/advisory-session`
3. Fill out the form and submit
4. Check your email for the advisory session request
5. Check the client's email for the confirmation

## Troubleshooting

### Email not sending?
- Verify EMAIL_USER and EMAIL_PASS are correct
- Make sure you're using App Password, not regular password
- Check Gmail security settings
- Ensure 2FA is enabled on your Google account

### Form not submitting?
- Check browser console for errors
- Verify all required fields are filled
- Check network tab for API call status
