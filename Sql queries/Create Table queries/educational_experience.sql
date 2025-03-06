CREATE TABLE educational_experience (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    institution_name VARCHAR(255) NOT NULL,
    degree_course_name VARCHAR(255) NOT NULL,
    start_year INT NOT NULL,
    start_month INT NOT NULL CHECK (start_month BETWEEN 1 AND 12),
    end_year INT,
    end_month INT CHECK (end_month BETWEEN 1 AND 12),
    grade_percentage VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);