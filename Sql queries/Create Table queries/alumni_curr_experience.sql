CREATE TABLE alumni_curr_work_experience (
    work_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,   -- Unique ID for each work entry
    user_id UUID NOT NULL,                                -- References the user in the users table
    job_title VARCHAR(255) NOT NULL,                     -- Job title (e.g., Software Engineer)
    company_name VARCHAR(255) NOT NULL,                  -- Company name
    employment_type VARCHAR(50) CHECK (employment_type IN ('Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance', 'Self-employed')) NOT NULL, -- Employment type
    start_month INT CHECK (start_month BETWEEN 1 AND 12) NOT NULL, -- Start month (1 to 12)
    start_year INT CHECK (start_year > 1900) NOT NULL,   -- Start year validation
    job_description TEXT,                                 -- Job description
    created_at TIMESTAMP DEFAULT NOW(),                  -- Timestamp of entry creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Linking to users table
);
