[View in English (查看英文版本)](README.md)

# 个人博客

这是一个个人博客网站。它包含按日期组织的各种主题的博客文章。

## 项目结构

- `1/`: 包含一个 `index.html` 文件，仅从结构无法明确其用途。
- `2025/`: 包含按年、月、日组织的博客文章。例如, `2025/02/11/hello-world/index.html`。
- `archives/`: 包含博客文章的归档，可能是生成的。
- `categories/`: 包含博客文章的分类页面 (例如, `categories/技术/index.html`)。
- `css/`: 包含用于网站样式的 CSS 文件 (`custom.css`, `index.css`, `style.css`, `var.css`)。
- `dist/`: 包含压缩后的 APlayer (一个音乐播放器) 资源。
- `fancybox/`: 包含 Fancybox (一个灯箱效果的 JavaScript 库) 的资源。
- `images/`: 包含博客文章和网站设计中使用的图片。
- `img/`: 包含常规网站图片、favicon 以及可能用于文章的一些媒体文件。
- `js/`: 包含网站功能的 JavaScript 文件 (`main.js`, `script.js` 等) 和库 (jQuery)。
- `tags/`: 包含博客文章的标签页面 (例如, `tags/文件传输/index.html`)。
- `index.html`: 博客的主登陆页面。
- `sitemap.txt`, `sitemap.xml`: 用于搜索引擎索引的站点地图。
- `google838506fb3e8f3cf1.html`: Google 网站验证文件。

## 如何查看博客

这是一个静态网站。要查看博客：

1. 将此仓库克隆到您的本地计算机。
2. 在您的网页浏览器中打开 `index.html` 文件。

或者，如果已托管，您可以通过其 URL 访问。

## 创建新文章

虽然未指定生成文章的确切方法（例如，使用 Hexo 或 Jekyll 等静态网站生成器），但您可以按照以下步骤手动创建新文章：

1.  **为您的文章创建一个新的目录结构**，在根目录下，遵循 `YYYY/MM/DD/your-post-title/` 的模式。例如，对于2024年3月15日创建的题为 "My New Adventure" 的文章，您将创建 `2024/03/15/my-new-adventure/`。
2.  在此新目录中**创建一个 `index.html` 文件** (例如, `2024/03/15/my-new-adventure/index.html`)。
3.  在此 `index.html` 文件中**撰写您的博客文章内容**。您可以使用现有文章作为 HTML 结构的模板。
4.  **更新归档、分类和标签 (可能需要手动)**:
    *   您可能需要手动更新 `archives/`, `categories/`, 和 `tags/` 目录中相关的 `index.html` 文件，以包含指向您新文章的链接。检查现有文章在这些文件中的链接方式以了解所需格式。
    *   如果使用静态网站生成器，这些页面可能会在网站重建时自动更新。

**注意:** 如果此博客由静态网站生成器管理，请参阅其文档以了解创建新内容的正确方法。以上步骤描述了基于观察到的文件结构的手动方法。

## 自定义博客

您可以自定义博客的外观和功能：

-   **样式:** 修改 `css/` 目录中的 CSS 文件 (例如, `custom.css`, `style.css`) 以更改博客的视觉外观。
-   **功能:** 如果您需要更改或添加基于 JavaScript 的功能，您可以编辑 `js/` 目录中的文件。
-   **音乐播放器:** 博客使用 APlayer。音乐播放器的配置可能可以在 `dist/music.js` 文件中找到或修改，或者在 HTML/JS 中初始化 `APlayer` 的位置。
-   **图片和媒体:** 替换或添加 `images/` 和 `img/` 目录中的图片。
