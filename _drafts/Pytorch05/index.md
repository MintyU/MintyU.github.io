---
title: 자연어 처리(NLP)의 전처리 - 워드 임베딩
date: 2021-05-02
tags:
  - Pytorch
keywords:
  - Pytorch
  - Deep Learning
  - Machine Learning
  - NLP
  - Natural Language Processing
  - 머신러닝
  - 딥러닝
  - 자연어 처리
  - 워드 임베딩
  - Word Embedding
---

## 워드 임베딩

워드 임베딩이란, 단어를 **밀집 벡터(Dense Vector)**의 형태로 표현하는 방법입니다. 또한 이 워드 임베딩 과정을 거쳐 나온 밀집 벡터의 이름을 **임베딩 벡터(Embedding Vector)**라고 합니다.

| |원-핫 벡터|임베딩 벡터|
|------|---|---|
|차원|고차원|저차원|
|다른 표현|희소 벡터의 일종|밀집 벡터의 일종|
|표현 방법|0, 1|real number|