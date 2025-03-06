import db from '../config/db.config.js';


// function for inserting and updating basic info of user
export const insert_basic_info = async (req, res) => {
    const { user_id } = req.params;

    try {
        const response = await db.query("SELECT * FROM basic_info WHERE user_id = $1", [user_id]);
        const info = [
            req.body.email,
            req.body.phone,
            req.body.linkedin,
            req.body.address,
            req.body.birth_date,
            req.body.marital_status,
            user_id
        ]

        if (response.rows.length > 0) {
            await db.query("UPDATE basic_info SET email = $1, phone_no = $2, linkedin_url = $3, address = $4, birth_date = $5, marital_status = $6 WHERE user_id = $7", info);
        } else {
            await db.query("INSERT INTO basic_info (email, phone_no, linkedin_url, address, birth_date, marital_status, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", info);
        }
        res.status(200).json({ message: "Basic info updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}



//fiunction for getting and updating rea experience of user
export const insert_rea_experience = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.college_name,
        req.body.department,
        req.body.start_year,
        req.body.end_year,
        user_id
    ]

    try {
        const response = await db.query("SELECT * FROM rea_experience WHERE user_id = $1", [user_id]);

        if (response.rows.length > 0) {
            await db.query("UPDATE rea_experience SET college_name = $1, department = $2, start_year = $3, end_year = $4 WHERE user_id = $5", info);
        } else {
            await db.query("INSERT INTO rea_experience (college_name, department, start_year, end_year, user_id) VALUES ($1, $2, $3, $4, $5)", info);
        }
        res.status(200).json({ message: "REA experience updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);

    }
}



//fiunction for getting and updating current working profile of user
export const insert_current_profile = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.job_title,
        req.body.company_name,
        req.body.employment_type,
        req.body.start_year,
        req.body.start_month,
        req.body.job_description,
        user_id
    ]

    try {
        const response = await db.query("SELECT * FROM alumni_curr_work_experience WHERE user_id = $1", [user_id]);

        if (response.rows.length > 0) {
            await db.query("UPDATE alumni_curr_work_experience SET job_title = $1, company_name = $2, employment_type = $3, start_year = $4, start_month = $5, job_description = $6 WHERE user_id = $7", info);
        } else {
            await db.query("INSERT INTO alumni_curr_work_experience (job_title, company_name, employment_type, start_year, start_month, job_description, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", info);
        }
        res.status(200).json({ message: "Current work experience updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);

    }
}



// alunmi add past work experience
export const insert_past_working_experience = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.job_title,
        req.body.company_name,
        req.body.employment_type,
        req.body.start_year,
        req.body.start_month,
        req.body.end_year,
        req.body.end_month,
        req.body.job_description,
        user_id
    ]

    try {
        await db.query("INSERT INTO alumni_past_work_experiences (job_title, company_name, employment_type, start_year, start_month, end_year, end_month, job_description, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", info);
        res.status(201).json({ message: "added past work experience successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}



// alumni update past work experience
export const update_past_working_experience = async (req, res) => {
    const {work_id} = req.params;
    const info = [
        req.body.job_title,
        req.body.company_name,
        req.body.employment_type,
        req.body.start_year,
        req.body.start_month,
        req.body.end_year,
        req.body.end_month,
        req.body.job_description,
        work_id,
    ]
    

    try {
        await db.query("UPDATE alumni_past_work_experiences SET job_title = $1, company_name = $2, employment_type = $3, start_year = $4, start_month = $5, end_year = $6, end_month = $7, job_description = $8 WHERE work_id = $9",info);
        res.status(201).json({ message: "updated past work experience successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}


// for add and update alumni profile summary
export const insert_alumni_Profile_summary = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.profile_summary,
        user_id
    ]

    try {

        const response = await db.query("SELECT summary_id FROM alumni_profile_summaries WHERE user_id = $1", [user_id]);

        if (response.rows.length > 0) {
            await db.query("UPDATE alumni_profile_summaries SET profile_summary = $1 WHERE user_id = $2", info);
            res.status(201).json({ message: "updated profile summary successfully" });
        } else {
            await db.query("INSERT INTO alumni_profile_summaries (profile_summary, user_id) VALUES ($1, $2)", info);
            res.status(201).json({ message: "added profile summary successfully" });
        }

       
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
} 

// add educational experience
export const insert_educational_experience = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.instution_name,
        req.body.degree_course,
        req.body.start_year,
        req.body.start_month,
        req.body.end_year,
        req.body.end_month,
        req.body.grade_percentage,
        user_id
    ]

    try {
        await db.query("INSERT INTO educational_experience (institution_name, degree_course_name, start_year, start_month, end_year, end_month, grade_percentage, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", info);
        res.status(201).json({ message: "Education added successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}   

// update educational experience
export const update_educational_experience = async (req, res) => {

    const {edu_id} = req.params;
    const info = [
        req.body.instution_name,
        req.body.degree_course,
        req.body.start_year,
        req.body.start_month,
        req.body.end_year,
        req.body.end_month,
        req.body.grade_percentage,
        edu_id
    ]
    

    try {
        await db.query("UPDATE educational_experience SET institution_name = $1, degree_course_name = $2, start_year = $3, start_month = $4, end_year = $5, end_month = $6, grade_percentage = $7 WHERE edu_id = $8",info);
        res.status(201).json({ message: "updated  education successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}


// add skills
export const add_skills = async (req, res) => {
    const { user_id } = req.params;
    const info = [
        req.body.skill_name,
        user_id
    ]

    try {
        await db.query("INSERT INTO alumni_skills (skill_name, user_id) VALUES ($1, $2)", info);
        res.status(201).json({ message: "Skill added successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }    
}