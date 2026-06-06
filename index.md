---
layout: default
title: EggHatch-AI Codebase Guide
description: Learn how EggHatch-AI turns laptop shopping questions into explainable, data-backed recommendations.
---

EggHatch-AI is an open-source AI shopping agent prototype for PC building and gaming laptop recommendations. It combines conversational intent understanding, review analysis, deterministic comparison logic, and local LLM synthesis into a small but thoughtfully structured demo.

This tutorial focuses on the current codebase shape:

- the Streamlit dashboard and multi-turn chat loop
- the master agent orchestration flow
- the data and NLP pipeline behind recommendations
- the new explainable laptop comparison flow
- the repo's new spec-driven development workflow

**Source Repository:** [AustinZ21/EggHatch-AI](https://github.com/AustinZ21/EggHatch-AI)

```mermaid
flowchart LR
    UI["Streamlit UI"] --> MA["Master Agent"]
    MA --> DP["Data Pipeline"]
    MA --> TA["Trend Analysis"]
    TA --> SA["Sentiment Analysis"]
    TA --> CMP["Comparison Helper"]
    MA --> LLM["Ollama Client"]
    MA --> STATE["Agent State"]
    SPEC["Spec-Driven Workflow"] --> MA
```

## What Changed Recently

- EggHatch-AI now supports **structured laptop comparison rationale** for explicit comparison queries.
- Comparison output is now rendered in the dashboard instead of living only in the generated response text.
- The repository now includes a **spec-driven scaffold** (`.specify/`, `.agents/skills/`, `AGENTS.md`) for structured iteration.
- `graphify-out/` artifacts are being used to map the project structure as the codebase evolves.

## Recommended Reading Path

If you want the fastest mental model, read in this order:

1. Master Agent
2. Trend Analysis
3. Explainable Comparison
4. Agent State
5. Prompts
6. Spec-Driven Workflow

## Chapters

<div class="chapter-grid">
  <a class="chapter-card" href="{{ site.baseurl }}/01_user_interface__dashboard__.html">
    <span class="chapter-card__number">01</span>
    <span class="chapter-card__title">User Interface</span>
    <span class="chapter-card__copy">How the Streamlit dashboard captures queries, streams answers, and now displays comparison breakdowns.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/02_master_agent__orchestrator__.html">
    <span class="chapter-card__number">02</span>
    <span class="chapter-card__title">Master Agent</span>
    <span class="chapter-card__copy">The orchestrator that interprets user intent, runs analysis tasks, and synthesizes the final answer.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/03_llm_client_.html">
    <span class="chapter-card__number">03</span>
    <span class="chapter-card__title">LLM Client</span>
    <span class="chapter-card__copy">How EggHatch-AI talks to a local Ollama model and handles generation requests.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/04_data_pipeline_.html">
    <span class="chapter-card__number">04</span>
    <span class="chapter-card__title">Data Pipeline</span>
    <span class="chapter-card__copy">Fixture loading, preprocessing, and feature engineering for recommendation logic.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/05_sentiment_analysis_agent_.html">
    <span class="chapter-card__number">05</span>
    <span class="chapter-card__title">Sentiment Analysis</span>
    <span class="chapter-card__copy">How the project turns raw review text into positive, neutral, and negative signals.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/06_trend_analysis_agent_.html">
    <span class="chapter-card__number">06</span>
    <span class="chapter-card__title">Trend Analysis</span>
    <span class="chapter-card__copy">Topic modeling, feature signals, top candidates, and the comparison payload that now sits on top.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/07_agent_state_.html">
    <span class="chapter-card__number">07</span>
    <span class="chapter-card__title">Agent State</span>
    <span class="chapter-card__copy">The shared state object that lets each step add context without losing the thread.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/08_prompts_.html">
    <span class="chapter-card__number">08</span>
    <span class="chapter-card__title">Prompts</span>
    <span class="chapter-card__copy">The prompt layer that turns structured analysis into constrained recommendation responses.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/09_explainable_comparison_.html">
    <span class="chapter-card__number">09</span>
    <span class="chapter-card__title">Explainable Comparison</span>
    <span class="chapter-card__copy">The newest feature: deterministic scoring, tradeoffs, and recommendation rationale for laptop comparisons.</span>
  </a>
  <a class="chapter-card" href="{{ site.baseurl }}/10_spec_driven_workflow_.html">
    <span class="chapter-card__number">10</span>
    <span class="chapter-card__title">Spec-Driven Workflow</span>
    <span class="chapter-card__copy">How `.specify/` and Codex skills now shape feature design, planning, tasks, and implementation.</span>
  </a>
</div>
