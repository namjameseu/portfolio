<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'name' => 'James Christian Pineda',
            'role' => 'Full-Stack Developer',
            'location' => 'Central Luzon, Philippines',
            'email' => 'pinedajames679@gmail.com',
            'linkedin' => 'https://www.linkedin.com/in/james-christian-pineda/',
            'github' => 'https://github.com/namjameseu',
            'resumeUrl' => '/James-Christian-Pineda-Resume.txt',
            'summary' => 'Full-stack developer building practical web applications with React, Laravel, Node.js, REST APIs, and MySQL. Experienced in production support, CI/CD workflows, database migrations, deployments, and AI-assisted development.',
            'highlights' => [
                '2+ years of full-stack development experience',
                'React, Laravel, Node.js, REST API, and MySQL delivery',
                'Hands-on staging and production deployment experience',
                'Cum Laude B.S. Information Technology graduate',
            ],
            'experience' => [
                [
                    'company' => 'Shore360, Inc.',
                    'role' => 'Full-Stack Developer',
                    'period' => 'Feb 2024 - Present',
                    'location' => 'Clark, Pampanga, Philippines',
                    'achievements' => [
                        'Developed and maintained full-stack features for client and staff management workflows.',
                        'Built and supported React, Node.js, MySQL, and REST API features.',
                        'Managed staging and production deployments, migrations, and rollback support.',
                        'Used AI-assisted workflows to speed up debugging, SQL optimization, documentation, and prototyping.',
                    ],
                ],
                [
                    'company' => 'Pampanga State University',
                    'role' => 'Team Leader / Frontend Mobile Developer',
                    'period' => 'May 2023 - Dec 2023',
                    'location' => 'Mexico, Pampanga',
                    'achievements' => [
                        'Led a capstone team through planning, risk tracking, and delivery.',
                        'Built mobile frontend features with React Native.',
                    ],
                ],
            ],
            'education' => [
                [
                    'school' => 'Pampanga State University - Mexico Campus',
                    'degree' => 'B.S. in Information Technology',
                    'period' => '2020 - 2024',
                    'honor' => 'Cum Laude',
                ],
            ],
        ]);
    }
}
