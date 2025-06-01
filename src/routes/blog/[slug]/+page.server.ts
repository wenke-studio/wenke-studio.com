import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    try {
        // 使用 import.meta.glob 來載入所有 markdown 檔案
        const modules = import.meta.glob("/src/lib/articles/*.md", {
            query: "?raw",
            import: "default"
        });

        // 尋找對應的檔案
        const modulePath = `/src/lib/articles/${slug}.md`;

        if (!(modulePath in modules)) {
            error(404, "Post not found");
        }

        // 載入檔案內容
        const content = await modules[modulePath]();

        return {
            content
        };
    } catch (e) {
        error(404, "Post not found");
    }
};
