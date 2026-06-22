<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class ContactMessageController extends Controller
{
    public function store(StoreContactMessageRequest $request): JsonResponse
    {
        $message = ContactMessage::create($request->validated());

        Mail::to(config('mail.contact.to'))->send(new ContactMessageReceived($message));

        return response()->json([
            'message' => 'Thanks for reaching out. I will get back to you soon.',
            'data' => $message,
        ], 201);
    }
}
