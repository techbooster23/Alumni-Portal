INSERT INTO jobs (user_id, title, company, location, vacancies, type, overview, apply_link)
VALUES ('f9e1a028-d76d-46bc-afc0-8542affec001',
        'Software Engineer',
        'ABC Company',
        'Amravati, Maharashtra, India',
        4,
        'Remote',
        'As a Software Engineer, you will design and develop cloud storage solutions, collaborate with cross-functional teams, and ensure high performance in network storage infrastructure.',
        'https://www.example.com/apply');


INSERT INTO jobs (user_id, title, company, location, vacancies, type, overview, apply_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)