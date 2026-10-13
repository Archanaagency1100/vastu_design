<?php
/** Set these two addresses before enabling enquiries on PHP hosting. */
return [
    'recipient_email' => getenv('VASTU_CONTACT_EMAIL') ?: 'kumarkunal7458@gmail.com',
    'sender_email' => getenv('VASTU_FROM_EMAIL') ?: 'kunal@1100.in',
    'smtp_host' => getenv('VASTU_SMTP_HOST') ?: 'smtp.hostinger.com',
    'smtp_port' => (int) (getenv('VASTU_SMTP_PORT') ?: 465),
    'smtp_username' => getenv('VASTU_SMTP_USERNAME') ?: 'kunal@1100.in',
    'smtp_password' => getenv('VASTU_SMTP_PASSWORD') ?: '',
    'site_name' => 'Vastu Designs',
];
