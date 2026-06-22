<?php

namespace Tests\Feature;

use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_submission_is_saved_and_emailed(): void
    {
        Mail::fake();

        config(['mail.contact.to' => 'owner@example.com']);

        $payload = [
            'name' => 'Jane Visitor',
            'email' => 'jane@example.com',
            'subject' => 'Project inquiry',
            'message' => 'I would like to talk about a portfolio project.',
        ];

        $response = $this->postJson('/api/contact', $payload);

        $response->assertCreated()
            ->assertJsonPath('message', 'Thanks for reaching out. I will get back to you soon.');

        $this->assertDatabaseHas('contact_messages', $payload);

        $contactMessage = ContactMessage::firstOrFail();

        Mail::assertSent(ContactMessageReceived::class, function (ContactMessageReceived $mail) use ($contactMessage) {
            return $mail->hasTo('owner@example.com')
                && $mail->contactMessage->is($contactMessage);
        });
    }
}
