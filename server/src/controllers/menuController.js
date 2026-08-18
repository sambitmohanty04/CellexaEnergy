import pool from "../db.js";
// menu api
export const getMenu = async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT
        id,
        menu_name AS name,
        menu_link AS link
      FROM public.menu
      WHERE is_active = true
      ORDER BY display_order
    `);
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error("Menu Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch menu",
        });
    }
};
// submenu api
export const getSubmenu = async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT
        id,
        menu_id,
        submenu_name AS smenu_name,
        submenu_link AS smenu_link
      FROM public.submenu
      ORDER BY menu_id, display_order
    `);
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error("Submenu Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch submenu",
        });
    }
};
//# sourceMappingURL=menuController.js.map