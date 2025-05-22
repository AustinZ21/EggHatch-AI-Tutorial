$files = @(
    "03_llm_client_.md",
    "04_data_pipeline_.md",
    "05_sentiment_analysis_agent_.md",
    "06_trend_analysis_agent_.md",
    "07_agent_state_.md",
    "08_prompts_.md"
)

foreach ($file in $files) {
    $content = Get-Content -Path $file -Raw
    $chapterNum = $file.Substring(0, 2)
    $title = $content -split "\n" | Select-Object -First 1
    
    $frontMatter = @"
---
layout: default
title: "$title"
---

"@
    
    if ($content -notmatch "^---") {
        $newContent = $frontMatter + $content
        Set-Content -Path $file -Value $newContent
        Write-Host "Added front matter to $file"
    } else {
        Write-Host "Front matter already exists in $file"
    }
}
