<?php
/** Set these two addresses before enabling enquiries on PHP hosting. */
return [
    'recipient_email' => getenv('VASTU_CONTACT_EMAIL') ?: 'aanchalkhetarpal@gmail.com',
    'sender_email' => getenv('VASTU_FROM_EMAIL') ?: 'aanchalkhetarpal@gmail.com',
    'site_name' => 'Vastu Designs',
];
