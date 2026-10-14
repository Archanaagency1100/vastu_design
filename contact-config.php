<?php
/** Set these two addresses before enabling enquiries on PHP hosting. */
return [
    'recipient_email' => getenv('VASTU_CONTACT_EMAIL') ?: 'vastudesignsnz@gmail.com',
    'sender_email' => getenv('VASTU_FROM_EMAIL') ?: 'kunal@vastudesigns.co.nz',
    'smtp_host' => getenv('VASTU_SMTP_HOST') ?: 'smtp.hostinger.com',
    'smtp_port' => (int) (getenv('VASTU_SMTP_PORT') ?: 465),
    'smtp_username' => getenv('VASTU_SMTP_USERNAME') ?: 'kunal@vastudesigns.co.nz',
    'smtp_password' => getenv('VASTU_SMTP_PASSWORD') ?: 'Fb7f/y$sSh&1',
    'site_name' => 'Vastu Designs',
];
