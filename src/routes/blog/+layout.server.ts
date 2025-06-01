import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
    // 使用 import.meta.glob 來動態導入所有 markdown 檔案
    const modules = import.meta.glob("/src/lib/articles/*.md", {
        eager: true,
        query: "?url",
        import: "default"
    });

    // 建立文章資訊陣列
    const articles = Object.entries(modules).map(([path, fileUrl]) => {
        const slug = path.split("/").pop()?.replace(".md", "") || "";
        return {
            slug,
            filePath: path,
            fileUrl: fileUrl as string
        };
    });

    return {
        articles
    };
};
