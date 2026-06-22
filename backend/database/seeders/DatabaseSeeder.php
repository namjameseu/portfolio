<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $skills = [
            ['name' => 'React.js', 'category' => 'Frontend', 'proficiency' => 92, 'display_order' => 1],
            ['name' => 'TypeScript', 'category' => 'Frontend', 'proficiency' => 86, 'display_order' => 2],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend', 'proficiency' => 88, 'display_order' => 3],
            ['name' => 'Material UI', 'category' => 'Frontend', 'proficiency' => 82, 'display_order' => 4],
            ['name' => 'Ant Design', 'category' => 'Frontend', 'proficiency' => 80, 'display_order' => 5],
            ['name' => 'Laravel', 'category' => 'Backend', 'proficiency' => 86, 'display_order' => 1],
            ['name' => 'PHP', 'category' => 'Backend', 'proficiency' => 84, 'display_order' => 2],
            ['name' => 'Node.js', 'category' => 'Backend', 'proficiency' => 88, 'display_order' => 3],
            ['name' => 'REST APIs', 'category' => 'Backend', 'proficiency' => 90, 'display_order' => 4],
            ['name' => 'MySQL', 'category' => 'Database', 'proficiency' => 88, 'display_order' => 1],
            ['name' => 'PostgreSQL', 'category' => 'Database', 'proficiency' => 76, 'display_order' => 2],
            ['name' => 'Git', 'category' => 'Tools & DevOps', 'proficiency' => 88, 'display_order' => 1],
            ['name' => 'CI/CD Workflows', 'category' => 'Tools & DevOps', 'proficiency' => 82, 'display_order' => 2],
            ['name' => 'AWS', 'category' => 'Tools & DevOps', 'proficiency' => 74, 'display_order' => 3],
            ['name' => 'Cursor & ChatGPT', 'category' => 'Tools & DevOps', 'proficiency' => 90, 'display_order' => 4],
        ];

        foreach ($skills as $skill) {
            Skill::updateOrCreate(
                ['name' => $skill['name'], 'category' => $skill['category']],
                $skill
            );
        }

        $projects = [
            [
                'title' => 'MyShore Platform Contributions',
                'description' => 'Contributed to full-stack client and staff management features, production support workflows, database migrations, and release processes for a business platform.',
                'tech_stack' => ['React.js', 'Node.js', 'MySQL', 'REST APIs', 'CI/CD'],
                'source_url' => null,
                'demo_url' => null,
                'featured' => true,
                'display_order' => 1,
            ],
            [
                'title' => 'Full-Stack Portfolio API',
                'description' => 'Laravel and MySQL API powering portfolio profile data, categorized skills, project records, and validated contact form submissions.',
                'tech_stack' => ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
                'source_url' => null,
                'demo_url' => null,
                'featured' => true,
                'display_order' => 2,
            ],
            [
                'title' => 'Capstone Mobile Application',
                'description' => 'Led a university capstone team and built mobile frontend features while managing progress, risks, and delivery milestones.',
                'tech_stack' => ['React Native', 'Project Leadership', 'Frontend Development'],
                'source_url' => null,
                'demo_url' => null,
                'featured' => false,
                'display_order' => 3,
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(
                ['title' => $project['title']],
                $project
            );
        }
    }
}
