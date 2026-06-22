<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>New Portfolio Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
    <h1 style="font-size: 20px;">New Portfolio Contact Message</h1>

    <p><strong>Name:</strong> {{ $contactMessage->name }}</p>
    <p><strong>Email:</strong> {{ $contactMessage->email }}</p>
    <p><strong>Subject:</strong> {{ $contactMessage->subject }}</p>

    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">{{ $contactMessage->message }}</p>
</body>
</html>
