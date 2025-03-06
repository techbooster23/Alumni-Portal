import { Router } from "express";
import { insert_basic_info, insert_rea_experience, insert_current_profile, insert_past_working_experience, update_past_working_experience , insert_alumni_Profile_summary , insert_educational_experience, update_educational_experience, add_skills} from "../controller/profile.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/basic-info/:user_id", authMiddleware, insert_basic_info);

router.post("/rea/:user_id", authMiddleware, insert_rea_experience);

router.post("/current-working-profile/:user_id", authMiddleware, insert_current_profile);

router.post("/past-working-experience/add/:user_id", authMiddleware, insert_past_working_experience);

router.put("/past-working-experience/update/:work_id", authMiddleware, update_past_working_experience);

router.post("/profile-summary/:user_id", authMiddleware, insert_alumni_Profile_summary);

router.post("/education/add/:user_id", authMiddleware, insert_educational_experience);

router.put("/education/update/:edu_id", authMiddleware, update_educational_experience);

router.post("/skills/add/:user_id", authMiddleware, add_skills);

export default router;