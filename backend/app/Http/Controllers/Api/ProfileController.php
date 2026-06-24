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
            'summary' => 'I build practical web applications across React, Laravel, Node.js, REST APIs, and MySQL, with hands-on experience supporting releases, database migrations, deployments, and production workflows.',
            'highlights' => [
                'Production-minded full-stack development across frontend, backend, and database layers',
                'Comfortable with staging releases, migrations, rollback support, and support workflows',
                'Strong React, Laravel, Node.js, REST API, and MySQL delivery foundation',
                'Cum Laude B.S. Information Technology graduate with team leadership experience',
            ],
            'experience' => [
                [
                    'company' => 'Shore360, Inc.',
                    'role' => 'Full-Stack Developer',
                    'period' => 'Feb 2024 - Present',
                    'location' => 'Clark, Pampanga, Philippines',
                    'achievements' => [
                        'Contributed to the development and enhancement of MyShore, a platform for client and staff management.',
                        'Developed and maintained full-stack features using React.js, Node.js, MySQL, and REST APIs.',
                        'Leveraged AI-assisted development tools to accelerate debugging, refactoring, documentation, and feature prototyping.',
                        'Managed staging and production deployments, database migrations, release checks, and rollback support.',
                    ],
                ],
                [
                    'company' => 'Capstone/Thesis Project',
                    'role' => 'Team Leader / Frontend Mobile Developer',
                    'period' => 'May 2023 - Dec 2023',
                    'location' => 'Pampanga State University',
                    'achievements' => [
                        'Led a team to design and implement a mobile app.',
                        'Managed project progress, tracked risks, and resolved issues promptly.',
                        'Balanced leadership with hands-on React Native development.',
                    ],
                ],
                [
                    'company' => 'VXI',
                    'role' => 'Intern',
                    'period' => 'Jan 2020',
                    'location' => 'Clark, Pampanga, Philippines',
                    'achievements' => [
                        'Assisted applicants with digital registration, ensuring smooth onboarding.',
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
                [
                    'school' => 'Systems Plus College Foundation - Miranda Branch',
                    'degree' => 'Senior High School',
                    'period' => '2018 - 2020',
                    'honor' => 'With High Honors',
                ],
                [
                    'school' => 'Don Jesus Gonzales High School',
                    'degree' => 'Junior High School',
                    'period' => '2014 - 2018',
                    'honor' => 'With Honors',
                ],
            ],
        ]);
    }
}
