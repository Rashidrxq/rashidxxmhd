"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
    const user = formData.get("username");
    const pass = formData.get("password");

    if ((user === "admin" || user === "rashixxmhd") && pass === "admin123") {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 // 1 day
        });
        return { success: true };
    }

    return { success: false };
}
